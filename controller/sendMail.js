const nodemailer = require('nodemailer')




const sendMail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();


    //connecting with ethereal smtp server here
    let transporter = await nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        auth:{
            user: 'shanel.conn28@ethereal.email',
            pass: 'hbRZja8n43VRBKz8s8'
            // user: testAccount.user,//ethereal user
            // pass:testAccount.pass,//ethereal password
        },
    });

    let info = await transporter.sendMail({
        from:" 'Mr.Shanel' <shanel.conn28@ethereal.email> ",
        to:"kashyapy58@gmail.com",
        subject:"Hi Shivanshu",
        text:"Hello From Nodemailer",
        html:"<b>Hey there!</b>",
    })

    console.log("Message sent is",info.messageId);
    res.json(info)
}

module.exports = sendMail