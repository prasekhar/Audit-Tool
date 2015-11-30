angular.module('auditTool')
.controller('projectDescriptionController', function($scope,$stateParams){ 
//console.log($stateParams.id);
$scope.project=$stateParams.id;
});