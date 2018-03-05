const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./db');
const auth = require('../src/api/middleware/auth');
require('dotenv').config();

db('mongodb://localhost/db-reddit');

const app = express();
// app.use(auth);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'src', verbose: false })
    .include('models')
    .then('api/routes')
    .into(app);

module.exports = app;