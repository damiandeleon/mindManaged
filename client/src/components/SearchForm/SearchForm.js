import React from "react";

function SearchForm(props) {
    return (
        <div>
            <form className="search-form">
                <label htmlFor="name">Search by brand name:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    list="prescriptions"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />

            </form>
        </div>
    );
}

export default SearchForm;