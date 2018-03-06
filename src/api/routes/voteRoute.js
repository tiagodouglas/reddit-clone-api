module.exports = (app) => {
    const vote = require('../../core/Vote/voteController');

    app.put('/posts/:id/vote-up', (req, res) => {
        vote.voteUp(req, res);
    });

    app.put('/posts/:id/vote-down', (req, res) => {
        vote.voteDown(req, res);
    });
}