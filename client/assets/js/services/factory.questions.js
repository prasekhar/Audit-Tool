angular.module("auditTool").factory('questionFactory',function($http,$q,$rootScope){

	console.log("iam in questionFactory");
	var factory={};
	factory.questionList=function(){

		  return $http.get('/questionList').then(function(response){
                             
                console.log('data arrived to factory from questionlist db');
                if(typeof response.data === 'object'){
                    console.log(response);
                    return response.data;
                } else {

                    // Invalid response
                    console.log("I am not a questionlist object");
                    return $q.reject(response.data);
                }
            },  function(response){
                
                    // Something went wrong sending request
                    console.log("I error page");
                    return $q.reject(response.data);
          })
	};
    factory.addQuestion=function(addQuestion){

        console.log(addQuestion);
           return $http.post('/addQuestion',addQuestion).then(function(response){
                             
                console.log('add question function');
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
    factory.addReview=function(review){

      console.log(review);
      console.log(review[0].htmlpercent);
      return $http.post('/addReview',review).then(function(response){
                             
                console.log('add review function');
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
    factory.editQues=function(id){

        console.log(id);
        var qid={
      idno:id
    }
        console.log("data request came from editquestion controller");
        return $http.post('/editQuestion',qid)
            .then(function(response){

              console.log("data arrived to edit question factory");
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
    factory.updateQues=function(editQ){

        console.log("data request came from updateQuestion controller");
        console.log(editQ);
        return $http.post('/updateQuestion', editQ).then(function(response){
                    
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
    factory.removeQues=function(id){

      console.log("request from remove ctller to delete the data"+id);
      return $http.delete('/deleteQuestion/'+id).then(function(response){
                    
                    if(typeof response.data === 'object'){
                        console.log("delete factory");
                        return response.data;
                    }
                    else{
                      console.log("delete factory");
                      return $q.reject(response.data);
                    }
                  }, function(response){
                    console.log("delete factory");
                    return $q.reject(response.data);
                  });
    };
    factory.codeReview=[];
  
	return factory;
});