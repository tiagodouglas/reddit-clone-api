const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = (req, res) => {
    const user = new User(req.body);

    hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
    user.save().then((user) => {
        let token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.status(200).json({
            message: 'User created successfully',
            token: token
        });
    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    });
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }, 'username password').then((user) => {
        if (!user) {
            return res.status(401).send({ message: 'Wrong Username or Password' });
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        
        const token = jwt.sign(
            { _id: user._id, username: user.username }, process.env.SECRET,
            { expiresIn: "60 days" }
        );
        user.password = undefined;
        return res.status(200).json({
            message: 'OK',
            token: token,
            user: user
        });

    }).catch((err) => {
        return res.status(500).json({Error: 'Interval error'});
    });
}


module.exports = {
    register,
    login
}
