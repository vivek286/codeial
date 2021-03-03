const Post = require('../models/post');
const Comment=require('../models/comment');
module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');
    });
}
module.exports.destroy=(req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        //checking if one want to delete post is his/her own or not
        //.id means converting the object id into string
        if(post.user==req.user.id){
            post.remove();

            Comment.deleteMany({post: req.params.id},(err)=>{
                res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}