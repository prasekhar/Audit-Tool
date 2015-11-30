angular.module('auditTool')
.factory('adminProjectFactory', function($http, $q){
      //  console.log("im in userLogin Factory");
    var factory = {};
 
        factory.projectList=function(){

      return $http.get('/projecttable')
            .then(function(response){               
              console.log('data arrived to factory');
                          if(typeof response.data === 'object'){

                              return response.data;
                          } else {

                              // Invalid response
                              return $q.reject(response.data);
                          }
                      },  function(response){
                          
                            // Something went wrong sending request
                            return $q.reject(response.data);
                    }); 
          }
             factory.deleteProject=function(id){
          console.log(id);
          return $http.delete('/deleteproject/'+id).then(function(response){
                    if(typeof response.data === 'object'){

                        return response.data;
                    }
                    else{

                      return $q.reject(response.data);
                    }
                  }, function(response){

                    return $q.reject(response.data);
                  });
        }
        factory.updateProject=function(editproject){
          console.log(editproject);
          return $http.post('/updateproject', editproject).then(function(response){
                    
                    if(typeof response.data === 'object'){
                        console.log("update factory");
                        return response.data;
                    }
                    else{
                      console.log("update factory");
                      return $q.reject(response.data);
                    }
                  }, function(response){
                    console.log("update factory");
                    return $q.reject(response.data);
                  });
        };
        return factory;

  })