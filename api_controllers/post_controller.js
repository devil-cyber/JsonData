const db = require("../config/mongo_client");
module.exports.post = async function (req, res) {
    try {
        if (req.params.value === "One" || req.params.value === "one") {
            await db.collection("post").findOne({}, (err, data) => {
                if (err) {
                    return res.status(200).json(err.message);
                } else {
                    return res.json(data);
                }
            });
        } else if (req.params.value === "All") {
            const collection = db.collection("post");
            const cursor = await collection.find({}).toArray((err, data) => {
                if (err) {
                    return res.status(200).json(err.message);
                } else {
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
            "Error occured from api_controller=>[post_controller]",
            err.message
        );
    }
};

module.exports.post_create = async function (req, res) {
    try {
        const userId = await db
            .collection("post")
            .find({ userId: req.body.userId })
            .toArray((err, data) => {
                if (err) {
                    console.log(err.message);
                } else {
                    if (data.length > 0) {
                        return res
                            .status(200)
                            .json("this userid already exists");
                    } else {
                        db.collection("post").insert(
                            {
                                title: req.body.title,
                                body: req.body.body,
                                userId: req.body.userId,
                                id: req.body.id,
                            },
                            (err) => {
                                if (err) {
                                    return res.json(err.message);
                                } else {
                                    return res.status(200).json("Post created");
                                }
                            }
                        );
                    }
                }
            });
    } catch (err) {
        console.log("Error from post_controller_post_create: ", err.message);
    }
};
