var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//section_list
var section_list=new Schema({

 section_name:{type:String},
 detail:{type:String},
 created_date:{type:Date}  
})

//model for section_list
var SectionModel=mongoose.model('section_list', section_list);

//export model
exports.SectionModel=SectionModel;