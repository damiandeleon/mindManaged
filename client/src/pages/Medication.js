import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { Card, Form, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Medication.css";
import API from "../utils/API";

const Medication = () => {
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

        API.getSavedRx()
            .then(res => {
                console.log(res)
                setSavedRx(res.data)
            })
            .catch(err => console.log(err));
    }, [])

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
                        <Card.Body id="fade-in3" style={{ textAlign: 'center' }}>
                            <h2>Hold up!</h2>
                            <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check id="yes" type="checkbox" label="Yes" />
                                <Form.Check id="no" type="checkbox" label="No" />
                            </Form.Group>
                        </Card.Body>
                        <Card.Body id="fade-in3" style={{ textAlign: 'center', background: 'lightblue' }}>
                            <h1> Your prescriptions </h1>
                            {SavedRx.length ? (
                                <ListGroup variant="flush">
                                    {SavedRx.map(rx => (

                                        <ListGroup.Item key={rx._id}>
                                            <p style={{ fontSize: 'smallest' }} > Name: {rx.brand_name}</p>
                                            <p style={{ fontSize: 'smallest' }} >  Dosage: {rx.dosage} </p>
                                            {/* <Button size="sm" id="deleteButton" onClick={() => deleteEntry(rx._id)}>Delete</Button> */}
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