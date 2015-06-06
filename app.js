var app = angular.module('tweet', ['ngRoute']);

//"sessionToken": "8a24a9b1-5339-4881-9b12-e4d099ade251" (signup)
//"sessionToken": "bee76bc6-6633-415d-a81c-661b4bff16a9" (login)

app.config(function ($routeProvider) {
    var BASE_URL = "public/views";
    $routeProvider
        .when('/', {
            redirectTo: '/tweetFeed'
        })
        .when('/tweetFeed', {
            controller: 'tweetFeedCtrl',
            templateUrl: BASE_URL + '/tweetFeed/tweetFeed.tpl.html'
        })
        .when('/user/:username', {
            controller: 'userCtrl',
            templateUrl: BASE_URL + '/user/user.tpl.html'
        })
        .when('/profile', {
            controller: 'profileCtrl',
            templateUrl: BASE_URL + '/profile/profile.tpl.html'
        })
        .otherwise({
            redirectTo: '/tweetFeed'
        });
});
