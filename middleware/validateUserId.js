const Users = require('../users/userDb.js');

module.exports = async function validateUserId(req, res, next) {
	const { id } = req.params;
	const user = req.user_id;
	const users = await Users.getById(id);
	users || user
		? next()
		: res
				.status(400)
				.json({
					result: `invalid user id: ${id} --> user is nowhere to be found`,
				})
				.catch(() => {
					res.status(500).json({ message: 'errors --> try again' });
				});
};
