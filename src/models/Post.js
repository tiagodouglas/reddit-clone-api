const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');

module.exports = () => {
    const schema = mongoose.Schema({
        createdAt:  { type: Date },
        updatedAt:  { type: Date },
        title:      { type: String, required: true },
        url:        { type: String, required: true },
        summary:    { type: String, required: true },
        subreddit:  { type: String, required: true },
        comments: [Comment.schema],
        author : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    });

    schema.pre('save', (next) => {
        // SET createdAt AND updatedAt
        const now = new Date()
        this.updatedAt = now
        if (!this.createdAt) {
            this.createdAt = now
        }
        next()
    });

    return mongoose.model('Post', schema);
}