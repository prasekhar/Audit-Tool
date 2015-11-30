var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;



// Projects Schema
var projects=new Schema({
    auditor: {type:String},
    client: {type:String},
    end_date: {type:String},
    projectname:{type:String},
    project_lead: {type:String},
    project_type: {type:String},
    projectid: {type:String, unique:true},
    start_date: {type:String},
    status: {type:String},
    customerid:{type:String},
    customername:{type:String},
    technologystack:{type:String},
    projectDescription:{type:String},
    projectDeliveryMethodology:{type:String},
    poc_attended:{type:String},
    project_resources: [{
        AllocationEndDate: {type:String},
        AllocationPrecentage: {type:String},
        AllocationStartDate: {type:String},
        Utilizationpercentage: {type:String},
        AssociateID:{type:String},
        AssociateName: {type:String},
        Gradename: {type:String},
        HCM_ID: {type:String}
    }],
    project_codereview:[
    {
        technology:{type:String},
        percentage:{type:String},
    }]

});

//project model
var projectModel=mongoose.model('projects', projects);

//export model
exports.projectModel=projectModel;
