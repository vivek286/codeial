const nodeMailer =require('../config/nodemailer');



//this is another way of exporting a method
exports.newComment =(comment)=>{
    let htmlString =nodeMailer.renderTemplate({comment: comment},'/Comments/new_comments.ejs');

    nodeMailer.transporter.sendMail({
        from: 'solankivivek01@gmail.com',
        to: comment.user.email,
        subject : "new comment publish",
        html : htmlString
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
        return;
    }
    console.log('Mail sent',info);
    });
}