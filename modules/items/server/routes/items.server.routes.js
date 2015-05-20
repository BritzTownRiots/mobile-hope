'use strict';

/**
 * Module dependencies.
 */
var itemsPolicy = require('../policies/items.server.policy.js'),
	items = require('../controllers/items.server.controller.js');

module.exports = function(app) {
	// Articles collection routes
	app.route('/api/items').all(itemsPolicy.isAllowed)
		.get(items.list)
		.post(items.create);

	// Single item routes
	app.route('/api/items/:itemId').all(itemsPolicy.isAllowed)
		.get(items.read)
		.put(items.update)
		.delete(items.delete);

	// Finish by binding the item middleware
	app.param('itemId', items.itemByID);
};
