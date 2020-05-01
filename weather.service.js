
myApp.service('weatherService', function($http, $q) {
   
        this.getIpAddress = function () {
            var deferred = $q.defer();
            // HTTP call
            $http.get("https://api.ipify.org?format=json")
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function(response){
                    deferred.reject(response);
                });
            return deferred.promise;
        };

        this.getlocation = function (apikey, ipAddress) {
            var deferred = $q.defer();
            // HTTP call  http://api.ipstack.com/134.201.250.155?access_key=9e77eafac8571991ab4f92005d1905dc
            $http.get("http://api.ipstack.com/"+ipAddress+"?access_key="+apikey)
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function(response){
                    deferred.reject(response);
                });
            return deferred.promise;
        };

        this.getWeather = function (apikey, city) {
            var deferred = $q.defer();
        $http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apikey)
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(response){
                deferred.reject(response);
            });
        return deferred.promise;
    };
});

