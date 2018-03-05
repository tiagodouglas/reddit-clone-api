module.exports = (app) => {
    app.route('/ping').get((req, res) => {
        return res.status(200).json({
            content: new Date()
        });
    });
};