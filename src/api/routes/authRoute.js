module.exports = (app) => {
    const auth = require('../../core/Auth/authController');

    app.post('/register', (req, res) => {
        auth.register(req, res);
    });

    app.post('/login', (req, res) => {
        auth.login(req, res);
    });
}