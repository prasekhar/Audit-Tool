angular.module('auditTool')
.controller("userController",function($scope, $cookieStore,  $http, $window ,userFactory){
    $scope.rolelist = [
            {
                "id": 1,
                "name": "admin"
                
            },
            {
                "id": 2,
                "name": "super_admin"
              
            },
            {
                "id": 3,
                "name": "auditor"
                
            }
            
    ];
    $scope.userDetails={};
    $scope.edituser={};
   // console.log("user controller");
    function refresh(){
        userFactory.user_list().then(function(data){
            $scope.userlist=data.users;
            $scope.userDetails=data.users;
            $scope.edituser="";
           // console.log($scope.userlist);
            // console.log("this is userDetails"+$scope.userDetails);

        });
    };
    refresh();
    //console.log($scope.userDetails);
    $scope.add_user = function(adduser){

        console.log("hai this is from adduser of controller");
        console.log($scope.adduser);
        console.log($scope.adduser.role);
        userFactory.add_user($scope.adduser).then(function(data){
            refresh();
            $scope.adduser="";
           // console.log($scope.userlist);
            
        });
      
    };
    $scope.getuser=function(user){

        $scope.userdata={};
        $scope.userdata.id=user._id;
    }
    $scope.removeuser = function(id){

       console.log(id);
        userFactory.removeuser(id).then(function(data){

            console.log("after deleting" +data);
        },function(error){

            console.log(error);
        });
        refresh();
    };
    $scope.editUser = function(id){

        console.log("iam in edituser controller function"+id);
        userFactory.edituser(id).then(function(data){

            console.log("after retriving data"+data);
            $scope.edituser=data.users;
            $scope.edituser.name=data.users.username;
            console.log($scope.edituser);
        },function(error){
            console.log(error);
        });
    };
    $scope.updateUser= function(edituser){

       // console.log("update user"+edituser);
        userFactory.updateUser(edituser).then(function(data){

          //  console.log("after editing" +data);
             refresh();
        },function(error){

            console.log(error);
        });
       
    };

});