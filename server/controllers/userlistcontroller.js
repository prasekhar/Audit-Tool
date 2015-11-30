var db=require('../models/userlistmodel.js');

exports.userList=function(req,res){

  var data = {};
 // console.log("userList-page");
  if(req.session.username){
   	db.UserListModel.find(function(err,success){
   		console.log("userlist");
   		//console.log(success);
   		if(success){
   	//		console.log("data coming from db userlist");
   			//console.log(success);
   			data.status=201;
   			data.users=success;
   			res.json(data);
   		}
   		else{
   			data.status=403;
   		console.log("error in userlist");
   			res.json(data);
   		}
   	});
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};
   exports.addUser=function(req,res){
      var data={};
    if(req.session.username){
      var user=new db.UserListModel();
      console.log("putting data into db");
      user.username=req.body.name;
      user.user_password=req.body.password;
      user.user_email=req.body.email;
      user.user_role=req.body.role;
      user.user_projectId=req.body.projectid;
      user.user_location=req.body.location;
      user.save(function(err,success){
       //  console.log(db.UserListModel);
       //  console.log("addUser");
         //console.log(success);
         if(success){
        //    console.log("data added to table");
         //   console.log(success);
            data.status=201;
            data.users=success;
            res.json(data);
         }
         else{
            data.status=403;
            console.log("error in addUser");
            res.json(data);
         }
      });
    }
    else{
    console.log("invalid user");
    res.redirect('/');
  }
};
   exports.editUser=function(req,res){

    var data = {};
    if(req.session.username){
      var id=req.body.idno;
      //console.log("edit user page");
      console.log(id);
       db.UserListModel.findOne({_id:id},function(err,success){

         if(success){

       //     console.log("required data is obtained for edditing from db");
            data.status=201;
            data.users=success;
            res.json(data);
         }
         else{

            console.log("error in getting  userdata for editing from db");
            res.json(data);
         }
      });
    }
    else{
    console.log("invalid user");
    res.redirect('/');
  }

};
   exports.deleteUser = function(req,res){
    var data={};
  //  console.log("deleteUser");
    if(req.session.username){
      var id=req.params.id;
      db.UserListModel.remove({_id:id},function(err,success){

         if(success){
             data.staus=201;
             data.users=success;
          //  console.log("user is removed from database");
         }
         else{
            data.status=403;
            console.log("error in deleting user");
         }
      });
    }
    else{
    console.log("invalid user");
    res.redirect('/');
  }
};
   exports.updateUser = function(req,res){
      var data={};
     // console.log("updateUser");
      if(req.session.username){
       var id=req.body._id;
       
       db.UserListModel.update({_id:id},{$set: {username:req.body.username,user_email:req.body.user_email,user_role:
       req.body.user_role,user_projectId:req.body.user_projectId,user_location:req.body.user_location}},
       function(err,success){
       if(success){
		//	console.log(" User data updated");
		
			data.status = 201;
			data.project = success;
			res.json(data);
		  }
		  else{
            console.log("Error in saving user try again");
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