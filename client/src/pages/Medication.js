import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { Card, Form, ListGroup, Button, Alert, Row, Col, Jumbotron } from 'react-bootstrap';
import "./Medication.css";
import API from "../utils/API";

const Medication = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var YYYY = today.getFullYear();

    today = MM + '/' + DD + '/' + YYYY

    const [state, setState] = useState({
        search: "",
        prescriptions: [],
        results: [],
        error: "",
    });
    const [SavedRx, setSavedRx] = useState({
        brand_name: "",
        dosage: "",
        product_number: 0
    })

    const [buttonState, setButtonState] = useState({
        isYes: false,
        isNo: false,
        dates: []
    })

    const toggleChangeYes = () => {
        setButtonState(prevState => ({
            isYes: !prevState.isYes,
        }));
    }

    const toggleChangeNo = () => {
        setButtonState(prevState => ({
            isNo: !prevState.isNo,
        }));

        let intake = [];
        let skippedDay = today;

        if (buttonState.isNo) {
            console.log("made it")
            intake.push(skippedDay);
            var missedMeds = intake;
        }
        const Dates = {
            dates: missedMeds
        }
        API.saveNo(Dates)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));

    }

    // const saveIntake = (e) => {
    //     e.preventDefault();
    //     let intake = [];
    //     var key;
    //     for (key in buttonState) {
    //         if (buttonState[key] === true) {
    //             intake.push(key);
    //         }
    //     }
    //     API.saveIntake(intake)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err));
    // }

    const getIntake = () => {
        API.getIntake()
            .then(res => {
                console.log(res)
                setButtonState(res.data)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        API.getDrugInfo(state.search)
            .then(res => {

                let products = [];
                res.data.results.forEach(item => {
                    products = products.concat(item.products)
                })
                setState({ prescriptions: products })
            })
            .then(console.log(`the product searched is ${state.prescriptions}`))
            .catch(err => console.log(err));

        getSavedRx()

        getIntake()

    }, [state.prescriptions, state.search])

    const getSavedRx = () => {
        API.getSavedRx()
            .then(res => {
                console.log(res)
                setSavedRx(res.data)
            })
            .catch(err => console.log(err));
    }

    const deleteRx = (id) => {
        API.deleteRx(id)
            .then(res => getSavedRx())
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;

        setState({
            ...state,
            search: value,
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getDrugInfo(state.search)
            .then(res => {
                let products = [];
                res.data.results.forEach(item => {
                    products = products.concat(item.products)
                })
                setState({
                    ...state,
                    prescriptions: products
                })
            })
            .catch(err => console.log(err));
    };

    // render() {
    return (
        <Container>
            <Jumbotron id="jumbo-bg" className="text-center jumbotron" style={{ borderRadius: '20px' }}>
                <div id="fade-in">
                    <h1 id="jumbo-title" style={{ textShadow: '4px 4px rgba(50,50,50, 0.8)' }}>Medication</h1>
                    <h5>- Find and track your medication -</h5>
                    <br></br>
                </div>
            </Jumbotron>

            <Container style={{ marginTop: '3%' }}>
                <Row>
                    <Col id="fade-in2" className="search-img" style={{ borderRadius: '10px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', marginBottom: '3%' }} sm={12} md={12} lg={8}>
                        <Row>
                            <Container className="text-center" style={{ textAlign: 'center' }}>
                                <h2>Search by Brand Name:</h2>
                                <SearchForm
                                    handleInputChange={handleInputChange}
                                    handleFormSubmit={handleFormSubmit}
                                    prescriptions={state.prescriptions}
                                    search={state.search}
                                />
                            </Container>
                        </Row>
                        <Row>
                            <RxResults
                                prescriptions={state.prescriptions}
                            />
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={4} className="text-center">
                        <Card.Body id="fade-in2" style={{ backgroundColor: 'rgba(255,255,255,0.975)', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px', height: '50%' }}>
                            <h2>Hold up!</h2>
                            <hr></hr>
                            <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check id="yes" type="checkbox" checked={buttonState.isYes}
                                    onChange={toggleChangeYes} label="Yes" />
                                <Form.Check id="no" type="checkbox" checked={buttonState.isNo}
                                    onChange={toggleChangeNo} label="No" />
                            </Form.Group>

                            <hr></hr>

                            <Alert id="alert">
                                <p>To find important information about potentially dangerous drug interactions, please visit the {' '}
                                    <Alert.Link href="https://www.drugs.com/drug_interactions.html" target="_blank" rel="noopener noreferrer">Drugs.com interaction checker</Alert.Link>.
                      </p>
                            </Alert>
                            <Button size="small" variant="outline-primary" onClick={toggleChangeNo}>Save</Button>
                        </Card.Body>

                        <br></br>

                        <Card.Body id="fade-in2" style={{ background: 'rgba(188,226,237,0.975)', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px', height: '50%', overflow: 'auto' }}>
                            <h1> Your prescriptions </h1>
                            <hr></hr>
                            {SavedRx.length ? (
                                <ListGroup variant="flush">
                                    {SavedRx.map(rx => (
                                        <ListGroup.Item key={rx._id}>
                                            <p style={{ fontSize: 'medium' }} > Name: {rx.brand_name}</p>
                                            <p style={{ fontSize: 'medium' }} >  Dosage: {rx.dosage} </p>
                                            <Button size="small" variant="outline-danger" onClick={() => deleteRx(rx._id)}>Delete</Button>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            ) : (
                                    <h3>No meds yet</h3>
                                )}
                        </Card.Body>
                    </Col>
                </Row>
                <Row>
                    <Card.Body style={{ background: "white" }}>
                        <h1>Oops!</h1>
                        <p>Skipped or forgot medication on these days:</p>
                        {buttonState.length ? (
                            <ListGroup variant="flush">
                                {buttonState.map(item => (
                                    // console.log(item.dates)
                                    < ListGroup.Item >
                                        <p style={{ fontSize: 'medium' }} >{item.dates}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        ) : (
                                <h3>No skipped days yet (good job!)</h3>
                            )}
                    </Card.Body>
                </Row>
            </Container>
        </Container>
    );
    // }
}

export default Medication;