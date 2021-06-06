import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { Card, Form, ListGroup } from 'react-bootstrap';
import "./Medication.css";
import API from "../utils/API";
// import savedRxCard from "../components/SavedRx/SavedRx";

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
                this.setState({ prescriptions: products })
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

    // const componentDidMount = () => {
    //     API.getDrugInfo(this.state.search)
    //         .then(res => {

    //             let products = [];
    //             res.data.results.forEach(item => {
    //                 products = products.concat(item.products)
    //             })
    //             this.setState({ prescriptions: products })
    //         })
    //         .then(console.log(`the product searched is ${this.state.prescriptions}`))
    //         .catch(err => console.log(err));

    //     API.getSavedRx()
    //         .then(res => {
    //             console.log(res)
    //             setSavedRx(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }

    const handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;

        this.setState({
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
                this.setState({ prescriptions: products })
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
                            onChange={handleInputChange}
                            onSubmit={handleFormSubmit}
                            prescriptions={state.prescriptions}
                            search={state.search}
                        />
                        <RxResults
                            prescriptions={state.prescriptions}
                        // saveButton={this.saveRx}
                        />
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup></Card>
                    </div>
                    <div id="col-2" className="column">
                        <Card style={{ width: '18rem' }}>
                            <h2>Hold up!</h2>
                            <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check id="yes" type="checkbox" label="Yes" />
                                <Form.Check id="no" type="checkbox" label="No" />
                            </Form.Group>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
    // }
}

export default Medication;