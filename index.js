const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.MONGO_USER;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
const DB_HOST = process.env.MONGO_HOST || 'mongo';
const DB_NAME = process.env.MONGO_DB || 'mydb';

const mongodbURL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}?authSource=${DB_USER}`;

mongoose.connect(mongodbURL)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("Cannot conect to MongoDB"));

//simple schema
const userSchema = new mongoose.Schema({
    name : String
});

const User = mongoose.model('User', userSchema);


//Endpoint 1 
app.get('/', (req, res) => {
    res.send('Home page \n Hello From Docker App with Express.js and MongoDB');
});

//Endpoint 2
app.get('/about', (req,res) => {
    res.send('This is about page. Explore');
});

app.get('/add', async (req, res) => {
   const user = new User({name : 'Aman bhai'});
   await user.save();
   res.send('User Added successfully');
});

//Endpoint 4
app.get('/users', async (req,res) =>{
   const users = await User.find();
   res.json(users);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});