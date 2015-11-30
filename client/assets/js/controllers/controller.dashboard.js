angular.module('auditTool').run(function($rootScope, $cookieStore, $window){

        $rootScope.logout = function(){

            $cookieStore.remove('userAccount');
            $window.location.href = '/';

        };
        $rootScope.codeReview=[];
  })
.controller('dashboardController', function($scope, $cookieStore,  $http, $window, $filter, ngTableParams, dashboardFactory, tableDataFactory, adminProjectFactory,logoutFactory){
    
    $scope.logged=$cookieStore.get('userAccount');
    $scope.dat={};
    //var is_sadmin=$scope.logged.user.is_sadmin;
    var role=$scope.logged.user.user_role;

        dashboardFactory.getLinks(role).then(function(data){
        $scope.links=data.links;

       tableDataFactory.getTableData().then(function(data){
        //console.log(data);
          $scope.dat=data.projects;
          tableDataFactory.generateTable($scope.dat, $scope, $filter, ngTableParams);
      });
         
  });

    $scope.sort = function(keyname){
      console.log("Im in sort function");
      console.log(keyname);
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
      }
    //console.log(is_sadmin+" "+is_admin);
    $scope.logout=function(){

      logoutFactory.logout().then(function(response){

                console.log("Im in logout");
                $cookieStore.remove('userAccount');
                $window.location.href="../index.html";
              // console.log(data);
            }, function(error){

                console.log(error);
                 $window.location.href="../index.html";
            });          
  };

  $scope.give=function(id){
        $scope.Nid=id;
        console.log($scope.Nid);

    }
     $scope.deleteProject=function(id){
        console.log();
       adminProjectFactory.deleteProject(id).then(function(data){

               console.log(data);
            }, function(error){

                console.log(error);
            });

            projectlist();
           
    };
    $scope.editProject=function(id){
        for(i=0;i<$scope.projectDetails.length;i++){
            console.log($scope.projectDetails[i]._id);
            if($scope.projectDetails[i]._id===id){
                //console.log("hi")
                $scope.editproject=$scope.projectDetails[i];
               // $scope.edittask.section.name=$scope.taskDetails[i].section_name;
                 //console.log($scope.edittask.section)
            }
        }

    };
     $scope.updateproject = function(editproject){
        console.log(editproject);
        adminProjectFactory.updateProject(editproject).then(function(data){
            console.log("abc"+data);
        }, function(error){
            console.log(error);
        });
        projectlist();
    };
  
  });