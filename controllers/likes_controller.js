const Like=require('../models/like');
const Post =require('../models/post');
const Comment=require('../models/comment');

module.exports.toggleLike=async function(req,res){
    try{
        //Likes/togglt/id
        let likable;
        let deleted=false;
        if(req.query.type=='Post'){
            likable=await Post.findById(req.query.id).populate('likes');
        }else{
            likable=await  Comment.findById(req.query.id).populate('likes');
        }

        //check if like already exist
        let existingLike=await Like.findOne({
            likable: req.query.id,
            onModel: req.query.type,
            user: req.user._id
        });
        //if like already exist then delete it
        if(existingLike){
            likable.likes.pull(existingLike._id);
            likable.save();

            existingLike.remove();
            deleted=true;
        }else{
            //make a new like
            let newLike=await Like.create({
                user: req.user._id,
                likable: req.query.id,
                onModel: req.query.type
            });
            likable.likes.push(like._id);
            likable.save();
        }
        return res.json({
            message:"Request Sucessful",
            data:{
                deleted:deleted
            }
        })
    }catch(err){
        console.log(err);
        return res.json(500,{
            message: 'Internal Server Error'
        });
    }
}