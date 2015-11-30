var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;

//Technologies Schema
var technologies=new Schema({
    name:{type:String, required:true, unique:true},
    revieved:{type:Boolean, default:false},
});


//model for technology
var technologyModel=mongoose.model('technologies', technologies);

//export model
exports.technologyModel=technologyModel;
