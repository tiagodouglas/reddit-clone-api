module.exports = (app) => {
    const sub = require('../../core/Subreddit/subredditController');

    app.post('/n/subreddit', (req, res) => {
        sub.find(req, res);
    });
}