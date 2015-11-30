angular.module('auditTool')
.factory('technologyFactory', function($http, $q){
   // console.log("im in Technology Factory");
    var factory = {};
    factory.saveTechnology = function(technology){
           
      return $http.post('/saveTechnology',technology)
            .then(function(response){
                             
            //  console.log('data arrived to factory from technlogy list after addition');
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
    };

    factory.getTechnologies=function(){
     //console.log("im in getTechnologies factory");
       return $http.get('/getTechnologies')
            .then(function(response){
                             
           //console.log('data arrived to factory from technlogy list');
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
    };

    factory.updateTechnology=function(technology){
   //   console.log(technology);
  //    console.log("im in Update Technologies factory");
       return $http.post('/updateTechnology',technology)
            .then(function(response){
                             
        //      console.log('data arrived to factory from technlogy list');
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
    };

   
    factory.deleteTechnology=function(technology){
    //  console.log(technology);
    //  console.log("im in Delete Technologies factory");
       return $http.delete('/deleteTechnology/'+technology.id,technology)
            .then(function(response){
                             
            //  console.log('data arrived to factory from technlogy list');
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
    };
       
    return factory;
  });
