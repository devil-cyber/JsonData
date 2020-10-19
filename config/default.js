const dotenv = require("dotenv").config();

console.log(process.env.URI);
module.exports = {
    uri: process.env.URI,
}

