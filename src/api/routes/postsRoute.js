const verifyToken = require('../middleware/auth');

module.exports = (app) => {
    const posts = require('../../core/Post/postsController');

    app.post('/posts', verifyToken, (req, res) => {
        posts.create(req, res);
    });

    app.get('/posts', verifyToken, (req, res) => {
        posts.get(req, res);
    });

    app.get('/posts/:id', verifyToken, (req, res) => {
        posts.getById(req, res);
    });

    app.put('/posts/:id', verifyToken, (req, res) => {
        posts.update(req, res);
    });

    app.delete('/posts/:id', verifyToken, (req, res) => {
        posts.remove(req, res);
    });
}