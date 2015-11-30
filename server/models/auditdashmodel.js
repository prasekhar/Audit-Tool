var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//schema for audit_list
var audit_list=new Schema({
  Project_Id:{type:Number},
  Project_Name:{type:String},
  Customer:{type:String},
  Feedback:{type:String} 
})

//model for audit_list
var AuditDashModel=mongoose.model('audit_list', audit_list);

//export model
exports.AuditDashModel=AuditDashModel;