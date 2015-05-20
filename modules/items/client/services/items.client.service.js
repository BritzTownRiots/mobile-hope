'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('items').factory('Items', ['$resource',
	function($resource) {
		return $resource('api/items/:itemId', {
			itemId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
