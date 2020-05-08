myApp.component('formComponent', {
    templateUrl: "form.html",
    controllerAs: 'vm',
    controller: function FormController($scope, $element, $attrs) {
      var ctrl = this;
     
      vm.updateRecord = function(city){
        vm.city = city;
        return city;
      }
    }
  });

