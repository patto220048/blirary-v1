const mongoose = require('mongoose')

async function connect () {

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("sever connet success");
    } catch (err){

        console.log(err);


    }

};

module.exports =  {connect} ; 
    