const db = require('../config/mongo_client');
module.exports.image = function (req, res) {
    try {
        if (req.params.value === "One" || req.params.value === "one") {
            db.collection("images").findOne({}, (err, data) => {
                return res.json(data);
            });
        } else if (req.params.value === "All") {
            const all_data = [];
            const collection = db.collection("images");
            const cursor = collection.find({}).toArray((err, data) => {
                return res.json(data);
            });
        } else {
            return res.json(
                "There is some error with using the API | For more details see the documents once agian | Thank You!"
            );
        }
    } catch (err) {
        console.log(
            "Error occured from api_controller=>[post_controller]",
            err.message
        );
    }
}