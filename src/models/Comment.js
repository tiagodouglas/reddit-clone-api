const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        content: { type: String, required: true },
        author : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        comments: [this]
    });

    return mongoose.model('Comment', schema);
}