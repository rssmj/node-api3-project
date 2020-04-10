module.exports = function logger(req, res, next) {
	console.log(`${req.method} Requested ${req.originalUrl} at ${Date.now()}`);
	next();
};
