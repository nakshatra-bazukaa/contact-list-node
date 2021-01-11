const express = require('express');
const port = 8000;

const app = express();

app.listen(port, err => {
    if(err) 
        console.log('Error encountered while running the server', err);
    else
        console.log('Server is running fine');
})