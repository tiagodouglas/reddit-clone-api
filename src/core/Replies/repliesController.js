const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Comment = mongoose.model('Comment');
const Post = mongoose.model('Post');


const create = (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        let comment = post.comments.id(req.params.commentId);
        comment.comments.unshift(req.body);
        return post.save();
    }).then((post) => {
        res.status(200).json(post);
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    });
}

module.exports = {
    create
}