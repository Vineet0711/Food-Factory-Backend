const mongoose=require('mongoose');
const { schema } = require('./ContactSchema');

const orderSchema=new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    }
})
const orders=mongoose.model('orders',orderSchema);
module.exports=orders;