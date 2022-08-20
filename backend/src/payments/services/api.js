const axios = require("axios");

const api = axios.create({
    baseURL:""
});

module.exports = api;