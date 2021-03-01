module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}
module.exports.signUp = function(req,res){
    res.render('user_sign_up',{
        title: "codial Sign Up"
    });
};
module.exports.signIn =(req,res) => {
    res.render('user_sign_in',{
        title: "codial Sign In"
    });
};
//get the sign up data
module.exports.create=(req,res) =>{
    //todo
};
//sign in and create session for user
module.exports.create=(req,res)=>{
    //todo
};