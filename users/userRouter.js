const express = require('express');
const router = express.Router();
const Posts = require('../posts/postDb.js');
const Users = require('./userDb.js');
const validatePost = require('../middleware/validatePost.js');
const validateUser = require('../middleware/validateUser.js');
const validateUserId = require('../middleware/validateUserId.js');

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

router.get('/:id/posts', validateUserId, async (req, res) => {
	// do your magic!
	const { id } = req.params;
	const posts = await Users.getUserPosts(id);
	posts
		? res.status(200).json({
				LOOK: `posts for user id: ${id}`,
				SEE: posts,
		  })
		: res
				.status(404)
				.json({ BLANK: 'empty user posts' })
				.catch(() => {
					res.status(500).json({ CHOMP: 'this is not food' });
				});
});

router.post('/', validateUser, async (req, res) => {
	// do your magic!
	const user = req.body;
	const newUser = await Users.insert(user);
	newUser
		? res
				.status(201)
				.json({ NEATO: 'new user fresh out of the over', ENJOY: newUser })
		: res
				.status(404)
				.json({ UHH: 'user is lost' })
				.catch(() => {
					res.status(500).json({ WEIRD: 'things' });
				});
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {
	// do your magic!
	const { id } = req.params;
	const post = req.body;
	const newPost = await Posts.insert({ ...post, user_id: id });
	newPost
		? res.status(201).json({
				DING: 'new post out for delivery',
				DELIVERED: newPost,
		  })
		: res
				.status(404)
				.json({ MEH: 'this post is no good' })
				.catch(() => {
					res.status(500).json({ BOOM: 'explosion' });
				});
});

router.put('/:id', (req, res) => {
	// do your magic!
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
// 	// do your magic!
// }

// function validateUser(req, res, next) {
// 	// do your magic!
// }

// function validatePost(req, res, next) {
// 	// do your magic!
// }

module.exports = router;
