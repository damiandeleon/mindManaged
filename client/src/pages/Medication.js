import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        prescription: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getDrugInfo()
            .then(res => this.setState({ prescription: res.data.message }))
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
                <RxResults />
            </div>
        );
    }
}

export default Search;