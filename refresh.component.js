
myApp.component('refreshComponent', {
    template:"<p>{{refresh}}</p>",
    controllerAs: 'vm',
    controller: function RefreshController($scope, $element, $attrs) {
       vm = this;

      vm.refresh = function(){
       // location.reload();
      }
    }
//    vm.refresh();
//    $interval(vm.refresh, 3000);
  });
  
