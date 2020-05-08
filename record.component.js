

myApp.component('recordComponent', {
  templateUrl: "record.html",
  controllerAs: 'vm',
  controller: function RecordController($scope, $element, $attrs, weatherService) {
    var ctrl = this;
    var $scope
    var city = "Zamora";

    vm.setData = function(){

      weatherService.getWeather(apikeyWeahter, city)
      .then(function (response) {
        controller.weather = response.weather[0].description;
      })

    } 
    

  }
});

