angular.module('auditTool')
.factory('dashboardFactory', function($http, $q){
     // console.log("im in  dashboardFactory");
      var factory={};

      factory.getLinks=function(role){
        
        return $http.post('/Links/'+role)
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

      return factory;    
    })

    .factory('graphFactory', function($http, $q){
      //console.log("Projects Reports service Invoked");
       var factory={};
        
        factory.getGraphDetails = function(){  
                 return $http.get('../assets/data/report.json'); 
          };
      return factory;

    })

    .factory('tableDataFactory', function($http, $q, ngTableParams){
      var factory={};

      factory.getTableData=function(){
        return $http.get('../assets/data/projects.json')
          .then(function(response){            
                //console.log('data arrived to  Table factory json');
                if(typeof response.data === 'object'){
                    //console.log(response.data);
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

      factory.generateTable=function(data, scope, filter){
        scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10 ,
         sorting: {
            name: 'asc'     // initial sorting
        }
                 
    }, {
       // total: data.length, // length of data
        counts:[], //Show Pages
        getData: function ($defer, params) {
            var orderedData = params.sorting() ? filter('orderBy')(data, params.orderBy()):data;
           // console.log(orderedData);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
     });

      }; 
       return factory;    
    });