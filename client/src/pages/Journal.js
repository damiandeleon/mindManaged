
import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card, CardDeck, Button, Jumbotron, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";
import './Journal.css';
import { useAuth0 } from '@auth0/auth0-react';

const Journal = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var YYYY = today.getFullYear();
    var HHMT = today.getHours();
    var HH = (today.getHours() + 24) % 12 || 12;
    var mm = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    var ampm = HHMT >= 12 ? 'pm' : 'am';
    const {user} = useAuth0()
    const id = user.sub;

    today = MM + '/' + DD + '/' + YYYY
    // + ' ' + HH + ':' + mm + ampm;
    let time = HH + ':' + mm + ampm;


    const [JournalEntry, setJournalEntry] = useState({
        text: "",
        moodLevel: 5,
        date: today,
        time: time,
        user_id: "",
    })
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadEntries(user.sub)
    }, [])

    const loadEntries = (id) => {
        API.getEntries(id)
            .then(res => setJournalEntry(res.data))
            .catch(err => console.log(err));
    };

    const deleteEntry = (id) => {
        API.deleteEntry(id)
            .then(res => loadEntries(user.sub))
            .catch(err => console.log(err));
    };

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleFormSubmit = (event) => {
        //event.preventDetault() was removed to allow page to refresh and clear out input box
        API.saveEntry({
            moodLevel: formObject.moodLevel,
            text: formObject.text,
            date: today,
            time: time,
            user_id: user.sub, //assigns the loggged in user to the post
        })

            .then(res => loadEntries(user.sub))
            .catch(err => console.log(err));

    }




    return (
        <Container>
            <Jumbotron id="jumbo-bg2" style={{ borderRadius: '20px' }}>
                <div className="text-center" id="jumbo-title">
                    <h1 id="jumbo-title" style={{ textShadow: '4px 4px rgba(50,50,50, 0.8)' }}>Journal</h1>
                    <h5>- A sanctuary for your thoughts -</h5>
                    <h6>{today}</h6>
                </div>
            </Jumbotron>
            <Row>

                <Col sm={12} md={12} lg={8} >
                {/* <Card.Img id="CardImg" fluid src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_482405534_309336.jpg"/> */}

                    <Form style={{ backgroundColor: 'rgba(165,200,160,0.975)', borderRadius: '10px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black' }} id="fade-in" >
                        
                        <CardDeck>
                            
                            <Card.Body style={{ textAlign: 'center' }}>
                                
                                <h1 style={{ textShadow: '1px 1px rgba(75,75,75, 0.6)' }}>Select Today's Mood</h1>
                                
                                <Form.Label>

                                    <Form.Control
                                        as="select"
                                        onChange={handleTextChange}
                                        name="moodLevel"
                                        className='primary'
                                    >
                                        <option value={0}  >Select a Mood Level</option>
                                        <option value={5}  >5 Very Happy</option>
                                        <option value={4}  >4 Somewhat Happy</option>
                                        <option value={3}  >3 Neutral</option>
                                        <option value={2}  >2 Somewhat Sad</option>
                                        <option value={1}  >1 Very Sad</option>

                                    </Form.Control>
                                </Form.Label>
                            </Card.Body>
                        </CardDeck>
                        <hr></hr>
                        <CardDeck variant='top'>
                            <Card.Body style={{  textAlign: 'center' }}>
                                <h1 style={{ textShadow: '1px 1px rgba(75,75,75, 0.6)' }}>Today's Journal Entry</h1>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    name="text"
                                    placeholder="Enter text here"
                                    onChange={handleTextChange}
                                    style={{borderRadius: '10px', width: '97%', marginLeft: 'auto', marginRight: 'auto'}}
                                />
                                <Button style={{ margin: '10px' }}
                                    type="submit" value="Submit" onClick={handleFormSubmit} variant="primary" >Submit</Button>
                            </Card.Body>
                        </CardDeck>



                    </Form>

                    <br />


                </Col>
                <Col sm={12} md={12} lg={4}>
                    <Card.Body id="fade-in2" style={{  textAlign: 'center', backgroundColor: 'rgba(165,200,160,0.975)', borderRadius: '10px', color: 'black', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', height: 'auto' }}>
                        <h1 style={{ textShadow: '1px 1px rgba(75,75,75, 0.6)' }}>Journal Entries</h1>
                        <h6>Hover over and click on an entry to see the details</h6>
                        <hr></hr>
                        {JournalEntry.length ? (
                            <ListGroup style={{ overflow: 'auto', height: '370px', borderRadius: '5px' }}>
                                {JournalEntry.map(entry => (

                                    <ListGroup.Item key={entry._id}>
                                        <Link to={("/entries/" + entry._id)}>
                                            <p style={{ fontSize: 'smallest', color: 'black' }} > Entry Date: {entry.date + " - " + entry.time}</p>
                                            <p style={{ fontSize: 'smallest', color: 'black' }} >  Mood Level {entry.moodLevel} </p>
                                        </Link>
                                        <Button size="sm" id="deleteButton" variant="danger" onClick={() => deleteEntry(entry._id)}>Delete</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
};


export default Journal;

