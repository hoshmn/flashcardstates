app.controller('MainController', function ($scope, FlashCardsFactory, $rootScope) {

    $rootScope.$on('flashCardsUpdated', function (event, card) {
        console.log(card)
       $scope.flashCards.push(card);
    });

    $scope.categories = [
        'SQL',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.flashCards = [];
    $scope.cardsLoading = true;
    $scope.currentCategory = 'All';

    $scope.getAllCards = function () {
        $scope.currentCategory = 'All';
        $scope.cardsLoading = true;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.cardsLoading = false;
            $scope.flashCards = cards;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.currentCategory = category;
        $scope.cardsLoading = true;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.cardsLoading = false;
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();

});