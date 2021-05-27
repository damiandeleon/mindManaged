import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import API from "../utils/API";


const Journal = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

   

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
                    <Form onSubmit={handleFormSubmit}>
                        <Card>
                            <h1>Select Today's Mood</h1>
                            <Form.Label>Select your mood level from the drop down menu
                                    <select>
                                    <option
                                        value={5}
                                        onChange={handleInputChange}
                                        name="moodlevel"
                                    >5 Very Happy
                                        </option>

                                    <option
                                        value={4}
                                        onChange={handleInputChange}
                                        name="moodlevel"
                                    >4 Somewhat Happy
                                        </option>

                                    <option
                                        value={3}
                                        onChange={handleInputChange}
                                        name="moodlevel"
                                    >3 Neutral
                                        </option>

                                    <option
                                        value={2}
                                        onChange={handleInputChange}
                                        name="moodlevel"
                                    >2 Somewhat Sad
                                        </option>

                                    <option
                                        value={1}
                                        onChange={handleInputChange}
                                        name="moodlevel"
                                    >1 Very Sad
                                        </option>
                                </select>
                            </Form.Label>
                        </Card>

                        <Card>
                            <h1>Today's Journal Entry</h1>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                name="text"
                                // onChange={handleInputChange} 
                            />
                        </Card>
                       
                        <Button as="input" type="submit" value="Submit"/>
                    </Form>

                    <br />


                </Col>





            </Row>
        </Container>


    )
};


export default Journal;
