var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//SuperAdmin Liks
var admin_links= new Schema({
      link:{type:String},
      icon:{type:String},
      href:{type:String},

});

//model for superadmin_links

var SuperAdminLinksModel=mongoose.model('admin_links', admin_links);

//export models
exports.SuperAdminLinksModel=SuperAdminLinksModel;
