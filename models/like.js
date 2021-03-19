const mongoose=require('mongoose');


const likeSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId
    },
    //this defines the object id of like object
    likeable: {
        type: mongoose.Schema.ObjectId,
        require: true,
        refPath: 'onModel'
    },
    //this field is used for defining the type of liked object it is a dynamic refrence
    onModel: {
        type: String,
        require: true,
        enum :['Post','Comment']
    }

},{
    timestamps: true
});


const Like=mongoose.model('Like',likeSchema);

module.exports=Like;