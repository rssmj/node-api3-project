const express = require('express');
const router = express.Router();
const Posts = require('./postDb.js');
const validatePostId = require('../middleware/validatePostId.js');

router.get('/', async (req, res) => {
	// do your magic!
	const posts = await Posts.get();
	posts
		? res.status(200).json({
				CONGRATS: 'these are the posts you requested --> -->',
				ALLTHEPOSTS: posts,
		  })
		: res
				.status(400)
				.json({ NOPE: 'no posts here' })
				.catch(() => {
					res.status(500).json({ WOMP: 'much error' });
				});
});

router.get('/:id', validatePostId, async (req, res) => {
	// do your magic!
	const { id } = req.params;
	const posts = await Posts.getById(id);
	res.status(200).json({
		INCOMING: `first class delivery for post id: ${id}`,
		PACKAGE: posts,
	});
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

router.put('/:id', (req, res) => {
	// do your magic!
});

// custom middleware

// function validatePostId(req, res, next) {
// 	// do your magic!
// }

module.exports = router;
