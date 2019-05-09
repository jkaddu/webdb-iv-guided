const db = require('../data/dbConfig.js');

module.exports = {
	find,
	findByID
};

function find() {
	return db('tracks');
}

function findByID() {
	return db('tracks').where({ id }).first();
}
