
import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";


const Journal = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0'); 
    var YYYY = today.getFullYear();
    var HHMT = today.getHours();
    var HH = (today.getHours() + 24) % 12 || 12;
    var mm = (today.getMinutes() < 10?'0':'') + today.getMinutes();
    var ampm = HHMT >= 12? 'pm' : 'am';
    
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
        setFormObject({...formObject, [name]: value})
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        API.saveEntry({
            moodLevel: formObject.moodLevel,
            text: formObject.text,
            date: today,
            time: time
        })
        
        .then(res=> loadEntries())
        .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>

                <Col md={7}>
                    <div className="journalpageheader">

                        <h2 value={today}>Today is: {today}</h2>
                        <h3 value={time}>Time is: {time}</h3>

                    </div>
                    <br />
                    <br />
                    <Form onSubmit={handleFormSubmit}  >
                        <Card>
                            <h1>Select Today's Mood</h1>
                            <Form.Label>
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
                                        <p> Entry Date: {entry.date + " " + entry.time} - Mood Level {entry.moodLevel}</p>
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

