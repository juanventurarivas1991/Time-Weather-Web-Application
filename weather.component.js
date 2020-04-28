
myApp.component('weatherComponent', {
    template:"<p>Weather: {{vm.weather}}</p>",
    controllerAs: 'vm',
    controller: function WeatherController($element, $attrs) {
      /* vm = this;
       var apikey = "b441194a96d8642f1609a75c1441793f";
       vm.weather = 
       api.openweathermap.org/data/2.5/weather?q={London}&appid:{apikey};
 */ 
    }
  });

  
