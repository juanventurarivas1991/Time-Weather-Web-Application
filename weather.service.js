myApp.service('weatherService', function($http, $q) {
    this.getWeather = function (apikey, city) {
        var deferred = $q.defer();
        // HTTP call
        $http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apikey)
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(response){
                deferred.reject(response);
            });
        return deferred.promise;
    };
});

