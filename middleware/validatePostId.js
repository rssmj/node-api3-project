const Posts = require('../posts/postDb.js');

module.exports = async function validatePostId(req, res, next) {
	const { id } = req.params;
	const post = req.post;
	const posts = await Posts.getById(id);
	posts || post
		? next()
		: res
				.status(400)
				.json({
					result: `invalid post id: ${id} --> post is nowhere to be found`,
				})
				.catch(() => {
					res.status(500).json({ message: 'errors --> try again' });
				});
};
