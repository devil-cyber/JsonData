const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://database:mani360@@cluster0.w7x6z.mongodb.net/database?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in coonecting database"));
db.once("open", function () {
    console.log("Connected Sucessfully to Database MongoDB");
});