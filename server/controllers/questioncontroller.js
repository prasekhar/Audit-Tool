var db=require('../models/questionmodel.js');
exports.questionList=function(req,res){

	//console.log("questioncontroller");
	var data={};
	db.questionListModel.find(function(err,success){
		if(success){
			//console.log("data coming from questionlist db");
			data=success;
			res.json(data);
		}
		else{

			data.status=403;
			console.log("error in getting data from db");
			res.json(data);
		}
	})
};
exports.addQuestion=function(req,res){

	//console.log("iam in add question in server controller");
	var data=new db.questionListModel();
	console.log(data);
	data.technology=req.body.technology;
	data.question=req.body.question;
	data.answer=req.body.answer;
	//data.no=req.body.no;
//	console.log("dfsdfsdf"+data);
	data.save(function(err,success){
		if(success){
   		//	console.log("data added to table");
   			//console.log(success);
   			data=success;
   			res.json(data);
   		}
   		else{
   			data.status=403;
   			console.log("error in addquestion");
   			res.json(data);
   		}
	});

};
exports.addReview=function(req,res){

  //console.log("iam in addReview server controller");
  var data=new db.questionListModel();
  console.log(data);
  data.htmlpercent=req.body.htmlpercent;
  data.csspercent=req.body.csspercent;
  data.angularpercent=req.body.angularpercent;
  data.nodepercent=req.body.nodepercent;
  data.mongopercent=req.body.mongopercent;
};
exports.editQuestion=function(req,res){

      var data = {};
      var id=req.body.idno;
  //    console.log("edit question page");
  //    console.log(id);
       db.questionListModel.findOne({_id:id},function(err,success){

         if(success){

       //     console.log("required data is obtained for edditing from question db");
            data.status=201;
            data=success;
        //    console.log(data);
            res.json(data);
         }
         else{

            console.log("error in getting  userdata for editing from question db");
            res.json(data);
         }
      });

   };
   exports.updateQuestion=function(req,res){

   //	console.log(" I am in Update question at server controller");
  //	console.log(req.body);
  	var id=req.body._id;
  	console.log(id);
  	db.questionListModel.update({_id:id}, {"$set": {question:req.body.question}},function(err,data){
			console.log("data updated");
			res.json(data);
		});
   };
   exports.deleteQuestion=function(req,res){

    //console.log("iam in delete question of server ctrler");
    var id=req.params.id;
    db.questionListModel.remove({_id:id},function(err,success){

      if(success){
        console.log("question is deleted successfully");
      }
      else{
        console.log("error in deleting");
      }
    });
   };