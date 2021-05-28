
import React, { useState } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
// import API from "../utils/API";


const Journal = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const [JournalEntry, setJournalEntry] = useState({
        text: "",
    })
    const [MoodLevelSelect, setMoodLevelSelect] = useState({
        moodLevel: 5
    })

    // useEffect(() => {
    //     loadEntries()
    // }, [])

    // const loadEntries = () => {
    //     API.getEntries()
    //         .then(res =>
    //             setJournalEntry(res.data),
    //         )
    //         .catch(err => console.log(err));
    // };

    // const deleteEntry = (id) => {
    //     API.deleteEntry(id)
    //         .then(res => loadEntries())
    //         .catch(err => console.log(err));
    // };

    const handleTextChange = (event) => {
        setJournalEntry({ ...JournalEntry, text: event.target.value})
        
        // const { name, value } = event.target;

    }

    const handleMoodChange = (event) => {
       
        setMoodLevelSelect({ ...MoodLevelSelect, moodLevel: event.target.value})
        
        // const { name, value } = event.target;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(JournalEntry.text, MoodLevelSelect.moodLevel)

        // API.saveEntry({
        //     moodLevel: event.target.value,
        //     text: event.target.value,
        //     date: Date.now
        // })
    }

    return (
        <Container fluid>
            <Row>

                <Col md={9}>
                    <div class="journalpageheader">

                        <h2 value={today}>{today}</h2>
                        {/* <p>Entry Date</p>
                                <input type="date" name="bdate" required />
                                <i class="fas fa-calendar-alt"></i> */}
                    </div>
                    <br />
                    <br />
                    <Form onSubmit={handleFormSubmit} >
                        <Card>
                            <h1>Select Today's Mood</h1>
                            <Form.Label>Select your mood level from the drop down menu
                                    <Form.Control 
                                        as="select"
                                        onChange={handleMoodChange}
                                        
                                        >
                                        <option value={5} >5 Very Happy</option>
                                        <option value={4} >4 Somewhat Happy</option>
                                        <option value={3} >3 Neutral</option>
                                        <option value={2} >2 Somewhat Sad</option>
                                        <option value={1} >1 Very Sad</option>

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
                       
                        <Button type="submit" value="Submit">Submit</Button>
                    </Form>

                    <br />


                </Col>





            </Row>
        </Container>


    )
};


export default Journal;

