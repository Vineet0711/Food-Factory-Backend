const express=require('express');
const router= new express.Router();
const ApiFunctions=require('../controllers/ApiFunctions')

router.post("/user/message",ApiFunctions.messagePost);
router.post("/user/order",ApiFunctions.postOrder)

module.exports=router;