 var db=require('../models/auditphasemodel.js');

 exports.addSections=function(req, res){
   console.log("I am in  audit sections server  page");
   
   
   	if(req.session.username){
   		var section_details= new db.AuditPhaseModel();
  		section_details.Project_Id=req.body.projectId,
   		section_details.Auditor=req.body.auditor,
   		section_details.Admin=req.body.admin,
   		section_details.Sections=req.body.section,
		section_details.save(function(err, success){
			if(success){
				console.log("section added")
			}
			else{
				console.log(err);
			}
			
		});
		
	} 
  
	else{
		console.log("invalid user");
		res.redirect('/');
	}	
	
};

exports.getSections=function(req, res){
	console.log("Im in get audit sections server page ");
	var data = {};
	var id=req.body.id;
   	if(req.session.username){
		db.AuditPhaseModel.findOne({Project_Id:id},function(err, success){


			if(success){
				console.log("data coming from db sections list ");
               // console.log(success);
				data.sectionsList = success;

				//data.sectionsList.codeunit=success.Sections.codeunit;
				//data.sectionsList.pdp=success.Sections.pdp;
				//data.sectionsList.testing=success.sections.testing;

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
}
