const nodemailer=require('nodemailer');
const pass=process.env.APP_PASS;

exports.sendInfoMail=(email,fName,message)=>{
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'tiwarivineet250@gmail.com',
            pass:pass
        }
    })
    const bccMailOption=
        {
            bcc:'tiwarivineet250@gmail.com',
            subject:'BCC: Got a message on Food-factory',
            text:message
        }
    const mailOptions={
        from:'tiwarivineet250@gmail.com',
        to:email,
        subject:"Confirmation from Food-Factory",
        text:`Hello ${fName}, 
        
We have received your message and We'll contact you soon.
        
Thanks!!`
    }
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(info.response)
        }
    })
    transporter.sendMail(bccMailOption,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(info.response)
        }
    })
}
exports.sendOrderMail=(fName,lName,mobile,email,location,items)=>{
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'tiwarivineet250@gmail.com',
            pass:pass
        }
    })
    const bccMailOption=
    {
        bcc:'tiwarivineet250@gmail.com',
        subject:'BCC: Got an order on Food-factory',
        text:`Hello ! 
We have an order from ${fName} ${lName}.
Mobile: ${mobile}

You have to deliver order on ${location}.`
    }
const mailOptions={
    from:'tiwarivineet250@gmail.com',
    to:email,
    subject:"Confirmation from Food-Factory",
    text:`Hello ${fName}, 
    
We have received your order and We'll deliver your order soon.
    
Thanks!!`
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(info.response)
    }
})
transporter.sendMail(bccMailOption,(error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(info.response)
    }
})
}