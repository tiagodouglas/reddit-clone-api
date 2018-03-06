const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Comment = mongoose.model('Comment');
const Post = mongoose.model('Post');



const create = (req, res) => {
    Post.findById(req.params.postId).exec(function (err, post) {
        post.comments.unshift(req.body);
        post.save();
        return res.status(200).json({content: post});
    })
}

const get = (req, res) => {

}

const getById = (req, res) => {

}

const update = (req, res) => {
    
}

const remove = (req, res) => {
    
}

module.exports = {
    create,
    get,
    getById,
    update,
    remove
}