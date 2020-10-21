const db = require('../config/mongo_client');
module.exports.image = function (req, res) {
    try {
        if (req.params.value === "One" || req.params.value === "one") {
            db.collection("images").findOne({}, (err, data) => {
                if (err) {
                    return res.status(200).json(err.message);
                }
                else {
                    return res.status(200).json(data);
                }

            });
        } else if (req.params.value === "All") {
            const all_data = [];
            const collection = db.collection("images");
            const cursor = collection.find({}).toArray((err, data) => {
                if (err) {
                    return res.status(200).json(err.message);
                }
                else {
                    return res.status(200).json(data);
                }

            });
        } else {
            return res.json(
                "There is some error with using the API | For more details see the documents once agian | Thank You!"
            );
        }
    } catch (err) {
        console.log(
            "Error occured from api_controller=>[image_controller]",
            err.message
        );
    }
}