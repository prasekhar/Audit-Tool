angular.module('auditTool')
.factory('auditphaseFactory', function($http, $q){
      console.log("im in  auditPhaseFactory");
      var factory={};

      factory.saveAudit=function(sections){
        console.log(sections);
        return $http.post('/insertAuditPhase',sections)
          .then(function(response){
                             
				//console.log('data arrived to factory from superAdminLinks');
                if(typeof response.data === 'object'){
                   // console.log(response.data);
                    return response.data;
                } else {

                    // Invalid response
                    return $q.reject(response.data);
                }
            },  function(response){
                
                    // Something went wrong sending request
                    return $q.reject(response.data);
        	});
      } ; 

      factory.getSectionsCheckList=function(){
             $('input[name="name"]').bind('click', function () {
                 $(this).parent().toggleClass("class1");
                 $(this).siblings(".checkbox-small").children("span").toggleClass("tick");            
            });
      }

      factory.getSectionsData=function(id){
       
        console.log(id);
         var pid={};
        pid.id=id;
        console.log(pid);
               return $http.post('/getSectionsData',pid).then(function(response){
                        if(typeof response.data === 'object'){
                              console.log(response);
                              return response.data;
                          } else {
                              // Invalid response
                              return $q.reject(response.data);
                          }
               },
               function(response){
                  return $q.reject(response.data);
               });
      }
      return factory;    
    });

  
  