const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);
const { isEmail, isAlphanumeric } = require('validator');


const User =   new Schema({
    email :{
        type:String,
        required:[true, "Please enter an email"],
        unique: true,
        lowercase:true,
        validate: [isEmail,"Email validation failed"], 
    },
    username :{
        type:String,
        required:[true, "Please enter a username"],
        minlength:[6,'User must be at least 6 characters long'],
        maxlength: 20,
        unique: true,
        // validate : [isAlphanumeric,"In username must be alphanumeric"], 
    } ,
    password: {

        type: String,
        required: [true, "Please enter a password"],
        minlength: [6,'Password must be at least 6 characters long'],
    },
    admin: {
        type:Boolean,
        default: false,
    }
  
},{
    timestamps: true,
    collection : 'user_db'
});

    


module.exports = mongoose.model('user_db', User )

