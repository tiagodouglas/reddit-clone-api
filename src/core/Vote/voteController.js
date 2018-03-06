const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');

const voteUp = (req, res) => {
    Post.findById(req.params.id).exec(function (err, post) {
        post.upVotes.push(req.userId)
        post.voteScore = post.voteTotal + 1
        post.save();
    
        res.status(200).json({message: 'OK'});
    });
}

const voteDown = (req, res) => {
    Post.findById(req.params.id).exec(function (err, post) {
        post.upVotes.push(req.userId)
        post.voteScore = post.voteTotal - 1
        post.save();
    
        res.status(200).json({message: 'OK'});
    });
}

module.exports = {
    voteUp,
    voteDown    
}