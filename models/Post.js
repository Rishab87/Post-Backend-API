const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
})

const postSchema = new mongoose.Schema(
    {
        caption:{
            type: String,
            required:true,
            maxLength: 200,
        },
        likes:{
            type: Number,
            required: true,
            default: 0,
        },
        comments:{
            type: [commentSchema],
            required: false,
        }
    }
);

module.exports = mongoose.model("Posts" , postSchema);