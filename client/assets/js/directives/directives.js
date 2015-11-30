var app=angular.module('auditTool')
.directive('area', ['$compile', 'graphFactory', function($compile, graphFactory) {
        return {
            restrict: 'AEC',
            replace:true,
            template: '<div class="graph"><div id="{{name}}"></div>'+
                      '<div class="details"><div class="accounts" ng-show="admin"><p class="sub-head">Accounts</p>'+
                      '<p class="lead">54</p></div><div class="projects" ng-show="admin"><p class="sub-head">Projects</p>'+
                      '<p class="lead">{{projects}}</p></div></div><div class="location" ng-show="admin"> <p>{{name}}</p></div></div>' ,         
                                                                             
             transclude: true,
              scope:{
                name: "@",
                resize:"@",
                admin:"@"
               },
             link: function(scope, element, attr, q) {

                   scope.name=graphFactory.getGraphDetails(scope.name).then(function(response)
                    {
                       scope.projectData={}; 
                       var total=0;
                       scope.projects;
                       if(typeof response.data === 'object'){
                         scope.projectData=response.data; 
                        
                         for(var i=0; i<scope.projectData[scope.name].length; i++)
                         {
                              total=total+ parseInt(scope.projectData[scope.name][i]['value'],10);
                              
                         }
                         scope.projects=total;               
                         drawGraph(scope.projectData[scope.name]);
                       }
                       else{
                        return q.reject(response);
                      }
                    }, function(response){
                      return q.reject(response);
                    });
                  
                   function drawGraph(location){
                        var arr = [];
                        for(var i = 0 ;i<location.length;i++){

                            var obj = {};
                            obj.label = location[i]['label'];
                            obj.value = location[i]['value'];
                            arr.push(obj);
                        }
                        //console.log(arr);
                          Morris.Donut({
                            element: scope.name,
                            data: arr,
                            colors:  ["#FE635F", "#8FC661", "#F2C208", "#7B7B7B"],
                            resize:scope.resize
                         });

                    }
             }
          };
        }]).directive('chosen', function() {

  var linker = function(scope, element, attr) {

    scope.$watch(function(newvalue, oldvalue){
      if (newvalue !== oldvalue) {
        element.trigger("chosen:updated");
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
}).directive('enableSwitch',function(){
    return{
        restirct:'AE',
        templateUrl:'modules/templates/switch.html',
        replace:true,
        link:function(scope,element,attribute){
            
        },
        controller:function(){
            
        }
    }
    
    
});