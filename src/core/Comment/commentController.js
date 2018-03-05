const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Comment = mongoose.model('Post');



const create = (req, res) => {
    const comment = new Comment(req.body);
    comment.save().then((comment) => {
        return Post.findById(req.params.postId)
    }).then((post) => {
        post.comments.unshift(comment)
        return post.save()
    }).then((post) => {
        res.status(200).json({content: post, message: 'Comment created successfullyOK'})
    }).catch((err) => {
        console.log(err)
    });
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