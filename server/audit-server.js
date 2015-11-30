// Loading external modules
var express=require("express");
var bodyParser = require('body-parser');
var clientSessions = require("client-sessions");
// Instantiate express server
var app=express();

// Using modules for app
app.use(express.static('../client'));
app.use(bodyParser.json()); // Body parser to get the data from ajax calls & form data
app.use(bodyParser.urlencoded()); // Body parser to get the URL GET method data
app.use(clientSessions({
	cookieName:'session',
	secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // Secret Key
}));


app.get('/', function(req, res){

	res.sendfile('/client/index.html');
});

// Routes to define the call backs
var routes = {};
routes.database = require('./config/mongo-database-connect.js');
routes.users = require('./controllers/userscontroller.js');
routes.projects=require('./controllers/projectscontroller.js');
routes.technologies=require('./controllers/technologiescontroller.js');
routes.tasks = require('./controllers/taskcontroller.js');
routes.userlist = require('./controllers/userlistcontroller.js');
routes.menulinks = require('./controllers/linkscontroller.js');
routes.projectlist=require('./controllers/adminprojectscontroller.js');
routes.sections=require('./controllers/sectionscontroller.js');
routes.auditdash=require('./controllers/auditdashcontroller.js');
routes.questions=require('./controllers/questioncontroller.js');
routes.auditassign=require('./controllers/auditassigncontroller.js');
routes.auditphase=require('./controllers/auditphasecontroller.js');

// Restfull API to login
app.post('/login', routes.users.login);
app.get('/logout', routes.users.logout);
app.post('/Links/:role', routes.menulinks.Links);
app.post('/saveProject', routes.projects.saveProject);
app.get('/getProjects', routes.projects.getProjects);
app.post('/projectinfo/:id', routes.projects.projectinfo);
app.post('/projectdata', routes.projects.saveProject);
app.post('/updateSelectedProject', routes.projects.updateProject);
app.delete('/deleteProject/:id', routes.projects.deleteProject);
app.post('/saveTechnology', routes.technologies.saveTechnology);
app.get('/getTechnologies', routes.technologies.getTechnologies);
app.post('/updateTechnology', routes.technologies.updateTechnology);
app.delete('/deleteTechnology/:id', routes.technologies.deleteTechnology);
app.get('/userList',routes.userlist.userList);
app.post('/addUser',routes.userlist.addUser);
app.delete('/deleteUser/:id',routes.userlist.deleteUser);
app.post('/editUser',routes.userlist.editUser);
app.post('/updateUser',routes.userlist.updateUser);
app.get('/taskList', routes.tasks.myTaskList);
app.post('/addtask',routes.tasks.addTask);
app.delete('/deletetask/:id',routes.tasks.deleteTask);
app.post('/updatetask', routes.tasks.updateTask);
app.get('/projecttable',routes.projectlist.projectList);
app.delete('/deleteproject/:id',routes.projectlist.deleteProject);
app.post('/updateproject', routes.projectlist.updateProject);
app.get('/sectiontable',routes.sections.sectionList);
app.delete('/deletesection/:id',routes.sections.deleteSection);
app.post('/updatesection', routes.sections.updateSection);
app.post('/addsection',routes.sections.addSection);
app.get('/audit_dash',routes.auditdash.auditDash);
app.get('/questionList',routes.questions.questionList);
app.post('/addQuestion',routes.questions.addQuestion);
app.post('/editQuestion',routes.questions.editQuestion);
app.post('/updateQuestion',routes.questions.updateQuestion);
app.delete('/deleteQuestion/:id',routes.questions.deleteQuestion);
app.post('/code_review',routes.projects.addReview);
app.post('/insertAuditPhase', routes.auditphase.addSections);
app.post('/getSectionsData', routes.auditphase.getSections);


/*Run the server.*/
app.listen(3000, function(){
    console.log("Audit tool server running on port 3000");
});