const express = require('express');
const router = express.Router();
const Posts = require('./postDb.js');

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

router.get('/:id', (req, res) => {
	// do your magic!
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

router.put('/:id', (req, res) => {
	// do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
	// do your magic!
}

module.exports = router;
