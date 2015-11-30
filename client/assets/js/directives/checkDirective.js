var app=angular.module('auditTool')
.directive("checkDirective",function(){


    return {
        restrict :'AE',
        templateUrl:"../../../modules/adminassign/checkbox.html",
        scope:{
          a :"=auditsections"
        },
        link:function(scope,elem,attrs){
             // $(".tick").css("display", "none");
            

             var i=0;
                  
           return $(function () {
               var a = [];
                    $('input[name="name"]').bind('click', function () {
                      $(this).parent().toggleClass("class1");
                 $(this).siblings(".checkbox-small").children("span").toggleClass("tick"); 
                        if ($(this).is(':checked')) {
                            a.push($(this).attr("id"));
                        }
                        else {
                            if ((index = a.indexOf($(this).attr("id"))) !== -1) {
                                a.splice(index, 1);
                            }
                        }
                        
                    });
                    return a;
                }); 
                  
          }
        }

    })