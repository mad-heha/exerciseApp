const express = require('express');
const {Track, User} = require('./model');

var currTrack = new Track();
const app = express.Router();


app.get("/", function(req, res){
    res.send({...currTrack});
})
//Adds a new user account
app.post('/users', (req, res) =>{
    const user = currTrack.login(req.body.name, req.body.fbid, req.body.access_token);
    res.send(user);
})

//Retrieve user info
app.get('/users/:id', function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID)))
        res.send(currTrack.users[req.params.id]);
    else
        res.send("You don't have access to view this account.");  
})

//Add goal
app.post('/goals', function(req, res){
    currTrack.addGoal(req.params.id, req.body.newGoal)
    res.send("Added a goal")
})

//View goals
app.get('/goals/:id', function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID)))
        res.send(currTrack.users[req.params.id].name + "'s goals: \n" + currTrack.users[req.params.id].userGoals);
    else
        res.send("You don't have access to view this account.");   
})

//Add meal
app.post('/meals', function(req, res){
    var userID = req.header("userID");
    currTrack.addMeal(userID, req.body.foodName, req.body.calories);
    res.send("Added food to breakfast");
})

//View meal
app.get('/meals/:id', function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s Meals: " +  currTrack.users[req.params.id].meals);
    }
    else
        res.send("You don't have access to view this account.");
})

//Add Exercises
app.post('/workouts', function(req, res){
    var userID = req.header("userID");
    currTrack.addExercise(userID, req.body.pushups, req.body.situps, req.body.milesRan);
    res.send("Added workout");
})

//Display exercises
app.get('/workouts/:id', function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s Workout: " + currTrack.users[req.params.id].workouts)
    }
    else
        res.send("You don't have access to view this account.");
})

//Allows other user's to access currUser's information
app.get('/access', function(req, res){
    var userID = req.header("userID");
    currTrack.givePrivacy(req.body.diffUser, userID);
    res.send("Granted access!");
})

//Display friends
app.get('/access:id', function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s Friends: " +  currTrack.users[req.params.id].allowed);
    }
    else
        res.send("You don't have access to view this account.");
})

module.exports = app;