const express = require('express');
const router = express.Router();
const Posts = require('../posts/postDb.js');
const Users = require('./userDb.js');

router.get('/', async (req, res) => {
	// do your magic!
	const users = await Users.get();
	users
		? res.status(200).json({
				CONGRATS: 'these are the users you requested --> -->',
				ALLTHEUSERS: users,
		  })
		: res
				.status(400)
				.json({ NOPE: 'no users here' })
				.catch(() => {
					res.status(500).json({ WOMP: 'much error' });
				});
});

router.get('/:id', (req, res) => {
	// do your magic!
});

router.get('/:id/posts', (req, res) => {
	// do your magic!
});

router.post('/', (req, res) => {
	// do your magic!
});

router.post('/:id/posts', (req, res) => {
	// do your magic!
});

router.put('/:id', (req, res) => {
	// do your magic!
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
	// do your magic!
}

function validateUser(req, res, next) {
	// do your magic!
}

function validatePost(req, res, next) {
	// do your magic!
}

module.exports = router;
