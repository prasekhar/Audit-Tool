var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

 //Schema for task_list
 var task_list=new Schema({
  task_name:{type:String},
  section_name:{type:String} 
});


// Define Models
var TaskListModel=mongoose.model('task_list', task_list);


// Export Models
exports.TaskListModel=TaskListModel;