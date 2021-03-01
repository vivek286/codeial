const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
// const passport=require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create-session',Passport.authenticate(
    'local',
    {failureRedirect:'/user/sign-in'},
),usersController.createSession);
router.post('/create', usersController.create);


module.exports = router;