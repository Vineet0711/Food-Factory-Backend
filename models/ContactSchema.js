const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    fName:{
        type:String,
        required:true,
        trime:true
    },
    lName:{
        type:String,
        required:true,
        trime:true
    },
    mobile:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        trime:true
    },
    message:{
        type:String,
        required:true,
        maxlength:300
    }
})

const messages=mongoose.model('messages',messageSchema);

module.exports=messages;