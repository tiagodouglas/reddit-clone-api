const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        createdAt: { type: Date },
        updatedAt: { type: Date },
        password: { type: String, select: false },
        username: { type: String, required: true },
        posts : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
    });

    schema.pre('save', (next) => {
        const now = new Date()
        this.updatedAt = now
        if (!this.createdAt) {
            this.createdAt = now
        }

        next();
    });
    
    return mongoose.model('User', schema);
}