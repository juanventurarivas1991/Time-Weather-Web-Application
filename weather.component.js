
 myApp.component('weatherComponent', {
  template:"<p>Weather: {{weather}}</p>",
  controllerAs: 'vm',
  controller: function WeatherController($scope, weatherService, $element, $attrs) {
      var apikey = "b441194a96d8642f1609a75c1441793f";
      var city = "London";
      var controller = $scope;
      controller.weather = "None";
      weatherService.getWeather(apikey, city).then(function(response) {
          controller.weather = response.weather[0].description;
      });
  }
});
  
 