const express = require('express');
const postsRouter = require('./posts/postRouter');
const usersRouter = require('./users/userRouter');
const logger = require('./middleware/logger.js');
const server = express().use(express.json());

server.use(logger);
server.use('/api/posts', postsRouter);
server.use('/api/user', usersRouter);

server.get('/', (req, res) => {
	const message = process.env.MESSAGE || `[-_[-__-]_-]`;
	res.status(200).json({ message });
	// res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// function logger(req, res, next) {}

module.exports = server;
