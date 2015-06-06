var app = angular.module('tweet');

//app.config(function($routeProvider) {
//    $routeProvider.when('user', {
//        controller: 'userCtrl',
//        templateUrl: 'public/views/user/user.tpl.html'
//    })
//});

app.controller('userCtrl', function($scope, $routeParams, apiService) {

    $scope.username = $routeParams.username;

    apiService.getUserTweets($routeParams.username).then(displayUserTweets);

    function displayUserTweets(data){
        $scope.userTweets = data;
    };
});
