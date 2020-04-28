
angular.module('appName', ['ngGeolocation'])
    .controller('appCtrl', function($scope, $geolocation) {
         $geolocation.getCurrentPosition().then(function(position) {
            console.log(position, 'current position');
         });
    });