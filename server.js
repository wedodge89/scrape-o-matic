// Require NPM packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars")

// Require Models
const Article = require("./models/Article.js");
const Note = require("./models/Note.js");

const PORT = 3000;

// Set Up Express
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Setting up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting up connection to Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
mongoose.connect(MONGODB_URI);

// Requiring Routes
const routes = require("./routes/");

// Start server
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;
