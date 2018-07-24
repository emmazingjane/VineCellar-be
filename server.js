const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const http = require('http');
const router = require('./router');
const cors = require('cors');

mongoose.connect('mongodb://localhost/auth')

// app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.json({type: '*/*'}))

router(app);
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);