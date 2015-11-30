angular.module('auditTool').controller("taskController", function($scope,$http, taskFactory){
        tasklist();
         $scope.taskDetails={};
        $scope.edittask={};
  $scope.sectionslist = [
            {
                "id": 1,
                "name": "PDP"
                
            },
            {
                "id": 2,
                "name": "Requirement Gathering"
              
            },
            {
                "id": 3,
                "name": "Design"
                
            },
            {
                "id": 4,
                "name": "Developement"
                
            },
            {
                "id": 5,
                "name": "Testing"
                
            },
            {
                "id": 6,
                "name": "Integration"
                
            }
            
    ];
     $scope.edittask.section={};
    
    $scope.addTask=function(task){
        
         var newTask={};
        
         //console.log(task.tname);
         newTask.tname=task.tname;
         newTask.section=task.section;
         console.log(newTask);
        taskFactory.addTask(newTask).then(function(data){
                console.log("task added successfully"+ data);
                tasklist();
        })
        $scope.addtask="";

    };

    function tasklist(){
            
         //   console.log("task factory-controller")
            taskFactory.taskList().then(function(data){
                $scope.tasklist=data;
                $scope.taskDetails=data;
                $scope.totaltask=$scope.tasklist.length;
               // console.log($scope.tasklist);
            });
     };  

    $scope.deleteTask=function(id){
        
       taskFactory.deleteTask(id).then(function(data){

               console.log(data);
            }, function(error){

                console.log(error);
            });
            tasklist();
    };

    $scope.editTask=function(id){
        for(i=0;i<$scope.taskDetails.length;i++){
            console.log($scope.taskDetails[i]._id);
            if($scope.taskDetails[i]._id===id){
                //console.log("hi")
                $scope.edittask=$scope.taskDetails[i];
               $scope.edittask.section=$scope.taskDetails[i].section_name;
                 //console.log($scope.edittask.section)
            }
        }

    };

    $scope.updatetask = function(edittask){
        console.log(edittask);
        taskFactory.updateTask(edittask).then(function(data){
            console.log("devi"+data);
        }, function(error){
            console.log(error);
        });
        tasklist();
    };

    $scope.getData=function(task){
        $scope.delId=task._id;
        console.log($scope.delId);
    }
    
});