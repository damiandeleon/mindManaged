import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
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
            .then(res => this.setState({ prescriptions: res.data.products.brand_name, dosage: res.data.products.active_ingredients.strength }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;
        const name = this.state.prescriptions;
        // const dose = this.state.dosage;

        console.log(name);
        // console.log(dose);
        const searchResults = name.filter((name) => {
            console.log(name);
            // toLowerCase
            return name.toLowerCase().startsWith(this.state.search)
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
                <h1 className="text-center">Find your medication here</h1>
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    // handleFormSubmit={this.handleFormSubmit}
                    prescriptions={this.state.prescriptions}
                    search={this.state.search}
                />
                <RxResults />
            </div>
        );
    }
}

export default Search;