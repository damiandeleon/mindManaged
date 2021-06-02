
import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


const Journal = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0'); 
    var YYYY = today.getFullYear();
    var HH = today.getHours();
    var mm = today.getMinutes();
    var ampm = HH >= 12? 'pm' : 'am';
    const { isAuthenticated } = useAuth0();

    today = MM + '/' + DD + '/' + YYYY + ' - ' + HH + ':' + mm + ampm;


    const [JournalEntry, setJournalEntry] = useState({
        text: "",
        moodLevel: 5,
        date: today,
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
        setFormObject({...formObject, [name]: value})
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        API.saveEntry({
            moodLevel: formObject.moodLevel,
            text: formObject.text,
            date: today
        })
        
        .then(res=> loadEntries())
        .catch(err => console.log(err));
    }

    return (
      isAuthenticated &&
        <Container fluid="true">
            <Row>

                <Col md={7}>
                    <div className="journalpageheader">

                        <h2 value={today}>{today}</h2>

                    </div>
                    <br />
                    <br />
                    <Form onSubmit={handleFormSubmit}  >
                        <Card>
                            <h1>Select Today's Mood</h1>
                            <Form.Label>Select your mood level from the drop down menu
                                    <Form.Control 
                                        as="select"
                                        onChange={handleTextChange}
                                        name="moodLevel"
                                        >
                                        <option value={0}  >Select a Mood Level</option>
                                        <option value={5}  >5 Very Happy</option>
                                        <option value={4}  >4 Somewhat Happy</option>
                                        <option value={3}  >3 Neutral</option>
                                        <option value={2}  >2 Somewhat Sad</option>
                                        <option value={1}  >1 Very Sad</option>

                                    </Form.Control>
                            </Form.Label>
                        </Card>

                        <Card>
                            <h1>Today's Journal Entry</h1>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                name="text"
                                
                                onChange={handleTextChange} 
                            />
                        </Card>
                       
                        <Button
                         type="submit" value="Submit">Submit</Button>
                    </Form>

                    <br />


                </Col>
                <Col md={5}>
                    <h1> Journal Entries </h1>
                    {JournalEntry.length ?  (
                        <ol>
                            {JournalEntry.map(entry => (
                                <li key={entry._id}>
                                    <Link to={("/entries/" + entry._id)}>
                                        <strong>
                                            {}
                                            {entry.date}
                                        </strong>
                                    </Link>
                                    <Button id="deleteButton" onClick={() => deleteEntry(entry._id)}>Delete Entry</Button>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
        </Container>


    )
};


export default Journal;

