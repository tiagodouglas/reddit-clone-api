const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = () => {
    const schema = mongoose.Schema({
        createdAt: { type: Date },
        updatedAt: { type: Date },
        password: { type: String, select: false },
        username: { type: String, required: true }
    });

    schema.pre('save', (next) => {
        // SET createdAt AND updatedAt
        const now = new Date()
        this.updatedAt = now
        if (!this.createdAt) {
            this.createdAt = now
        }
        next()

        const user = this;
        if (!user.isModified('password')) {
            return next();
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });

    });

    schema.methods.comparePassword = (password, done) => {
        bcrypt.compare(password, this.password, (err, isMatch) => {
            done(err, isMatch);
        });
    }

    return mongoose.model('User', schema);
}