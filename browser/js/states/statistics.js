app.config(function($stateProvider){

	$stateProvider.state('statistics', {
		url:'/stats',
		templateUrl: '/templates/stats.html',
		controller: 'StatsController'


	});
});