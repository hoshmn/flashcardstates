app.config(function($stateProvider){

	console.log('can i hitit');
	$stateProvider.state('flash', {
		url:'/flash',
		templateUrl: '/templates/flash.html',
		controller: 'MainController'


	});
});