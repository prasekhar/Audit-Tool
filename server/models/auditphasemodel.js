var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//schema for audit_list
var audit_phase=new Schema({
  Project_Id:{type:String},
  Auditor:{type:String},
  Admin:{type:String},
  Sections:[],
  Sections_reviewed:[{
  responsibility:{type:String},
  Analysis:{type:String},
  Status:{type:String},
  Project_status:{type:String},
  Attachments:{type:String},
  Comments:{type:String},
  Rating:{type:String}
 }]
});

//model for audit_list
var AuditPhaseModel=mongoose.model('audit_phase', audit_phase);

//export model
exports.AuditPhaseModel=AuditPhaseModel;