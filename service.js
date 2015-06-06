var app = angular.module('tweet');

app.service('apiService', function ($http, $q, BASE_URL) {
    this.getTweets = function () {
        return $q(function (resolve, reject) {
            $http.get(BASE_URL).success(resolve);
        });
    };

    this.getUserTweets = function (username) {
        return $q(function (resolve, reject) {
            $http.get(BASE_URL + "/" + username).success(resolve);
        });
    };
});

app.value('BASE_URL', 'http://mean.codingcamp.us:3377/tweet');
