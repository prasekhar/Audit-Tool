angular.module('auditTool')
.factory('projectFactory', function($http, $q, $rootScope){
    //    console.log("im in project Factory");
    var factory = {};
    
    factory.saveProject = function(project){
            
      return $http.post('/saveProject', project)
            .then(function(response){
                             
           //   console.log('data arrived to factory from Projects list');
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

    factory.getProjects=function(){
      return $http.get('/getProjects')
      .then(function(response){
     //     console.log('data arrived to factory from Projects list');
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

    factory.deleteProject=function(projects){
   //  console.log(projects);
        return $http.delete('/deleteProject/'+projects).then(function(response){
                             
              //  console.log('Project Data deleted');
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

    factory.updateProject=function(projects){
      console.log(projects);
      return $http.post('/updateSelectedProject', projects)
      .then(function(response){
                             
           //   console.log('data arrived to factory from Projects list');
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
    factory.postprojectdata = function(){

    return $http.get('../assets/data/projects.json').then(function(response){

      if(typeof response.data === 'object'){

        var projects = [];
        var data=response.data;
        var len = data.length;

        for(var i = 0 ; i<len ; i++){

      var isAvailable = false;

      var obj2 = {

        AllocationEndDate: data[i]["AllocationEndDate"],
        AllocationPrecentage: data[i]["AllocationPrecentage"],
        AllocationStartDate: data[i]["AllocationStartDate"],
        Utilizationpercentage: data[i]["Utilizationpercentage"],
        AssociateID: data[i]["AssociateID"],
        AssociateName: data[i]["AssociateName"],
        Gradename: data[i]["Gradename"],
        HCM_ID: data[i]["HCM_ID"]

      };
     
      var obj1 = {
        auditor: null,
        client: null,
        end_date: null,
        name: data[i]["ProjectName"],
        project_type: data[i]["Projecttype"],
        projectid: data[i]["ProjectId"],
        projectname: data[i]["ProjectName"],
        start_date: data[i]["AllocationStartDate"],
        status: data[i]["Status"],
        customerid:data[i]["CustomerID"] ,
        customername:data[i]["Customername"],
        technologystack:data[i]["technology_stack"],
        projectDescription:null,
        projectDeliveryMethodology:null,
        project_resources: []
      };    
      if(projects.length != 0){

        for(var j=0;j<projects.length;j++){

          if(projects[j]["projectid"] == data[i]["ProjectId"]){

            isAvailable = true;
          }         

          if(isAvailable){

            projects[j]["project_resources"].push(obj2);
            break;
          }
        }
      }
      if(!isAvailable){

        obj1["project_resources"].push(obj2);
        projects.push(obj1);
      }
      
    }
    for(var i=0;i<projects.length;i++){

        factory.indexvalue(i);
       factory.saveData(projects[i]);
    }

        return response.data;
  }
    else{

        return $q.reject(response.data);
      }
    }, function(response){

      return $q.reject(response.data);
    });
  };
    factory.projectInfo=function(id){
      
      return $http.post('/projectinfo/'+id)
      .then(function(response){
                             
           //   console.log('data arrived to factory from Projects list');
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
    
     factory.saveData=function(project)
     {

      return $http.post('/projectdata', project)
            .then(function(response){
                             
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
     }
     factory.indexvalue=function(k)
     {
        $rootScope.userid=k;
        console.log($rootScope.userid);
        return $rootScope.userid;

     }
     factory.postcode_review=function(percentage){

      return $http.post('/code_review', percentage)
            .then(function(response){
                             
                          if(typeof response.data === 'object'){
                              console.log(response.data);
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