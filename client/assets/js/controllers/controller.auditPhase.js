angular.module('auditTool').controller('auditController',function($scope,$rootScope,$cookieStore,  $http, $window,auditphaseFactory){
   var id={};
    
      $scope.tabs = [{
            title: 'PDP',
            url: 'one.tpl.html'
        }, 
        {
            title: 'REQUIRED GATHERING',
            url: 'two.tpl.html'
        }, 
        {
            title: 'ANALYSIS',
            url: 'three.tpl.html'
        },
        {
          title: 'DESIGN',
          url: 'four.tpl.html'
        },
        {
          title: 'CODE & UNIT TESTING',
          url: 'five.tpl.html'
        },{
          title: 'INTEGRATION SUPPORT',
          url: 'six.tpl.html'
        }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
     $rootScope.sectionslist = [
            
            {
                "id": 1,
                "name": "green"
              
            },
            {
                "id": 2,
                "name": "red"
                
            },
            {
                "id": 3,
                "name": "ember"
                
            },
            
        ];

       $scope.admin=[
            {
                
                "name": "ankita"
                
            },
            {
              
                "name": "devi"
              
            },
            {
                
                "name": "mounika"
                
            },
            {
                "name": "sahiti"
                
            },
            {
                
                "name": "rajasekhar"
                
            }
            
    ]; 
    $scope.addAudit=function(addData){
        //console.log(addData);
       // console.log($rootScope.projectId);
        addData.projectId=$rootScope.projectId;
         id=$rootScope.projectId;
        auditphaseFactory.saveAudit(addData).then(function(data){
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
        },
           function(error){
            console.log("error raised");
           }
              
        );
    }
   
      auditphaseFactory.getSectionsCheckList();

    $scope.getSections=function(){
          console.log($rootScope.projectId);
         
      auditphaseFactory.getSectionsData($rootScope.projectId).then(function(success){
          console.log(success);
      }, 

      function(error){
        console.log(error);
      })

    }

    $scope.getSections();
     
});