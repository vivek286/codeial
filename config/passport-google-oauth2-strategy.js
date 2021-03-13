const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');


passport.use(new googleStrategy({
clientID:"166700315055-mkql52pgrjjqn67aeikini1eq7d43a0r.apps.googleusercontent.com",
clientSecret: "LxeQCv3wGbMUGTc2NbOhdKQM",
callbackURL: "http://localhost:8000/users/auth/google/callback",
}
,
function(accessToken,refreshToken,profile,done){
User.findOne({email: profile.emails[0].value}).exec((err,user)=>{
    if(err){console.log('error in google strategy passport',err);return;}
    console.log(profile);
    if(user){
        return done(null,user);
    }else{
        User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString('hex'),
        },(err,user)=>{
            if(err){console.log('error in google strategy passport',err);return;}
            return done(null,user);
        })
    }
});
})
);
module.exports=passport;