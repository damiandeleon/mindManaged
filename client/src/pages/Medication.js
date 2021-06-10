import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { Card, Form, ListGroup, Button, Alert } from 'react-bootstrap';
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

    const toggleChangeNo = (e) => {
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

    }, [])

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
        <div>
            <Container>
                <div className="row">
                    <div id="col-1" className="column">
                        <h1 className="text-center">Find your medication here</h1>
                        <SearchForm
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                            prescriptions={state.prescriptions}
                            search={state.search}
                        />
                        <RxResults
                            prescriptions={state.prescriptions}
                        />
                    </div>
                    <div id="col-2" className="column">
                        <Card.Body className="card" id="fade-in2" style={{ textAlign: 'center' }}>
                            <h2>Hold up!</h2>
                            <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check id="yes" type="checkbox" checked={buttonState.isYes}
                                    onChange={toggleChangeYes} label="Yes" />
                                <Form.Check id="no" type="checkbox" checked={buttonState.isNo} onChange={toggleChangeNo}
                                    label="No" />
                            </Form.Group>
                            <Alert id="alert">
                                To find important information about potentially dangerous drug interactions, please visit the {' '}
                                <Alert.Link href="https://www.drugs.com/drug_interactions.html" target="_blank" rel="noopener noreferrer">Drugs.com interaction checker</Alert.Link>.
                            </Alert>
                            <Button size="small" variant="outline-primary" onClick={toggleChangeNo}>Save</Button>
                        </Card.Body>
                        <Card.Body id="fade-in2" style={{ textAlign: 'center', background: 'lightblue' }}>
                            <h1> Your prescriptions </h1>
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
                    </div>
                </div>
            </Container>
        </div>
    );
    // }
}

export default Medication;