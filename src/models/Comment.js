const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        content: { type: String, required: true },
        author : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    });

    return mongoose.model('Comment', schema);
}