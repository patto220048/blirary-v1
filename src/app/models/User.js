const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const User = new Schema({
    username :{
        type:String,
        required:true,
        minlength:6,
        maxlength: 20,
        unique: true,
    } ,
    fullname :{
        type:String,
        minlength:6,
        maxlength: 20, 
       
    },
    email :{
        type:String,
        required:false,
        minlength:10,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
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

