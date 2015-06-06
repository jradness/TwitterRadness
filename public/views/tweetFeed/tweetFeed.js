var app = angular.module('tweet');

/*app.config(function($routeProvider) {
  $routeProvider.when('/tweetFeed', {
      controller: 'tweetFeedCtrl',
      templateUrl: 'public/views/tweetFeed/tweetFeed.tpl.html'
  })
});*/

app.controller('tweetFeedCtrl', function($scope, apiService) {
    apiService.getTweets().then(displayTweets);

    function displayTweets(data){
        $scope.allTweets = data;
    };

    /*$http.get('http://mean.codingcamp.us:3377/tweet')
        .success(function (data, status, headers, config) {
            $scope.
        });*/
});
