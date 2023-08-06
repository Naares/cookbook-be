const Mongoose = require('mongoose');

const localDB = "mongodb://localhost:27017/role_auth";
const connectDB = async () =>{
    await Mongoose.connect(localDB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('mongoDB connected');
};

module.exports = connectDB