var db=require('../models/taskmodel.js');
//console.log(db);

exports.addTask=function(req, res){
	//console.log("add task");
	//console.log(req);
  if(req.session.username){
  //  console.log("this is devi "+req.session.username)
   	var data=new db.TaskListModel();
   	data.task_name=req.body.tname;
   	data.section_name=req.body.section;
   	data.save(function(err,success){
   		
   		if(success){
   	//		console.log("data added to table");
   			//console.log(success);
   			data=success;
   			res.json(data);
   		}
   		else{
   			data.status=403;
   			console.log("error in addtask");
   			res.json(data);
   		}
   	});
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};

  exports.deleteTask=function(req,res){
  	//console.log("delete Task");
  if(req.session.username){
  	var id=req.params.id;
  	db.TaskListModel.remove({_id:id},function(err,success){
  		if(success){
  			//console.log(success);
  			console.log("task is removed form tasklist");

  		}
  		else
  		{
  			//console.log(err);
  			console.log("error in delete task");
  		}

  	});
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};

  exports.updateTask=function(req,res){

  	//console.log("delete Task");
  	console.log(" I am in Update Task");
  if(req.session.username){

  	console.log(req.body);
  	var id=req.body._id;
  	db.TaskListModel.update({_id:id}, {"$set": {task_name:req.body.task_name, section_name:req.body.section_name}},function(err,data){
			console.log("data updated");
			res.json(data);
		});
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};



  exports.myTaskList = function(req, res){

    console.log('tasklistmodel');
    var data = {};
    console.log("tasklist-page");
  if(req.session.username){
    db.TaskListModel.find(function(err,success){
      if(success){
        console.log("data coming from db tasklist");
        //console.log(success);
        data=success;
        res.json(data);
      }
      else{
        data.status=403;
        console.log("error in tasklist")
        res.json(data);
      }
    });
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};