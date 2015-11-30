angular.module('auditTool')
.factory("userFactory",function($http,$q){
     // console.log("im in user factory");
      var factory={};
      factory.user_list=function(){
        return $http.get('/userList')
         .then(function(response){
                             
             //   console.log('data arrived to factory from userList');
                if(typeof response.data === 'object'){
                    //console.log(response);
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
       
       factory.add_user = function(newuser){

      return $http.post('/addUser', newuser)
            .then(function(response){
                             
          //    console.log('data arrived to add user factory');
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
  factory.removeuser = function(id){

    console.log(id);
      return $http.delete('/deleteUser/'+id)
            .then(function(response){

          //    console.log("data arrived to remove user factory");
                      if(typeof response.data === 'object'){

                              return response.data;
                              console.log(response);
                          } else {

                              // Invalid response
                              return $q.reject(response.data);
                          }
                      },  function(response){
                          
                            // Something went wrong sending request
                            return $q.reject(response.data);
            });
    };
    factory.edituser=function(id){
    var userid={
      idno:id
    }
    //  console.log("data request came from edituser controller");
        return $http.post('/editUser',userid)
            .then(function(response){

          //    console.log("data arrived to remove user factory");
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

    factory.updateUser=function(edituser){

 //     console.log("data request for editing from factory");
      return $http.post('/updateUser',edituser)
            .then(function(response){

         //     console.log("data arrived to remove user factory");
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
    };
       return factory;
      });