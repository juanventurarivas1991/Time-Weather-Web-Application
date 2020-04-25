

myApp.component('greetingsComponent', {
    template: "<p class='label label-info'>{{$ctrl.greetings}}</p>",
    controller: function GreetingsController($scope, $element, $attrs) {
      var ctrl = this;
      var currentdate = new Date();
      var numberTime = currentdate.getHours();
   
      if (numberTime <= 3) {
        ctrl.greetings = "goodnight";
      }else if(numberTime <= 12){
        ctrl.greetings = "good morning";
      }else if(numberTime > 12){
        ctrl.greetings = "good afternoon";
      }
    }
  });