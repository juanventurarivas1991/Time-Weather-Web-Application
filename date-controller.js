
var app = angular.module('myApp',[]);

app.controller( "DateController", function($scope){
    var vm = $this;
    var currentdate = new Date();
    
    vm.date =
    "Date: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + "  " +
    "Time: " + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

});