
myApp.controller('ThemeController', ['$scope', function($scope) {
  
        var hours = new Date().getHours();
        $scope.theme = hours > 15? 'light' : 'dark';
}]);





   