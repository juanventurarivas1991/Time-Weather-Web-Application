
myApp.component('weatherComponent', {
    template:"<p>Weather: {{weather}}{{text}}</p>",
    controllerAs: 'vm',
    controller: function WeatherController($scope,$element, $attrs) {
      vm = this;
      controller = $scope;
      $scope.text = "hola";
     
      var apikey = "b441194a96d8642f1609a75c1441793f";
      var city = "London";
     
      
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apikey)
      .then(function (response) { 
        return response.json(); 
      })
      .then(function(response) {
        console.log(response);
        $scope.vm.text ="hola mundo";
        $scope.weather = response.weather[0].description;
        console.log($scope.vm.weather);
        controller.text ="mundo" ;
      });
    
    }
  });

  
