var app = angular.module('auditTool');
app.factory("XLSXReaderService", ['$q', '$rootScope',
    function($q, $rootScope) {
        var service = function(data) {
            angular.extend(this, data);
        };

        service.readFile = function(file, showPreview) {
            var deferred = $q.defer();

            XLSXReader(file, showPreview, function(data) {
                $rootScope.$apply(function() {
                    deferred.resolve(data);
                });
            });

            return deferred.promise;
        };


        return service;
    }
]);


          
  app.controller('bulkUploadController', function($scope,$rootScope, XLSXReaderService) {
    console.log("im in bulk upload contr");
  $scope.showPreview = false;
  $scope.showProject={}
  $rootScope.sheets="";
     //$scope.sheets = [];

    $scope.fileChanged = function(files) {

        $scope.isProcessing = true;
     
        $scope.excelFile = files[0];
        XLSXReaderService.readFile($scope.excelFile, $scope.showPreview).then(function(xlsxData) {
            $rootScope.sheets = xlsxData.sheets;
            $scope.isProcessing = false;
            console.log($rootScope.sheets);
        });
       
    };
    $scope.sprint=true;


   $scope.data=function()
   {
     $scope.sprint=false;

    
    $scope.fix=$rootScope.sheets;
     console.log("This is rootscope"+$rootScope.sheets);
     console.log("this is scope fix"+$scope.fix);
     //console.log($scope.fix);

   }
      
  });
              
