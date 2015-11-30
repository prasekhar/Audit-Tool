var db=require('../models/auditdashmodel.js');

exports.auditDash=function(req, res){

   	var data = {};
   	//console.log("auditlist-page");
   if(req.session.username){
      
   	db.AuditDashModel.find(function(err,success){
   		//console.log(db.TaskListModel);
   		//console.log("auditlist");
   		//console.log(success);
   		if(success){
   			//console.log("data coming from db auditlist");
   			//console.log(success);
   			data=success;
   			res.json(data);
   		}
   		else{
   			data.status=403;
   			console.log("error in auditlist")
   			res.json(data);
   		}
   	});
   }
   else{
      console.log("invalid user");
      res.redirect('/');
   }
};