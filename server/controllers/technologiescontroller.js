var db=require('../models/technologymodel.js');
exports.saveTechnology = function(req, res){
    //console.log(req.body.name +" "+req.body.revieved);  
//	console.log("I am in Save Project Server");
if(req.session.username){
	var technologies=new db.technologyModel();
	
	technologies.name = req.body.name;
	technologies.revieved=req.body.revieved;

	var data={};

	
	technologies.save(function(err, success){
         //console.log(success);
		if(success){
		//	console.log(" technology data Saved");
			//console.log(success);
			//req.session_state.username = success.email;
			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in saving technology try again");
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

exports.getTechnologies=function(req, res){
	//console.log("I am in technologies Retrival server page");
   var data = {};
   	if(req.session.username){
		db.technologyModel.find(function(err, success){

			if(success){
			//	console.log("data coming from db technologies ");
                
				data.technologyList = success;
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

exports.updateTechnology=function(req, res){
//	console.log("I am in technologies Updation server page");
	if(req.session.username){ 
	var technologies=new db.technologyModel();
	var data={};
	data.name = req.body.sname;
	data.id=req.body.id;
	//technologies.revieved=req.body.revieved;
  //   console.log(req.body.sname);
  //   console.log(req.body.id);
  //   console.log(data.id+" "+data.name);

	//db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})
	 db.technologyModel.update({_id:data.id}, {$set:{name:data.name}}, function(err, success){
        // console.log(success);
		if(success){
		//	console.log(" technology data updated");
			//console.log(success);
			//req.session_state.username = success.email;
			data.status = 201;
			data.project = success;
			res.json(data);
		}
		else{
            console.log("Error in saving technology try again");
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


exports.deleteTechnology=function(req, res){
	var data={};
//	console.log("I am in technologies Delete server page");
    if(req.session.username){
	var id=req.params.id;
	db.technologyModel.remove({_id:id},function(err, success){
      //console.log(success);
		if(success){
		//	console.log(" technology removed");
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
};

