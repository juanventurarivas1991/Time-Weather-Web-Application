myApp.component('themeComponent', {
    template:"<input type='checkbox' data-toggle='toggle' checked ng-model='vm.cb'/>",
    controllerAs: 'vm',
    controller: function ThemeController($scope, $element, $attrs) {
       vm = this;
        console.log($scope.theme);
        console.log(vm.cb);

      $scope.theme = vm.cb ? true : false;       
    }
  });
