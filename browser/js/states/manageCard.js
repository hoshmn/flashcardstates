app.config(function($stateProvider){

	$stateProvider.state('manageCard', {
		url:'/manage/:id',
		templateUrl: '/templates/manageCard.html',
		controller: 'ManageController',
		resolve: {
			theCard: function($stateParams,FlashCardFactory){
				console.log('MANAGECARDSstate heellollo', $stateParams.id);
				return FlashCardFactory.fetchById($stateParams.id);
			}
		}

	});
});