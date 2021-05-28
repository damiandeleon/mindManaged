import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import { Form } from 'react-bootstrap';
import "./Medication.css";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        prescriptions: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getDrugInfo(this.state.search)
            .then(res => this.setState({ prescriptions: res.data.products }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;
        const names = this.state.prescriptions;
        // const dose = this.state.dosage;

        console.log(names);
        // console.log(dose);
        const searchResults = names.filter((name) => {
            console.log(name.brand_name);
            // toLowerCase
            return name.brand_name.toLowerCase().startsWith(this.state.search)
        });
        console.log(searchResults);

        this.setState({
            search: value,
            prescriptions: searchResults
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.getDrugInfo(this.state.search);
    // };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <h1 className="text-center">Find your medication here</h1>
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                // handleFormSubmit={this.handleFormSubmit}
                                prescriptions={this.state.prescriptions}
                                search={this.state.search}
                            />
                            <RxResults />
                        </div>
                        <div className="column">
                            <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check id="yes" type="checkbox" label="Yes" />
                                <Form.Check id="no" type="checkbox" label="No" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;