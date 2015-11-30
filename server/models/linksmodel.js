var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//SuperAdmin Liks
var links= new Schema({
      link:{type:String},
      icon:{type:String},
      href:{type:String},
      role:{
      		super_admin:{type:Boolean},
      		admin:{type:Boolean},
      		auditor:{type:Boolean}
      }
});

//model for superadmin_links

var LinksModel=mongoose.model('links', links);

//export models
exports.LinksModel=LinksModel;