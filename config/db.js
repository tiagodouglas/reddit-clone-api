const mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function() {
        console.log('MongoDB connection is established');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('MongoDB disconnected ');
    });

    mongoose.connection.on('error', function() {
        console.log('MongoDB connection error');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('MongoDB connection ended');
            process.exit(0);
        });
    });
}