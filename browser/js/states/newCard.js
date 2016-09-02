app.config(function($stateProvider){

	$stateProvider.state('newCard', {
		url:'/new',
		templateUrl: '/templates/newCard.html',
		controller: 'NewCardController'


	});
});