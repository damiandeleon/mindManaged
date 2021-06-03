import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { Card, Form } from 'react-bootstrap';
import "./Medication.css";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        prescriptions: [],
        results: [],
        error: "",
    };

    componentDidMount() {
        API.getDrugInfo(this.state.search)
            .then(res => {

                let products = [];
                res.data.results.forEach(item => {
                    products = products.concat(item.products)
                })
                this.setState({ prescriptions: products })
            })
            .then(console.log(`the product searched is ${this.state.prescriptions}`))
            .catch(err => console.log(err));

        API.getSavedRx()
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;

        this.setState({
            search: value,
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDrugInfo(this.state.search)
            .then(res => {
                let products = [];
                res.data.results.forEach(item => {
                    products = products.concat(item.products)
                })
                this.setState({ prescriptions: products })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <div className="row">
                        <div id="col-1" className="column">
                            <h1 className="text-center">Find your medication here</h1>
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                prescriptions={this.state.prescriptions}
                                search={this.state.search}
                            />
                            <RxResults
                                prescriptions={this.state.prescriptions}
                            // saveButton={this.saveRx}
                            />
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
    }
}

export default Search;