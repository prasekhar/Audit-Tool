angular.module('auditTool')
.factory('userLoginFactory', function($http, $q){
      //  console.log("im in userLogin Factory");
		var factory = {};
		factory.login = function(user){

			return $http.post('/login', user)
						.then(function(response){
                             
						//	console.log('data arrived to factory');
	                        if(typeof response.data === 'object'){
                            //    console.log("Authentication Granted");
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