import React from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";


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

                                <h2 value= {today}>{today}</h2>
                                {/* <p>Entry Date</p>
                                <input type="date" name="bdate" required />
                                <i class="fas fa-calendar-alt"></i> */}
                            </div>
                            <br/>
                            <br/>
                    <Form>
                        <form action="/">


                            <Card>
                                <h1>Select Today's Mood</h1>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select your mood level from the drop down menu</Form.Label>
                                    <Form.Control as="select">
                                        <option>1 Very Sad</option>
                                        <option>2 Somewhat Sad</option>
                                        <option>3 Neutral</option>
                                        <option>4 Somewhat Happy</option>
                                        <option>5 Very Happy</option>
                                    </Form.Control>
                                </Form.Group>

                            </Card>

                        </form>

                    </Form>
                    <br/>  
                    <br/>  
                    <br/>
                    <Card>

                    <Form>
                        <div class="item">
                            <h1>Today's Journal:</h1>
                            
                        </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Journal Entry</Form.Label>
                            <Form.Control as="textarea" rows={8} />
                        </Form.Group>
                        
                    </Form>
                    </Card>
                    <br/>
                    <Button as="input" type="submit" value="Submit" />{' '}

                </Col>

 



            </Row>
        </Container>


    )
};


export default Journal;
