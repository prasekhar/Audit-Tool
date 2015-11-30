angular.module('auditTool')

 .controller('loginController', function($scope, $cookieStore,$http, $window, $state, userLoginFactory){
   //  console.log("im in login Controller");
    $scope.myAccount = false; // User account status If true "user logged in" else "not logged in"
    $scope.user = '';
    $scope.validation=false;
    $scope.signin = function(){
            //console.log("im in user authentication controller");
            userLoginFactory.login($scope.user).then(function(data){
        
                 $scope.role = data.user.user_role;
               
                if(data.status == 201 && $scope.role=="super_admin" ){
          
                    $scope.show = '';
                    $scope.logg = data.user.username;
                    $scope.myAccount = true;
                    $cookieStore.put('userAccount', data);
                   
                    var role=$cookieStore.get('userAccount').user.user_role;
                    console.log(role);
                    $window.location.href = "../../modules/home.html#/Dashboard";
                }
                else if(data.status == 201 && $scope.role == "admin") {

                    $scope.show = '';
                    $scope.logg = data.user.username;
                    $scope.myAccount = true;
                    $cookieStore.put('userAccount', data); 
                    $window.location.href = "../../modules/home.html#/admindashboard";                   
                } 
                else if(data.status == 201 && $scope.role == "auditor") {

                    $scope.show = '';
                    $scope.logg = data.user.name;
                    $scope.myAccount = true;
                    $cookieStore.put('userAccount', data); 
                    $window.location.href = "../../modules/home.html#/auditdashboard";                   
                } 
                else{

                    console.log("Login failed, Please try again");
                    $scope.user = '';
                    $scope.validation=true;
                } 
                             
            }, function(error){

                console.log(error);
            });
        };
    });