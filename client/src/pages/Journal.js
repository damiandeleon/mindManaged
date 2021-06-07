
import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card, CardDeck, Button, Jumbotron, Dropdown, DropdownButton, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";
import './Journal.css';


const Journal = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var YYYY = today.getFullYear();
    var HHMT = today.getHours();
    var HH = (today.getHours() + 24) % 12 || 12;
    var mm = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    var ampm = HHMT >= 12 ? 'pm' : 'am';

    today = MM + '/' + DD + '/' + YYYY
    // + ' ' + HH + ':' + mm + ampm;
    let time = HH + ':' + mm + ampm;


    const [JournalEntry, setJournalEntry] = useState({
        text: "",
        moodLevel: 5,
        date: today,
        time: time,
    })
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadEntries()
    }, [])

    const loadEntries = () => {
        API.getEntries()
            .then(res =>
                setJournalEntry(res.data),
            )
            .catch(err => console.log(err));
    };

    const deleteEntry = (id) => {
        API.deleteEntry(id)
            .then(res => loadEntries())
            .catch(err => console.log(err));
    };

    const handleTextChange = (event) => {

        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        API.saveEntry({
            moodLevel: formObject.moodLevel,
            text: formObject.text,
            date: today,
            time: time
        })

            .then(res => loadEntries())
            .catch(err => console.log(err));
         
    }




    return (
        <Container fluid>



            <Jumbotron id="jumbo-bg2">
                <div className="text-center">
                    <h1 style={{ fontSize: '75px' }} variant="info" id="jumbo-title">Your Journal</h1>
                    <h4>A sanctuary for your thoughts</h4>
                    <h6 >{today} </h6>
                    <br></br>
                </div>
            </Jumbotron>
            <Row>

                <Col md={9} >
                {/* <Card.Img id="CardImg" fluid src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_482405534_309336.jpg"/> */}

                    <Form style={{background: 'lightcyan'}} onSubmit={handleFormSubmit}  >
                        
                        <CardDeck id="fade-in">
                            
                            <Card.Body style={{ textAlign: 'center' }}>
                                
                                <h1>Select Today's Mood</h1>
                                
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

                        <CardDeck id="fade-in2" variant='top'>
                            <Card.Body style={{  textAlign: 'center' }}>
                                <h1 >Today's Journal Entry</h1>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    name="text"
                                    onChange={handleTextChange}
                                />
                                <Button style={{ margin: '10px' }}
                                    type="submit" value="Submit">Submit</Button>
                            </Card.Body>
                        </CardDeck>



                    </Form>

                    <br />


                </Col>
                <Col md={3}>
                    <Card.Body id="fade-in3" style={{  textAlign: 'center', background: 'lightgrey'}}>
                        <h1> Journal Entries </h1>
                        {JournalEntry.length ? (
                            <ListGroup>
                                {JournalEntry.map(entry => (

                                    <ListGroup.Item key={entry._id}>
                                        <Link to={("/entries/" + entry._id)}>
                                            <p style={{ fontSize: 'smallest' }} > Entry Date: {entry.date + " " + entry.time}</p>
                                            <p style={{ fontSize: 'smallest' }} >  Mood Level {entry.moodLevel} </p>
                                        </Link>
                                        <Button size="sm" id="deleteButton" onClick={() => deleteEntry(entry._id)}>Delete</Button>
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

