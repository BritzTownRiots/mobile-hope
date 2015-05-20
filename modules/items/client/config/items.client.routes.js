'use strict';

// Setting up route
angular.module('items').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('items', {
			abstract: true,
			url: '/items',
			template: '<ui-view/>'
		}).
		state('items.list', {
			url: '',
			templateUrl: 'modules/items/views/list-items.client.view.html'
		}).
		state('items.create', {
			url: '/create',
			templateUrl: 'modules/items/views/create-item.client.view.html'
		}).
		state('items.view', {
			url: '/:itemId',
			templateUrl: 'modules/items/views/view-item.client.view.html'
		}).
		state('items.edit', {
			url: '/:itemId/edit',
			templateUrl: 'modules/items/views/edit-item.client.view.html'
		});
	}
]);
