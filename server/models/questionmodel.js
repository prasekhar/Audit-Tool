var mongoose=require("mongoose");
//instantiating schema
var Schema=mongoose.Schema;
//schema for questionlist
var question_list=new Schema({
	
	technology:{type:String,required:true},
	question:{type:String,required:true},
	answer:{type:Boolean,required:true},
});
//creating a model
var questionListModel=mongoose.model('question_list',question_list);
//exporting a model
exports.questionListModel=questionListModel;