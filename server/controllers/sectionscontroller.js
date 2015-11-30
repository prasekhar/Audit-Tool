var db=require('../models/sectionsmodel.js');

exports.sectionList=function(req,res){
   // console.log("section page");
  if(req.session.username){
    db.SectionModel.find(function(err,success){
      if(success){
    //    console.log("data coming from db sections");
    //    console.log(success);
        data=success;
        res.json(data);
      }
      else{
        data.status=403;
        console.log("error in sections");
        res.json(data);
      }
    });
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
}
  exports.deleteSection=function(req,res){
  //  console.log("delete Section");
  if(req.session.username){

    var id=req.params.id;
    db.SectionModel.remove({_id:id},function(err,success){
      if(success){
        //console.log(success);
      //  console.log("section is removed form sectionlist");

      }
      else
      {
        //console.log(err);
        console.log("error in deleting section");
      }

    });
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
}
   exports.updateSection=function(req,res){

  if(req.session.username){  
    //console.log(" I am in Update section");
  //  console.log(req.body);
    var id=req.body._id;
    db.SectionModel.update({_id:id}, {"$set": {section_name:req.body.section_name,detail:req.body.detail}},function(err,data){
    //  console.log("data updated");
      res.json(data);
    });
  }
  else{
    console.log("invalid user");
    res.redirect('/');
  }
};
  exports.addSection=function(req, res){
 // console.log("add section");
  //console.log(req);
  //console.log(req.body.section_name);
  if(req.session.username){
    var data=new db.SectionModel();
    data.section_id=req.body.s_id;
    data.section_name=req.body.s_name;
    data.detail=req.body.description;
    data.created_date=req.body.d;
   
    data.save(function(err,success){
      
      if(success){
       // console.log("data added to table"+success);
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
   exports.editSection=function(req,res){

      if(req.session.username){
      var data = {};
      var id=req.body.idno;
    //  console.log("edit user page");
    //  console.log(id);
       db.SectionMode.findOne({_id:id},function(err,success){

         if(success){

        //    console.log("required data is obtained for edditing from db");
            data=success;
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
