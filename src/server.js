const express = require('express');
const app = express();
const PORT = 5000;
const connectDB = require("./db");


connectDB();
const server = app.listen(PORT, () => console.log('server connected on port : ' + PORT))

process.on('unhandledRejection', err=>{
    console.log('unhlandledRejection: ' + err);
    server.close(() => process.exit(1));
});



