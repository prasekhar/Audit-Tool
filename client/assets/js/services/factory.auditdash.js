angular.module('auditTool').factory("auditFactory",function($http,$q){
        console.log("task factory");
        return $http.get('/audit_dash').then(function(response){
                console.log('data arrived to factory from Tasklist');
                if(typeof response.data === 'object'){
                    console.log(response);
                    return response.data;
                } else {

                    // Invalid response
                    return $q.reject(response.data);
                }
            },  function(response){
                
                    // Something went wrong sending request
                    return $q.reject(response.data);
                  
          });
      });