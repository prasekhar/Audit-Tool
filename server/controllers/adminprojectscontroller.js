 var db=require('../models/projectlistmodel.js');

 exports.projectList=function(req,res){
  //  console.log("projects page");
  if(req.session.username){

    db.ProjectModel.find(function(err,success){
      if(success){
        console.log("data coming from db projects");
       // console.log(success);
        data=success;
        res.json(data);
      }
      else{
        data.status=403;
        console.log("error in projects");
        res.json(data);
      }
    });
  }
  else{
   console.log("invalid user");
      res.redirect('/');
  }
}
  exports.deleteProject=function(req,res){
  //  console.log("delete Project");
    var id=req.params.id;
  if(req.session.username){
    db.ProjectModel.remove({_id:id},function(err,success){
      if(success){
        //console.log(success);
        console.log("project is removed form projectlist");

      }
      else
      {
        //console.log(err);
        console.log("error in deleting project");
      }

    });
  }
  else{
    console.log("invalid user");
      res.redirect('/');
  }
};
  exports.updateProject=function(req,res){

    //console.log("delete Task");
   // console.log(" I am in Update project");
   // console.log(req.body);
    var id=req.body._id;
    if(req.session.username){
    db.ProjectModel.update({_id:id}, {"$set": {project_id:req.body.project_id, project_name:req.body.project_name, customer:req.body.customer, feedback:req.body.feedback, start_date:req.body.start_date}},function(err,data){
      console.log("data updated");
      res.json(data);
    });
  }
  else{
    console.log("invalid user");
      res.redirect('/');
  }
};