import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getDrugInfo: function (prescription) {
        return axios.get("https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:" + prescription)
    },

    saveRx: function (prescription) {
        console.log("save rx");
        return axios.post("/api/drugs", prescription);
    },

    getSavedRx: function () {
        return axios.get("/api/drugs");
    },

    getEntries: function () {
        return axios.get("/api/entries");
    },

    getEntry: function (id) {
        return axios.get("/api/entries/" + id);
    },

    deleteEntry: function (id) {
        return axios.delete("/api/entries/" + id);
    },

    saveEntry: function (entryData) {
        console.log(entryData)
        return axios.post("/api/entries", entryData)
    }
};