var db=require('../models/projectmodel.js');
var count=0;
exports.saveProject = function(req, res){
   // console.log(req.body);  
    

	//console.log("I am in Save Project Server");
	if(req.session.username){
	var projects=new db.projectModel();
	
	// projects.name = req.body.projectname;

	// projects.customer = req.body.customer;
	// projects.project_type=req.body.projectType;
	// projects.projectid=req.body.projectid;
	// projects.pocs=req.body.pocs;
	// projects.auditor=req.body.auditor;
	// projects.status=req.body.status;
	// projects.technology=req.body.technology;
	// projects.description=req.body.description;
	// projects.project_delivery=req.body.delivery;
	// projects.status_updates=req.body.statusupdates;

 projects.auditor=req.body.auditor,
        projects.client=req.body.client,
        projects.end_date=req.body.end_date,
        projects.project_type=req.body.project_type,
        projects.projectid=req.body.projectid,
        projects.projectname=req.body.projectname,
        projects.start_date=req.body.start_date,
        projects.status=req.body.status,
        projects.customerid=req.body.customerid ,
        projects.customername=req.body.customername,
        projects.technologystack=req.body.technologystack,
        projects.projectDescription=req.body.projectDescription,
        projects.projectDeliveryMethodology=req.body.projectDeliveryMethodology,
        projects.project_resources=req.body.project_resources;
        projects.poc_attended=req.body.poc_attended;
	var data={};
     //console.log(projects);
	
	projects.save(function(err, success){
         //console.log(success);
		if(success){
		//	console.log(" Project data Saved");
			//console.log(success);
			//req.session_state.username = success.email;
			count++;
			//console.log(count);
			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in saving Project Data try again");
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

exports.getProjects= function(req, res){
     
	//console.log("I am in getProjects Server");

	if(req.session.username){

		var data={};

		db.projectModel.find(function(err,success){
   		
   		console.log("Projects list");
   		//console.log(success);
   		if(success){
   		//	console.log("data coming from db projects list");
   			//console.log(success);
   			data.status=201;
   			data.projects=success;
   			res.json(data);
   		}
   		else{
   			data.status=403;
   			console.log("error in retriving  projects list");
   			res.json(data);
   		}
   	});
  }
  else{
		console.log("invalid user");
		res.redirect('/');
	}
};

exports.updateProject=function(req,res){

//	console.log("I am in projects Updation server page");
	if(req.session.username){
	var id=req.params.id;
	var projects=new db.projectModel();
	var project_name = req.body.projectName;
	var customer = req.body.customer;
	var project_type=req.body.projectType;
	var pocs=req.body.pocs;
	var auditor=req.body.auditor;
	var status=req.body.status;
	var technology=req.body.technology;
	var description=req.body.description;
	var project_delivery=req.body.delivery;
	var status_updates=req.body.statusupdates;


	
	var data={};
 
	 db.projectModel.update({_id:id}, {$set:{project_name:project_name, customer: customer, project_type:project_type,
      pocs:pocs, auditor:auditor, status:status, technology:technology, description:description, 
      project_delivery:project_delivery, status_updates:status_updates}},

      function(err, success){
        console.log(success);
		if(success){
		//	console.log(" Projects data updated");

			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in Updating Project try again");
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

exports.deleteProject=function(req, res)
{
	if(req.session.username){
	var data={};
//	console.log("Im in delete project server page");
	var id=req.params.id;

	db.projectModel.remove({_id:id},function(err, success){
      //console.log(success);
		if(success){
	//		console.log("Project removed");
			//console.log(success);
			//req.session_state.username = success.email;
			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in deleting technology try again");
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
exports.projectinfo=function(req, res)
{
	if(req.session.username){
	var data={};
//	console.log("im in project info server page"+ req);
	var id=req.params.id;
	console.log(id);
	db.projectModel.find({_id:id},function(err, success){
      //console.log(success);
		if(success){
			console.log("projectinfo");
		//	console.log(success);
			//req.session_state.username = success.email;
			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in deleting technology try again");
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
exports.addReview=function(req,res){

	var data={};
	var review=new db.projectModel();
	id=req.body.code_id;
	//review.project_codereview=req.body.percent;
	db.projectModel.update({_id:id}, {$set:{project_codereview:req.body.percent}},function(err,success){
		if(success){
		//	console.log("data added");
			
			db.projectModel.find({_id:id},function(err, success){

				if(success){

			//	console.log(success);
				data=success.project_codereview;
				res.json(success);
				}

			})
		}
		else{
			console.log("failed");
		}
	})
}
