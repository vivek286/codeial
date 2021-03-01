const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const port = 8000;
 
const expresslayouts=require('express-ejs-layouts');
const db=require('./config/mongoose.js');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expresslayouts);
app.use(express.static('./assets'));
// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
