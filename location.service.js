/*
myApp.service('locationService', function($http, $q) {
    this.getWeather = function (apikey, ipAdress) {
        var deferred = $q.defer();
        // HTTP call http://api.ipstack.com/134.201.250.155?access_key=9e77eafac8571991ab4f92005d1905dc
        $http.get("http://api.ipstack.com/"+ipAdress+"?access_key=" + apikey)
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(response){
                deferred.reject(response);
            });
        return deferred.promise;
    };
});
*/
