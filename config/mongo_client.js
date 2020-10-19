const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: '../.env' });
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in coonecting database"));
db.once("open", function () {
    console.log("Connected Sucessfully to Database MongoDB");
});



var obj = db.collection('movies').find();
obj.then((err, data) => {
    console.log(data);
})

module.exports = db;