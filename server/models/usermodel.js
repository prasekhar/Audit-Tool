var mongoose = require('mongoose');
// Instantiate Schema 
var Schema = mongoose.Schema;




// User schema
user_login= new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String, required: true}
})



//model for users
var userModel = mongoose.model('User', user_login);

// Export Models
exports.userModel = userModel;