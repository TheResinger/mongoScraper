const db = require("./models");
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render("index");
    })

    app.get("/scrape", (req, res) => {
        axios.get("http://")
    })  
}