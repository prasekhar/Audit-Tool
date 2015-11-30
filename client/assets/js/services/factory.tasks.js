angular.module('auditTool').factory("taskFactory",function($http,$q){
        //console.log("task factory");
        var factory={};
        factory.taskList=function(){
          return $http.get('/taskList').then(function(response){
                             
            //    console.log('data arrived to factory from Tasklist');
                if(typeof response.data === 'object'){
                   // console.log(response);
                    return response.data;
                } else {

                    // Invalid response
                //    console.log("I am not a taskList object");
                    return $q.reject(response.data);
                }
            },  function(response){
                
                    // Something went wrong sending request
                    console.log("I error page");
                    return $q.reject(response.data);
          })
        };
        factory.addTask=function(addtask){
          //console.log(addtask);
           return $http.post('/addtask',addtask).then(function(response){
                             
              //  console.log('add task function');
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

        factory.deleteTask=function(id){
         // console.log(id);
          return $http.delete('/deletetask/'+id).then(function(response){
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
        factory.updateTask=function(edittask){
        //  console.log(edittask);
          return $http.post('/updatetask', edittask).then(function(response){
                    
                    if(typeof response.data === 'object'){
                      //  console.log("update factory");
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