module.exports = (app) => {
    const comment = require('../../core/Comment/commentController');

    app.post('/posts/:postId/comments', (req, res) => {
        comment.create(req, res);
    });

    app.get('/comment', (req, res) => {
        comment.get(req, res);
    });

    app.get('/comment/:id', (req, res) => {
        comment.getById(req, res);
    });

    app.put('/comment/:id', (req, res) => {
        comment.update(req, res);
    });

    app.delete('/comment/:id', (req, res) => {
        posts.remove(req, res);
    });
}