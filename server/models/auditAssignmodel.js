var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//schema for audit_list
var audit_assign=new Schema({
  Project_Id:{type:Number},
  Auditor:{type:String},
  Admin:{type:String},
 Sections:[{type:String}]
})

//model for audit_list
var AuditAssignModel=mongoose.model('audit_assign', audit_assign);

//export model
exports.AuditAssignModel=AuditAssignModel;