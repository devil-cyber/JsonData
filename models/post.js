const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
}, {
    timestamp: true,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;