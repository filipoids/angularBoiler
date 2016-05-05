'use strict';
(function(app){
	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('base',{
				url:'/base',
				templateUrl:'views/basePage.html',
				controller:"baseCtrl"
			});

			$urlRouterProvider.otherwise('/base');
	});
})(angular.module('baseModule'));