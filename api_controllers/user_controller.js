const db = require("../config/mongo_client");
module.exports.user = function (req, res) {
    try {
        if (req.params.value === "One" || req.params.value === "one") {
            db.collection("customers").findOne({}, (err, data) => {
                if (err) {
                    return res.status(200).json(err.message);
                }
                return res.json(data);
            });
        } else if (req.params.value === "All") {
            const collection = db.collection("customers");
            const cursor = collection.find({}).toArray((err, data) => {
                if (err) {
                    return res.json(err.message);
                }
                return res.status(200).json(data);
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
};
