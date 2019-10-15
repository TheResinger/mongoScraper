const express = require("express");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const db = require("./modles");
const app = express();

const PORT = process.env.PORT || 3000;
const mongodb_uri = process.env.MONGODB_URI || "mongodb:localhost/mongoHeadlines";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

mongoose.connect(mongodb_uri, {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`==> Server started at http://localhost:${PORT} <==`)
});