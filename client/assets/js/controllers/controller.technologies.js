angular.module('auditTool')
.controller('technologyController', function($scope, $http, $cookieStore, technologyFactory){
  
  $scope.logged=$cookieStore.get('userAccount');
    var is_sadmin=$scope.logged.user.is_sadmin;
    var is_admin=$scope.logged.user.is_admin;

  getTechnologies();
  //console.log("im in Technology Controller");
  $scope.saveTechnology=function(technology){
   
    if(is_sadmin){
        technology.revieved=true;
    }
    if(is_admin){
        technology.revieved=false;
    }
   
     technologyFactory.saveTechnology(technology).then(function(data){
           if(data){

                    if(data.status == 201){
                          console.log(data);
                          $scope.technology="";
                          getTechnologies();
                    }
                    else if(data.status == 403){

                        console.log("Adding new technology raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });

        }

    
    $scope.updateTechnology=function(technology){

    if(is_sadmin){
        technology.revieved=true;
    }
    if(is_admin){
        technology.revieved=false;
    }
    //console.log(technology);
   
     technologyFactory.updateTechnology(technology).then(function(data){
       // console.log(technology);
           if(data){

                    if(data.status == 201){
                          console.log(data);
                          $scope.technology="";
                          getTechnologies();
                    }
                    else if(data.status == 403){

                        console.log("updating new technology raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });

        };

     $scope.deleteTechnology=function(technology){
       // console.log(technology);
        technologyFactory.deleteTechnology(technology).then(function(data){
       // console.log(technology);
           if(data){

                    if(data.status == 201){
                          //console.log(data);
                          $scope.technology="";
                          getTechnologies();
                    }
                    else if(data.status == 403){

                        console.log("updating new technology raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });

        };
    

      $scope.getData=function(data){
        $scope.technology={};
         $scope.technology.sname=data.name;
         $scope.technology.id = data._id;
      }  



      function getTechnologies(){
        console.log("Im in get Technologies function");
         technologyFactory.getTechnologies().then(function(data){
         $scope.technologyList=data.technologyList;
     //     console.log($scope.technologyList);
      });
      }  
 });
