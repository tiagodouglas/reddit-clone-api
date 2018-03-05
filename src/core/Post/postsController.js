const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');

module.exports = {
    create,
    get,
    getById,
    update,
    remove
}

async function create(req, res) {
    const post = new Post(req.body);
    post.save((err, post) => {
        return res.status(200).json({
            content: post, message:'Post created successfully'
        });
    });
}

async function get(req, res) {
    Post.find({}).then((posts) => {
        return res.status(200).json({
            content: posts
        });
    }).catch((err) => {
        console.log(err.message);
    })
}

async function getById(req, res) {
    Post.findById(req.params.id).populate('comments').then((post) => {
        return res.status(200).json({
            content: post
        });
    }).catch((err) => {
        console.log(err.message)
    })
}

async function update(req, res) {
    
}

async function remove(req, res) {
    
}
