angular.module('auditTool')
.factory('logoutFactory', function($http, $q){

	var factory={};
	factory.logout=function(){
      return $http.get('/logout').then(function(response){

          console.log("Data arrived to the factory,..");
          if(typeof response.data === 'object'){

          return response.data;
          } else{

          return $q.reject(response.data);
          }
        }, function(response){

        return $q.reject(response.data);
      });
  }
  return factory;
 });
