app.factory('FlashCardsFactory', function($http) {

    function getData(response) {
        return response.data; }

    return {
        getFlashCards: function(category) {
            var queryParams = {};

            if (category) { queryParams.category = category; }

            return $http.get('/api/cards', { params: queryParams }).then(getData);
        },
        addNewFlashCard: function(card) {
            return $http.post('/api/cards', card).then(getData);
        },
        fetchById: function(id) {
            // var queryParams = {};

            // if (category) { queryParams.category = category; }

            return $http.get('/api/cards/'+id).then(getData);
        }
    };

});
