const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/google-books-search",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});