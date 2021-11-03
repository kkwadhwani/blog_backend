const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
title:{
    type:String,
    unique:true,
    required:true
}, 
dec:{
    type:String,
    required:true
}, 
photo:{
    type:String,
    required:true
}, 
username:{
    type:String,
    required:true,
    
}, 
categories:{
    type:Array,
    required:true
}, 

}, 
{timestamps:true},
)

module.exports = mongoose.model('Post', PostSchema)