angular.module('auditTool').factory('sectionFactory', function($http, $q){
     //   console.log("im in section Factory");
   var factory = {};
 
        factory.sectionList=function(){
      return $http.get('/sectiontable')
            .then(function(response){               
           //   console.log('data arrived to factory');
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
        factory.deleteSection=function(id){
        //  console.log(id);
          return $http.delete('/deletesection/'+id).then(function(response){
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
        factory.updateSection=function(editsection){
     //     console.log(editsection);
          return $http.post('/updatesection', editsection).then(function(response){
                    
                    if(typeof response.data === 'object'){
                 //       console.log("update factory");
                        return response.data;
                    }
                    else{
                  //    console.log("update factory");
                      return $q.reject(response.data);
                    }
                  }, function(response){
                //    console.log("update factory");
                    return $q.reject(response.data);
                  });
        };
         factory.addSection=function(addsection){
          //console.log("hello");
        console.log(addsection);
           return $http.post('/addsection',addsection).then(function(response){
                             
                console.log('add section function');
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
          })
        };
    
 			return factory;
})