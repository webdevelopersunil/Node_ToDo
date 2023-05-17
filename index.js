const express = require('express');
const app = express();
const port = 8000;








app.listen(port, function(err){
    if(err){
        console.log(`Error during server running : ${err}`); //Interpolation Method
    }

    console.log(`Server running on port : ${port}`);
});