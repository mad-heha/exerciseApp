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
    var userid = req.params.id;
    if(currTrack.users[userid].friends.includes(String (userid)))
        res.send(currTrack.users[userid]);
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
    var userid = req.params.id;
    if(currTrack.users[userid].friends.includes(String (userid)))
        res.send(currTrack.users[userid].name + "'s goals: \n" + currTrack.users[userid].userGoals);
    else
        res.send("You don't have access to view this account.");   
})

//Add meal
app.post('/meals', function(req, res){
    var userid = req.header("userid");
    currTrack.addMeal(userid, req.body.foodName, req.body.calories);
    res.send("Added food to breakfast");
})

//View meal
app.get('/meals/:id', function(req, res){
    var userid = req.params.id;
    if(currTrack.users[userid].friends.includes(String (userid))){
        res.send(currTrack.users[userid].name + "'s Meals: " +  currTrack.users[userid].meals);
    }
    else
        res.send("You don't have access to view this account.");
})

//Add Exercises
app.post('/workouts', function(req, res){
    var userid = req.header("userid");
    currTrack.addWorkout(userid, req.body.pushups, req.body.situps, req.body.milesRan);
    res.send("Added workout");
})

//Display exercises
app.get('/workouts/:id', function(req, res){
    var userid = req.params.id;
    if(currTrack.users[userid].friends.includes(String (userid))){
        res.send(currTrack.users[userid].name + "'s Workout: " + currTrack.users[userid].workouts)
    }
    else
        res.send("You don't have access to view this account.");
})

//Allows other user's to access currUser's information
app.get('/access', function(req, res){
    var userid = req.header("userid");
    currTrack.friends(req.body.diffUser, userid);
    res.send("Granted access!");
})

//Display friends
app.get('/access:id', function(req, res){
    var userid = req.params.id;
    if(currTrack.users[userid].friends.includes(String (userid))){
        res.send(currTrack.users[userid].name + "'s Friends: " +  currTrack.users[userid].allowed);
    }
    else
        res.send("You don't have access to view this account.");
})

module.exports = app;