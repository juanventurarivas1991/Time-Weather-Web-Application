angular.
  module('myApp').
  component('greetings', {
    template: "<p class='label label-info' {{$scope.greetings}}></p>",
    controller: function greetingsController() {
      
      let numberTime = currentdate.getHours();

      if (numberTime <= 3) {
        this.greetings = "goodnight";    
      }else if(numberTime <= 12){
        this.greetings = "good morning";    
      }else if(numberTime > 12){
        this.greetings = "good afternoon";
      }
    }
  });

 