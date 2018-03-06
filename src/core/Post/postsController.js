const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');
const User = mongoose.model('User');

const create = (req, res) => {
    const post = new Post(req.body);
    post.author = req.userId;
    
    post.save().then((post) => {
        return User.findById(req.userId);
    }).then((user) => {
        user.posts.unshift(post);
        user.save();
        return res.status(201).json({content: post});
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    });
}

const get = (req, res) => {
    Post.find({}).then((posts) => {
        return res.status(200).json({
            content: posts
        });
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    });
}

const getById = (req, res) => {
    Post.findById(req.params.id).populate('comments').then((post) => {
        return res.status(200).json({
            content: post
        });
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    })
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
