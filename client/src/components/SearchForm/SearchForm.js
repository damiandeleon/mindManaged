import React from "react";

const SearchForm = (props) => {
    return (
        <div>
            <form className="search-form"
                onSubmit={props.handleFormSubmit}
            >
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