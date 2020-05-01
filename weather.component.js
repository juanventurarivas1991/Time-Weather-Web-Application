myApp.component('weatherComponent', {
    template: "<p>Weather: {{weather}}</p>",
    controllerAs: 'vm',
    controller: function WeatherController($scope, weatherService, $element, $attrs) {

        var apikeyLocation = "9e77eafac8571991ab4f92005d1905dc";
        var apikeyWeahter = "b441194a96d8642f1609a75c1441793f";
        var city = "London";
        var controller = $scope;
        controller.weather = "None";

        weatherService.getIpAddress().then(function(response) {
            return response.ip;
        }).then(function(ipAddress){
              weatherService.getlocation(apikeyLocation, ipAddress)
                  .then(function(response) {
                    return response.city;
                })
                .then(function(city){
                    console.log(city);
                  weatherService.getWeather(apikeyWeahter, city)
                      .then(function(response) {
                        console.log(response);  
                        controller.weather = response.weather[0].description;
                        console.log(controller.weather);
                    })
                });
      })
    
  }
});

