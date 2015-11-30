var chose = angular.module('myApp', []);

chose.directive('chosen', function() {

  var linker = function(scope, element, attr) {

    scope.$watch(function(newvalue, oldvalue){
      if (newvalue !== oldvalue) {
        element.trigger("chosen:updated");
        element.width("200px")
      }

      return element[0].length; 
  }), 

    element.chosen(
      {
        "disable_search": true
      }
    );
    
  }

  return {
    restrict: 'A',
    link: linker
  };
});