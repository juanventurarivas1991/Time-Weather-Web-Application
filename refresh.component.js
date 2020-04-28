
myApp.component('refreshComponent', {
    template:"<button class='btn btn-lg  btn-info text-uppercase' ng-click='vm.refresh()' >Refresh </button>",
    controllerAs: 'vm',
    controller: function RefreshController($element, $attrs) {
       vm = this;

      vm.refresh = function(){
        location.reload();
      }
      
    }
  });

  
