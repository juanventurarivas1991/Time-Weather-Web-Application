/*
 myApp.component('locationModule', {
    template:"<p>Weather: {{city}}</p>",
    controllerAs: 'vm',
    controller: function WeatherController($scope, weatherService, $element, $attrs) {
        var apikey = "9e77eafac8571991ab4f92005d1905dc";
        var city = "London";
        var controller = $scope;
        controller.weather = "None";
        weatherService.getLocation(apikey, city).then(function(response) {
            controller.city = response.city;
        });
    }
  });
    */
   