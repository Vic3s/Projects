const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title: {
        type: String,
        requiered: true
    },
    snippet: {
        type: String,
        requiered: true
    },
    body: {
        type: String,
        requiered: true
    },
    author: {
        type: String,
        requiered: true
    }
},{ timestamps: true });

const Post = mongoose.model("posts", postSchema);

module.exports = Post;