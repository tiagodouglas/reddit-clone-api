const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');

module.exports = {
    find
}

async function find(req, res) {
    let post = new Post(req.body);
    Post.find({ subreddit: req.params.subreddit })
        .then((posts) => {
            res.status(200).json({
                content: posts
            });
    }).catch((err) => {
        console.log(err)
    })
}
