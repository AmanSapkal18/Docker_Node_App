const express = require('express');
const app = express();

const PORT = 3000;

//Endpoint 1 
app.get('/', (req, res) => {
    res.send('Hello From Docker App Home page (using Express.js)');
});

//Endpoint 2
app.get('/about', (req,res) => {
    res.send('This is about page. Explore');
});

//Endpoint 3
app.get('/users', (req,res) =>{
    res.json([
        {id:1, name:'Aman'},
        {id:2, name:'Rahul'},
        {id:3, name:'Priya'}
    ]);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});