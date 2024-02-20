const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {

    try{
        const connection = await mongoose.connect(process.env.MONGO_URI); 

        if( !connection){
            console.log("connection failed with DB");
        }
        else{
            console.log("connection established with DB");
        }
    }
    catch(err){
        console.log("error connecting to Mongo db");
    }   
}

module.exports = {connectDB};