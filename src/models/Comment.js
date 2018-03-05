const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        content: { type: String, required: true }
    });

    return mongoose.model('Comment', schema);
}