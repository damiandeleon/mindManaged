import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getDrugInfo: function (prescription) {
        return axios.get("https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:" + prescription)
    },

    saveRx: function (prescription) {
        console.log("save rx", prescription);
        return axios.post("/api/medication", prescription);
    },

    deleteRx: function (id) {
        return axios.delete("/api/medication/" + id);
    },

    getSavedRx: function (user_id) {
        return axios.get("/api/medication/user/" + user_id);
    },

    saveNo: function (intake) {
        return axios.post("/api/intake", intake);
    },

    getIntake: function (user_id) {
        console.log("get intake", user_id);
        return axios.get("/api/intake/user/" + user_id);
    },

    getEntries: function (user_id) {
        return axios.get("/api/entries/user/" + user_id);
    },

    getEntry: function (id) {
        return axios.get("/api/entries/" + id);
    },

    deleteEntry: function (id) {
        return axios.delete("/api/entries/" + id);
    },

    saveEntry: function (entryData) {
        return axios.post("/api/entries", entryData)
    },

    saveUser: function (userData) {
        axios.post("/api/user", userData)
    },

    getUsers: function (id) {
        console.log(id)
        return axios.get("/api/user/" + id)
    }
};