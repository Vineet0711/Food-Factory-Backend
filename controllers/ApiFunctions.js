const messages=require('../models/ContactSchema');
const orders = require('../models/orderSchema');
const {sendInfoMail,sendOrderMail}=require('./sendEmail');

exports.messagePost = async (req,res)=>{
    const {fName,lName,mobile,email,message}=req.body;
    if(!fName || !lName || !mobile || !email || !message){
        res.status(401).json("All fields are required");
    }
    else{
        try {
            const newMessage=new messages({
                fName,lName,mobile,email,message
            })
            await newMessage.save();
            sendInfoMail(email,fName,message);
            res.status(201).json(newMessage);
        } catch (error) {
            console.log("Catch block error")
            res.status(401).json(error)
        }
    }
}
exports.postOrder=async (req,res)=>{
    const {fName,lName,mobile,email,location,items}=req.body;
    if(!items.length){
        res.status(401).json("Couldn't order !!!!!")
    }
    else{
        try {
            const newOrder=new orders({
                fName,
                lName,
                mobile,
                email,
                location,
                items
            })
            await newOrder.save();
            sendOrderMail(fName,lName,mobile,email,location,items)
            res.status(201).json(newOrder);
        } catch (error) {
            console.log("Catch block error")
            res.status(401).json(error)
        }
    }
}