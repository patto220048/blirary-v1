const mongoose = require('mongoose')

async function connect () {

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("sever connet success");
    } catch (error){
        console.log("fail");


    }

};

module.exports =  {connect} ; 
    