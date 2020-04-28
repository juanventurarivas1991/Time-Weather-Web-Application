
myApp.controller('themeController', ['$scope', function($scope) {
  
    function setTheme() {        
        var hours = new Date().getHours();
        $scope.theme = hours > 15;  
    }
    setTheme();
}]);





   