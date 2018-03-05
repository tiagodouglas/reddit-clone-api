module.exports = (app) => {
    const posts = require('../../core/Post/postsController');

    app.post('/posts', (req, res) => {
        posts.create(req, res);
    });

    app.get('/posts', (req, res) => {
        posts.get(req, res);
    });

    app.get('/posts/:id', (req, res) => {
        posts.getById(req, res);
    });

    app.put('/posts/:id', (req, res) => {
        posts.update(req, res);
    });

    app.delete('/posts/:id', (req, res) => {
        posts.remove(req, res);
    });
}