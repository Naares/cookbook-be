const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        minlength: 5,
        required: true
    },
    role:{
        type:String,
        default:"Basic",
        required:true
    },
    name:{
        type:String,
        required:false
    }
});

const User = Mongoose.model("user",UserSchema);
module.exports = User;