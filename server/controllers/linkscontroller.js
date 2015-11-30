var db=require('../models/linksmodel.js');

exports.Links=function(req, res){
   //console.log("I am in super server links page");
   if(req.session.username){
   var data = {};
   var role=req.params.role;
   var query = {};
   var field = "role."+role;
   operator = true;
   query[field] = operator;
	
		db.LinksModel.find(query,function(err, success){

			if(success){
			//	console.log("data coming from db Links");
               // console.log(success);
				data.links = success;
				data.status = 201;
				res.json(data);
			}
			else{
				console.log("no data");
				data.status = 403;
				res.json(data);
			}
		});	
	}	
	
};


