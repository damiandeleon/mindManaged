import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        prescriptions: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getDrugInfo()
            .then(res => this.setState({ prescriptions: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Find your medication here</h1>
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    prescriptions={this.state.prescriptions}
                    search={this.state.search}
                />
                {/* <SearchResults results={this.state.results} /> */}
            </div>
        );
    }
}

export default Search;