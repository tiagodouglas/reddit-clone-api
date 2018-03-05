module.exports = (app) => {
    const auth = require('../../core/Auth/authController');

    app.post('/sign-up', (req, res) => {
        auth.signUp(req, res);
    });

    app.post('/login', (req, res) => {
        auth.login(req, res);
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('nToken');
        res.status(200).json({message: 'OK'});
    });
}