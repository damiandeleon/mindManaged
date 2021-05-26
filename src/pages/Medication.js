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
            .then(res => this.setState({ prescriptions: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log('rx');
        const value = event.target.value;
        const results = this.state.prescriptions;

        console.log(results);
        const searchResults = results.filter((result) => {
            console.log(result.name.first);
            // toLowerCase
            return result.name.first.toLowerCase().startsWith(this.state.search)
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