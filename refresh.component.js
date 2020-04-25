
myApp.component('refreshComponent', {
    template:"<button class='btn btn-lg  btn-info'  >Refresh {{$ctrl.test}}</button>",
    controller: function RefreshController($scope, $element, $attrs) {
      var vm = this;
      vm.test = "hola";

      vm.refresh = function() {
        vm.test = "hola";

       location.reload();
      };
    }
  });

  // "<button class='btn btn-lg  btn-info ng-click='refresh()'> Refresh </button>",
// "<button class='btn btn-lg  btn-info' ng-click='vm.refresh()' >Refresh</button>",
// "<p class='label label-info'>{{$ctrl.date}}</p>",
//  <p>Hasta el momento has hecho {{$ctrl.numClics}}</p>
// <button ng-click="$ctrl.incrementaClic()">Haz clic para incrementar el contador</button>
 // "<button class='btn btn-lg  btn-info ng-click='refresh()'> Refresh </button>",
// "<button class='btn btn-lg  btn-info' ng-click='vm.refresh()' >Refresh</button>",
// "<p class='label label-info'>{{$ctrl.date}}</p>",
//  <p>Hasta el momento has hecho {{$ctrl.numClics}}</p>
// <button ng-click="$ctrl.incrementaClic()">Haz clic para incrementar el contador</button>
/*angular.module('cuentaClics', [])

.controller('CuentaClicsController', function(){
  var vm  = this;
  vm.numClics = 0;
  vm.incrementaClic = function(){
    vm.numClics ++;
  }
})
.component('cuentaClics', {
  templateUrl: './components/cuenta-clics/cuenta-clics.html',
  controller: 'CuentaClicsController'
});*/