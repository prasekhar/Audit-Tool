var app=angular.module('auditTool')
.directive("auditorDirective",function(){


    return {
        restrict :'E',
        templateUrl:"../../../modules/adminassign/auditor-drop.html",
        scope:{},
        link:function(scope,elem,attrs){
      
    

 scope.templateList = [{id:1, name: 'ankita'}, {id:2, name: 'devi'},{id:3, name: 'mounika'},{id:4, name: 'sahiti'},{id:5, name: 'rajasekhar'}];

  scope.template = {};
  scope.setValue = function(list) {
    scope.template.template_id = list.id;
    scope.template.template_name = list.name;
    $("#sel-two").html(list.name);
  }

      
          }
        }

    });
