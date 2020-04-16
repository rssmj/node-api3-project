module.exports = async function validatUser(req, res, next) {
	const user = req.body;
	const name = user.name
		? user
		: name
		? res.status(400).json({ message: 'missing user data' })
		: res.status(400).json({ message: 'missing required name field' });
	next();
};
