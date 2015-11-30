var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;



//schema for userlist
var user_list = new Schema({
  username:{type:String,required:true},
  user_password:{type:String,required:true},
  user_email:{type:String,required:true},
  user_role:{type:String},
  user_projectId:{type:String},
  user_location:{type:String}
});

//model for userlist
var UserListModel=mongoose.model('user_list',user_list);

//exporting model
exports.UserListModel=UserListModel;
