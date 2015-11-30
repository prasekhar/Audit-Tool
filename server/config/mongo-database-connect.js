var mongoose = require('mongoose');
var mongodbURL = 'mongodb://localhost/audit';
var mongodbOptions = {};

// MongoDB connection
mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {

    if(err){ 

        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    }else{

        console.log('Connection successful to: ' + mongodbURL);
    }
});









