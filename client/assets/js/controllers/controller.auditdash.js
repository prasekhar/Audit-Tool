angular.module('auditTool')
.controller("auditController", function($scope,$http, $route, auditFactory){

  
    $scope.proData = [];
     $scope.greenData = [];
    console.log("audit factory-controller")
    auditFactory.then(function(data){
        console.log(data);
         $scope.audit=data;
         console.log($scope.audit);
        });
    $scope.check=function(data)
    {
        console.log("Arrived");
        if(data.Status==="In-progress")
        {
           $scope.proData.push(data);
        }
        if(data.Status==="Green")
        {
            $scope.greenData.push(data);
        }

    };
    
    // // $scope.loadRow = function(data){

    //     console.log("I got the request");
    //     console.log(data);;
    //     $scope.proData.push(data);
    // };
    // $scope.loadGreen = function(data){

    //     console.log("I got the request");
    //     console.log(data);;
    //     $scope.greenData.push(data);
    // };
})