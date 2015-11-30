var db=require('../models/userlistmodel.js');

exports.login = function(req, res){

	//console.log("I am in login authentication page");

	var email = req.body.email;
	var password = req.body.password;
	var data = {};
	//console.log(req.body);
	db.UserListModel.findOne({user_email: email, user_password: password}, function(err, success){
         //console.log(success);
		if(success){
			console.log("Yes he is a member");
			//console.log(success);
			//console.log(req);
			req.session.username = success.user_email;
			//console.log(req.session.username);
			data.status = 201;
			success.user_password = undefined;
			data.user = success;
			res.json(data);
		}
		else{
            console.log("No he is not a  memeber");	
			data.status = 403;
			res.json(data);
		}
	});
};

exports.logout=function(req, res){

	var data = {};
	//console.log("logout session")
	if(req.session.username){

		//console.log(req.session.username);
		req.session.username='';
		data.status = 201;
		res.json(data);		
	}
	else{
		console.log("invalid user");
		data.status=403;
		res.json(data);
	}
};