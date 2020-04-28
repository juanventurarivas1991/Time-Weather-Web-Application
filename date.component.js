
myApp.component('dateComponent', {
    template: "<p >{{$ctrl.date}}</p>",
    controller: function DateController($scope, $element, $attrs) {
      var vm = this;
      var currentdate = new Date();

      vm.date =
      "Date: " + currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/"
      + currentdate.getFullYear() + "  " +
      "Time: " + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    }
  });

  