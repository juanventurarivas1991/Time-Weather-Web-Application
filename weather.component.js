
myApp.component('weatherComponent', {
    template:"<p>Weather: {{vm.weather}}</p>",
    controllerAs: 'vm',
    controller: function WeatherController($scope,$element, $attrs) {
      vm = this;
      

      var apikey = "b441194a96d8642f1609a75c1441793f";
      var city = "London";
     
      
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apikey)
      .then(function(response) {
       vm.weather = response.main.temp;
        

        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    
    }
  });

  
