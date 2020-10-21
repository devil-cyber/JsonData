const db = require('../config/mongo_client');
module.exports.post_comment = function (req, res) {
    try {
        const collection = db.collection("comments");
        const query = { postId: 1 }
        const cursor = collection.find(query).toArray((err, data) => {
            if (err) {
                return res.status(200).json(err.message);
            }
            else {
                return res.status(200).json(data);
            }
        });
    } catch (err) {
        console.log('Error message : ', err.message);
    }

}