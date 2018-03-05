const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp,
    login
}

async function signUp(req, res) {
    const user = new User(req.body);

    user.save().then((user) => {
        let token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.status(200).json({
            message: 'User created successfully',
            token: token
        });
    }).catch((err) => {
        console.log(err.message);
    });
}

async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, 'username password').then((user) => {
        console.log(user);
    if (!user) {
        return res.status(401).send({ message: 'Wrong Username or Password' });
    }
    user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
            // Password does not match
            return res.status(401).send({ message: "Wrong Username or password"});
        }
        const token = jwt.sign(
            { _id: user._id, username: user.username }, process.env.SECRET,
            { expiresIn: "60 days" }
        );

        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.status(200).json({
            message: 'OK',
            token: token
            });
        });
    }).catch((err) => {
        console.log(err);
    });
}