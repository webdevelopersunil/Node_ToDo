// loda the express
const express = require('express');
const app = express();
const port = 8000; // Setting up the port


// Setting up the view template engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/', require('./routes/'));



app.listen(port, function(err){
    if(err){
        console.log(`Error during server running : ${err}`); //Interpolation Method
    }

    console.log(`Server running on port : ${port}`);
});