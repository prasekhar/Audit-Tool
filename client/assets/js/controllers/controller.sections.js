angular.module('auditTool')
.controller("sectionController", function($scope,$http, $rootScope,sectionFactory){
 

       $scope.addSection=function(section){
        console.log("add function");
        console.log(section);
         var newSection={};
        console.log(section.section_name);
         //console.log(task.tname);
         newSection.s_name=section.section_name;
         newSection.s_id=section.s_id;
         newSection.description=section.description;
         newSection.d=new Date();
       
         //console.log(newTask);
        sectionFactory.addSection(newSection).then(function(data){
                console.log("section added successfully"+ data);
                sectionlist();
        })
        $scope.addsection="";

    };

       $scope.give=function(id){
        $scope.deleteId=id;
        console.log($scope.deleteId);
    }
   
     sectionlist();
     $scope.sectionDetails={};
     $scope.editsection={};
    //console.log("section controller");
    
  function sectionlist(){
 $scope.boundDate = new Date();

 //console.log($scope.boundDate);
    sectionFactory.sectionList().then(function(data){
            $scope.section_list=data;
         //   console.log( $scope.section_list);
                $scope.sectionDetails=data;
                $scope.totalsection=$scope.section_list.length;
        //  console.log($scope.sectionDetails);
          for(i=0;i<$scope.section_list.length;i++){
        };
   
        });


};



$scope.deleteSection=function(id){
    console.log("im in delete section");
    console.log(id);
       sectionFactory.deleteSection(id).then(function(data){

               console.log(data);
            }, function(error){

                console.log(error);
            });
            sectionlist();
    };
     $scope.editSection=function(id){
        for(i=0;i<$scope.sectionDetails.length;i++){
          //  console.log($scope.sectionDetails[i]._id);
            if($scope.sectionDetails[i]._id===id){
                //console.log("hi")
                $scope.editsection=$scope.sectionDetails[i];
               // $scope.edittask.section.name=$scope.taskDetails[i].section_name;
                 //console.log($scope.edittask.section)
            }
        }

    };


       $scope.updatesection = function(editsection){
       console.log(editsection);
        sectionFactory.updateSection(editsection).then(function(data){
         //   console.log("abc"+data);
        }, function(error){
            console.log(error);
        });
        sectionlist();
    };


   

  
    // console.log($scope.start);
    // console.log($scope.end);

})
// .filter('slice',function(){
//         return function(arr, start, end){
//           start = parseInt(start);
//           end=parseInt(end);
//             return arr.slice(start, end);
//         }
//     });
// // .filter('slice', function(start) {
//     return function(arr) {
//         start = parseInt(start, end);
//         return input.slice(start);
//     };
// });