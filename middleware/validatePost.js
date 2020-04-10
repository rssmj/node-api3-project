module.exports = async function validatePost(req, res, next) {
	const { id } = req.params;
	const post = req.body;
	const text = post.text;
	const user = post.user_id
		? post
		: text
		? user
		: id
		? res.status(400).json({ message: 'missing post data' })
		: res.status(400).json({ message: 'missing required text field' });
	next();
};
