
let app = angular.module('myapp',[]);

app.controller( "dateController", ['$scope', function($scope) {
    let currentdate = new Date(); 

    $scope.date =
     "Date: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + "  " +
    "Time: " + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
}]);

app.controller("refreshController", ['$scope', function($scope) {

    $scope.refresh = function() {
        location.reload();
    };
}]);



