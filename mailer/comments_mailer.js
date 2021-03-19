const nodeMailer =require('../config/nodemailer');



//this is another way of exporting a method
exports.newComment =(comment)=>{
    console.log('Inside new comment Mailer',comment);

    nodeMailer.transporter.sendMail({
        from: 'solankivivek01@gmail.com',
        to: comment.user.email,
        subject : "new comment publish",
        html : '<h1>Yup, your comment is now published ! </h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
        return;
    }
    console.log('Mail sent',info);
    });
}