const dotenv = require("dotenv").config({
    path: "../.env"
});

const mongoose = require("mongoose");
mongoose.connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in coonecting database"));
db.once("open", function () {
    console.log("Connected Sucessfully to Database MongoDB");
});

module.exports = db;