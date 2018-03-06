module.exports = (app) => {
    const replies = require('../../core/Replies/repliesController');

    app.post('/posts/:postId/comments/:commentId/replies', (req, res) => {
        replies.create(req, res);
    });

    app.get('/replies', (req, res) => {
        replies.get(req, res);
    });

    app.get('/replies/:id', (req, res) => {
        replies.getById(req, res);
    });

    app.put('/replies/:id', (req, res) => {
        replies.update(req, res);
    });

    app.delete('/replies/:id', (req, res) => {
        posts.remove(req, res);
    });
}