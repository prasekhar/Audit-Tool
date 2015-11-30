var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//Auditor Links
var audit_links= new Schema({
      link:{type:String},
      icon:{type:String},
      href:{type:String},
});


//model for auditlinks
var AuditLinksModel=mongoose.model('audit_links', audit_links);

//export model
exports.AuditLinksModel=AuditLinksModel;