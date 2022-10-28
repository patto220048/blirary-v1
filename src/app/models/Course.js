const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Course = new Schema({
    name: {type: String},
    description: {type: String},  
    image: {type: String,},
    slug: {type:String, slug : 'name', unique: true},
    level: {type:String,maxLength:255},
    createdAt : { type: Date, default: Date.now },
    updateAt : { type: Date, default: Date.now },
  });

module.exports = mongoose.model('cousre', Course); 

