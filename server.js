//Requiring a Module Express in our Application
const express = require('express');

//Specifying a Port 
const port = 8000;

//Creating a New Express Application 
const app = express();

//Accessing Static Files and Folders Under ./assets folder in our directory structure
app.use(express.static('./assets'));

//Specifying a Route File
app.use('/', require('./routes/index'));

//Setting a View Engine - EJS
app.set('view engine', 'ejs');

//Setting a views folder, specifying where ejs engine will look for .ejs files
app.set('views', './views');

//Express Application is listening to port 8000 and if not , give us error
app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error Encountered", err);
    }
    else
    {
        console.log("Server is up and Running on Port 8000");
    }
})