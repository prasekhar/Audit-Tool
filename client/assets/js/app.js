var audit = angular.module('auditTool', ['ngTable', 'ngCookies','ui.router','angularUtils.directives.dirPagination'])
.run(function($state, $rootScope){
    $rootScope.$state=$state;
   
});

audit.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('Dashboard', {
      url: '/Dashboard',
      templateUrl: '../../modules/superadmin/dashboard.html',
      data:{title:"Cidex | Dashboard"}
    }) 
     .state('Projects',{
      url:'/Projects',
      templateUrl:'../../modules/projects/projects.html',
      data:{title:"Cidex | Projects"},
      controller:"questionController"
    })

      .state('bulkUpload',{
      url:'/bulkUpload',
      templateUrl:'../../modules/superadmin/bulkUpload.html'
    })
     .state('newProject', {
      url: '/newProject',
      templateUrl: '../../modules/projects/createProject.html',
      data:{title:"Cidex| New Project"}
    })
    .state('updateProject', {
      url: '/updateProject',
      templateUrl: '../../modules/projects/updateProject.html',
      data:{title:"Cidex | Edit Project"}
    })
     .state('editProject',{
      url:'/editProject',
      templateUrl:'../../modules/projects/updateProject.html',
      data:{title:"Cidex | Edit Project"}
    })
      
      .state('sadmindashboard',{
      url:'/sadmindashboard',
      templateUrl:'../../modules/superadmin/dashboard.html',
      data:{title:"Cidex |Super admin Dashboard"}
    })
      .state('admindashboard',{
      url:'/admindashboard',
      templateUrl:'../../modules/admin/admin-dashboard.html',
      data:{title:"Cidex | Admin Dashboard"}
    })
      .state('auditdashboard',{
      url:'/auditdashboard',
      templateUrl:'../../modules/auditor/audit-dash.html',
      data:{title:"Cidex | Auditor Dashboard"}
    })


      .state('Technologies',{
      url:'/Technologies',
      templateUrl:'../../modules/technologies/technologies.html',
      data:{title:"Cidex | Technologies"}
    })
      .state('Tasks', {
      url: '/Tasks',
      templateUrl: '../../modules/tasks/task.html',
      data:{title:"Cidex | Tasks"}
    })
      .state('Users', {
      url: '/Users',
      templateUrl: '../../modules/superadmin/user.html',
      data:{title:"Cidex | Users"}
    })
    .state('Admindashboard', {
      url: '/Admindashboard',
      templateUrl: '../../modules/superadmin/user.html',
      data:{title:"Cidex | Admin Dashboard"}
    })
    .state('Questionaries',{
      url: '/Questionaries',
      templateUrl: "../../modules/questionaries/question.html",
       data:{title:"Cidex | Questionaries"}
    })

   
     .state('Sections',{
      url:'/Sections',
      templateUrl:'../../modules/sections/sections.html',
      data:{title:"Cidex | Sections"}
    })
     .state('auditPhase',{
      url:'/auditPhase',
      templateUrl:'../../modules/auditphase/audit-phase.html',
      data:{title:"Cidex | Audit-phase"}
    })
     .state('auditAssign',{
      url:'/auditAssign',
      templateUrl:'../../modules/adminassign/audit-assign.html',
      data:{title:"Cidex | Audit-phase"}
     })
     
    .state('projectInfo',{
         url:'/:id',
         templateUrl:'../../modules/projects/projectInfo.html',
         data:{title:"Cidex | Project Info"}
        
      }) 
    

});
 