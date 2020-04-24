
myApp.component('refreshComponent', {
    template: '{{refresh}}',
    controller: function RefreshController($scope, $element, $attrs) {
      this.refresh = function() {
        location.reload();
      };
    }
  });


  // "<button class='btn btn-lg  btn-info' ng-click='refresh()'>Refresh</button>",