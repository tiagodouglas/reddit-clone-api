const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');

const find = (req, res) => {
    let post = new Post(req.body);
    Post.find({ subreddit: req.params.subreddit })
        .then((posts) => {
            res.status(200).json({
                content: posts
            });
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    })
}

module.exports = {
    find
}
