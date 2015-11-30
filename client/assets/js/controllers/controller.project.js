angular.module('auditTool')
.run(function($rootScope) {
    $rootScope.updatingProject = {};
    $rootScope.technologylist={};
    $rootScope.user="auditAssign";
})
.controller('projectController', function($scope, $http, $state, $window, $stateParams, $rootScope, projectFactory, technologyFactory,questionFactory, $cookieStore){
   // console.log("im in new Project controller");
   $rootScope.updatingProject={};
    getProjectsData();
    $rootScope.technologylist=technologyFactory.getTechnologies().then(function(data){
         $rootScope.technologyList=data.technologyList;
         // console.log($scope.technologyList);
      });
    
     $scope.saveProject=function(project){
        //console.log(project);
        projectFactory.saveProject(project).then(function(data){
         //console.log(data);
           if(data){

                     if(data.status == 201){
                        //  console.log(data);
                          $window.location.href='/modules/home.html#/Projects'
                    }
                    else if(data.status == 403){

                        console.log("Adding new project raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });

        }
      $scope.insertprojects=function(){ 
        console.log("data");
        projectFactory.postprojectdata();
       
      }
      
      
        function getProjectsData(){
           $scope.projectsList={};
           //console.log($rootScope.updatingProject);  
          // console.log("Im getting Projects data");
           projectFactory.getProjects().then(function(data){
           //console.log(data);
           if(data){

                     if(data.status == 201){
                          //console.log(data);
                          $scope.projectsList=data.projects;
                           
                    }
                    else if(data.status == 403){

                        console.log("failed to get projects data try Again ");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });
         

        }

          $scope.getProjectData=function(projects){
             $rootScope.updatingProject=projects;
             console.log($rootScope.updatingProject);
        }
         
         

        $scope.getData=function(data){
         $scope.projects={};
         $scope.projects.did = data._id;
         console.log(data);
         console.log($scope.projects);
      };  

        
      
        
        $scope.deleteCurrentProject=function(project){
           console.log(project);
          // console.log("IM in delete projects Contoller");
           projectFactory.deleteProject(project).then(function(data){
         
          console.log("delete Projects");
           if(data){

                    if(data.status == 201){
              //            console.log(data);
                          getProjectsData();
                    }
                    else if(data.status == 403){

                        console.log("Deleting project raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });
        };

        $scope.updateProject=function(project)
        {
          console.log("im in update project controller");
          console.log(project);
        }

        $scope.projectinfo=function(id){
          
          console.log(id);
           $rootScope.projectId=id;
          //console.log($rootScope.projectId);
          $rootScope.projectinfolist={};
          $rootScope.resourcelist=[];
          projectFactory.projectInfo(id).then(function(data){
         
          console.log("Projects");
           if(data){

                    if(data.status == 201){
                         

                           $rootScope.projectinfolist=data.project[0];
                            $rootScope.resourcelist=data.project[0].project_resources;
                            $rootScope.technologystack=data.project[0].technologystack;
                            console.log($rootScope.technologystack);
                             console.log( $rootScope.projectinfolist.projectname);
                         
                    }
                    else if(data.status == 403){

                        console.log("Deleting project raised error, please try again");
                    }
                    
                }        
            }, function(error){
                console.log(error);
            });
        
        };
        console.log(questionFactory.codeReview);
        $scope.code_review=function(){
          $scope.percentage=[];
          $scope.codeReview_data={code_id:$rootScope.projectId};
         //$scope.percentage.push($rootScope.projectId);
          $scope.arr=$rootScope.technologystack.split(',')
          console.log($scope.arr);
          for(j=0;j<$scope.arr.length;j++){

            for(k=0;k<questionFactory.codeReview.length;k++){
                   //console.log(j,k);
                if($scope.arr[j]===questionFactory.codeReview[k].technology){
                    console.log($scope.arr[j]);
                    console.log($scope.review[k].technology);
                    $scope.percentage.push($scope.review[k]);
                    break;
                }
            }
        }
         $scope.codeReview_data.percent=$scope.percentage;
        console.log( $scope.codeReview_data);

        projectFactory.postcode_review( $scope.codeReview_data).then(function(data){

          console.log(data);
          $rootScope.status=data[0].project_codereview;
          console.log($rootScope.status);
        },function(error){

          console.log(error);
          $rootScope.status="there is no technologies added to this project";
        })
        };

        $scope.userrole=function(){
           $scope.logged=$cookieStore.get('userAccount');
            
          //var is_sadmin=$scope.logged.user.is_sadmin;
            var role=$scope.logged.user.user_role;
            
            if(role==="auditor"){
              //alert("audit");
                 $rootScope.user="auditPhase";
                 console.log($rootScope.user);
                 $state.go('auditPhase');
            }
            else{
              //alert("admin");
                 $rootScope.user="auditAssign";
                  console.log($rootScope.user);
                  $state.go('auditAssign');
            }
              console.log($rootScope.user);

        }
    
})

.controller('updateProjectController', function($scope, $rootScope,$http, $window, projectFactory){
  console.log("im in updateProjectController");
  $scope.updateProject=function(updatingProject){
    console.log(updatingProject);
         projectFactory.updateProject(updatingProject).then(function(data){
         //console.log(data);
           if(data){

                     if(data.status == 201){
                        //  console.log(data);
                          $window.location.href='/modules/home.html#/projectInfo'
                    }
                    else if(data.status == 403){

                        console.log("Adding new project raised error, please try again");
                    }
                    
                }        
            }, function(error){

                console.log(error);
            });

        }
 

});