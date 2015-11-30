var db=require('../models/auditmenumodel.js');

exports.auditLinks=function(req, res){
  // console.log("I am in  auditor server links page");
   var data = {};
   	if(req.session.username){
		db.AuditLinksModel.find(function(err, success){

			if(success){
		//		console.log("data coming from db auditor server");
               //console.log(success);
				
				data.links = success;
				data.status = 201;
				res.json(data);
			}
			else{

				data.status = 403;
				res.json(data);
			}
		});
	}
	else{
		console.log("invalid user");
		res.redirect('/');
	}	
	
};
