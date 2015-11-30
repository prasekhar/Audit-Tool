var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;


//project_list
var project_list=new Schema({
 project_id:{type:String},
  project_name:{type:String},
  customer:{type:String},
  feedback:{type:String},
  start_date:{type:String}
  
})

var ProjectModel=mongoose.model('project_list', project_list);
exports.ProjectModel=ProjectModel;