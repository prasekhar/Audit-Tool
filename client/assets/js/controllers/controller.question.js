angular.module('auditTool').controller('questionController',function($scope,$rootScope,$cookieStore,  $http, $window,questionFactory,projectFactory){

      $scope.tabs = [{
            title: 'HTML',
            url: 'one.tpl.html'
        }, 
        {
            title: 'CSS',
            url: 'two.tpl.html'
        }, 
        {
            title: 'ANGULARJS',
            url: 'three.tpl.html'
        },
        {
          title: 'NODEJS',
          url: 'four.tpl.html'
        },
        {
          title: 'MONGODB',
          url: 'five.tpl.html'
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
                "name": "html"
              
            },
            {
                "id": 2,
                "name": "css"
                
            },
            {
                "id": 3,
                "name": "angularjs"
                
            },
            {
                "id": 4,
                "name": "nodejs"
                
            },
            {
                "id": 5,
                "name": "mongodb"
                
            }
            
    ];

    getUserData();
   
    function getUserData(){

        console.log("iam in question controller to get user login data");
        $scope.logindata = $cookieStore.get('userAccount');
        console.log($scope.logindata);
        $scope.role=$scope.logindata.user.user_role;
        console.log($scope.role);
        if($scope.role==="super_admin"||$scope.role==="admin")
        {
            $scope.showedit=true;
            $scope.showradio=false;
            console.log($scope.role);
        }
        else{
            $scope.showedit=false;
           $scope.showradio=true;
            console.log($scope.role);
        }
        
        questionFactory.questionList().then(function(data){
            
            $rootScope.questionlist=data;
            console.log(data);
            console.log($rootScope.questionlist);
            console.log(data.length);
            $scope.htmlList=[];
            $scope.cssList=[];
            $scope.angularList=[];
            $scope.mongodbList=[];
            $scope.nodejsList=[];
            for(var i=0;i<data.length;i++){

                console.log(data[i].technology);
                console.log(data[i].answer);
                if(data[i].technology==="html"){
                    $scope.htmlList.push(data[i]);
                    console.log($scope.htmlList)
                    
                }
                else if(data[i].technology==="css"){
                    $scope.cssList.push(data[i]);
                    console.log($scope.cssList)
                }
                else if(data[i].technology==="angularjs"){
                    $scope.angularList.push(data[i]);
                    console.log($scope.angularList);
                }
                else if(data[i].technology==="nodejs"){
                    $scope.nodejsList.push(data[i]);
                    console.log($scope.nodejsList);
                }
                else if(data[i].technology==="mongodb"){
                    $scope.mongodbList.push(data[i]);
                    console.log($scope.mongodbList);
                }
                else{
                    console.log("error");
                }
            }

            console.log($scope.mongodbList)
             console.log($rootScope.questionlist);
    console.log("hai");
    console.log($scope.htmlList);
    console.log($scope.htmlList.length);
    var htmlLen=$scope.htmlList.length;
    var cssLen=$scope.cssList.length;
    var nodejsLen=$scope.nodejsList.length;
    var angularLen=$scope.angularList.length;
    var mongodbLen=$scope.mongodbList.length;
    var htmlcount=0;
    var csscount=0;
    var mongodbcount=0;
    var nodecount=0;
    var angularcount=0;
    for(i=0;i<htmlLen;i++){

        if($scope.htmlList[i].answer===true){

            htmlcount++;
        }
    }
    console.log("yes in html list "+htmlcount);
    for(i=0;i<cssLen;i++){

        if($scope.cssList[i].answer===true){

            csscount++;
        }
    }
    console.log("yes in csslist "+csscount);
    for(i=0;i<angularLen;i++){

        if($scope.angularList[i].answer===true){

            angularcount++;
        }
    }
    console.log("yes in angularlist "+angularcount);
    for(i=0;i<nodejsLen;i++){

        if($scope.nodejsList[i].answer===true){

            nodecount++;
        }
    }
    console.log("yes in nodelist "+nodecount);
    for(i=0;i<mongodbLen;i++){

        if($scope.mongodbList[i].answer===true){

            mongodbcount++
        }
    }
    console.log("yes in mongolist "+mongodbcount);
    var totalcount=htmlcount+csscount+angularcount+nodecount+mongodbcount;
    console.log("totalcount is "+totalcount);
    $scope.htmlper=(htmlcount/htmlLen)*100
    console.log($scope.htmlper);
    $scope.cssper=(csscount/cssLen)*100
    console.log($scope.cssper);
    $scope.angularper=(angularcount/angularLen)*100
    console.log($scope.angularper);
    $scope.nodeper=(nodecount/nodejsLen)*100
    console.log($scope.nodeper);
    $scope.mongoper=(mongodbcount/mongodbLen)*100
    console.log($scope.mongoper);
   $rootScope.review=[];

   $rootScope.review.push({"technology":"html","percentage":$scope.htmlper});
   $rootScope.review.push({"technology":"css","percentage":$scope.cssper});
   $rootScope.review.push({"technology":"angularjs","percentage":$scope.angularper});
   $rootScope.review.push({"technology":"nodejs","percentage":$scope.nodeper});
   $rootScope.review.push({"technology":"mongodb","percentage":$scope.mongoper});
   console.log($rootScope.review.length);
   console.log($rootScope.review);
   questionFactory.codeReview=$rootScope.review;
  
        },function(error){

            console.log(error);
        });
        

    }
    $scope.getQues=function(quest){

        console.log(quest._id);
        $scope.questiondata={};
        $scope.questiondata.id=quest._id;
    }
    $scope.add_question=function(addques){

       var newQuestion={};
        newQuestion.question=addques.question;
        newQuestion.technology=addques.section;
        console.log(addques.radio);
        newQuestion.answer=addques.radio;
        console.log(newQuestion);
        questionFactory.addQuestion(newQuestion).then(function(data){
            console.log("question added successfully into database"+data);
            getUserData();
            $scope.addQ="";
        },function(error){
            console.log(error);
        })
    };
   $scope.editQues=function(id){


        console.log("iam in editques controller function"+id);
        questionFactory.editQues(id).then(function(data){

            console.log(data);
            $scope.editQ=data;
             console.log($scope.editQ);
        },function(error){
            console.log(error);
        });
   };
   $scope.updateQ=function(editQ){

    console.log(editQ);
    questionFactory.updateQues(editQ).then(function(data){
            console.log("hai this is for updating the question"+data);
            console.log(data);
        }, function(error){
            console.log(error);
        });
        getUserData();
   };
   $scope.removeQues=function(id){

    console.log(id);
    questionFactory.removeQues(id).then(function(data){
        console.log("hai this is from deleteques controller after deleteing"+data);
    },function(error){

        console.log(error);
    });
    getUserData();
   };
   
  /* projectFactory.getProjects().then(function(data){

    //console.log(data.projects.length);
    $rootScope.projectsdata=data.projects;
    var projectsDataLen=$rootScope.projectsdata.length;
    console.log(projectsDataLen);
    //console.log($rootScope.projectsdata);
    console.log($rootScope.projectsdata[0].technologystack);
    console.log($rootScope.sectionslist.length);
    $scope.question_technology=[];
    /*for(i=0;i<$rootScope.sectionslist.length;i++){

       $scope.question_technology[i]=$rootScope.sectionslist[i].name;
       console.log($scope.question_technology[i]);
    }*/
   /* for(i=0;i<1;i++){

        $scope.arr=$rootScope.projectsdata[i].technologystack.split(',');
        console.log($scope.arr);
        console.log($scope.review);
        console.log($scope.review[0]);
        //console.log($scope.arr.length);
        for(j=0;j<$scope.arr.length;j++){

            for(k=0;k<$scope.review.length;k++){
                   //console.log(j,k);
                if($scope.arr[j]===$scope.review[k].technology){
                    //console.log($scope.arr[j]);
                    //console.log($scope.review[k].technology);
                    $rootScope.projectsdata.project_codereview.push($scope.review[k]);
                    break;
                }
            }
        }
    }
   },function(error){

    console.log(error);
    });*/
    

   
   
});