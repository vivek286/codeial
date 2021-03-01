const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
//authentication user passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
function(email,password,done){
// find a user and establish the identity
User.findOne({email: email},(err,user)=>{
    if(err){
        console.log('error if finding user-----> passport');
        return done(err);
    }
    if(!user||user.password !=password){
        console.log('Invalid user name or password');
        return done(null,false);
    }
    return done(null,user);
});
}
));
//serialllize the user to decide which key is to be kept in cookies
passport.serializeUser((user,done)=>{done(null,user.id);});

//deseriallizing the user from the key in the
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err){
            console.log('error if finding user-----> passport');
            return done(err);
        }
        return done(null,user);
});
});
module.exports=passport;