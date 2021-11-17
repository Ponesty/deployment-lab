//getting express into file
const express = require('express');

//getting path into file
const path = require('path');

//express is a function. assigning it to app.
const app = express();

app.get('/', (req,res) =>{
    //sendFile is sending and absolute file path
    //path.join is providing the absolute file.
    //path.join(current location, file above me)
    res.sendFile(path.join(__dirname, '../index.html'));

})




// assigns port to the port from heroku. If not then 4005
const port = process.env.PORT || 4005;

//Letting us know which port we chillin on
app.listen(port, ()=>{
    console.log(`My app is chillin on port number ${port}`);
});