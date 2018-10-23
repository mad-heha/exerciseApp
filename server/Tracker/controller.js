const express = require('express');
const {Track, User} = require('./model');

var currTrack = new Track();
const app = express.Router();

//Adds a new user account
app.post("/users", (req, res) =>
{
    const newUser = new User(req.body.name, currTrack.users.length);
    currTrack.users.push(newUser);
    res.send("Your account has been created");
})

//Retrieve user info
app.get("/users/view/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID)))
        res.send(currTrack.users[req.params.id]);
    else
        res.send("You don't have access to view this account.");  
})

//Add goal
app.post("/users/view/myGoals", function(req, res){
    var userID = req.header("userID");
    currTrack.addGoal(req.body.currGoal, userID)
    res.send("Added a goal")
})

//View goals
app.get("/users/view/myGoals/:id", function(req, res){
    var userID = req.params.id;;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID)))
        res.send(currTrack.users[req.params.id].name + "'s goals: \n" + currTrack.users[req.params.id].userGoals);
    else
        res.send("You don't have access to view this account.");   
})

//Add food to breakfast
app.post("/users/view/meals/breakfast", function(req, res){
    var userID = req.header("userID");
    currTrack.addBreakfast(userID, req.body.foodName, req.body.calories, req.body.servingS, req.body.servingN, req.body.sugar, 
        req.body.fat, req.body.protein, req.body.fiber, req.body.sodium);
    res.send("Added food to breakfast");
})

//Add food to lunch
app.post("/users/view/meals/lunch", function(req, res){
    var userID = req.header("userID");
    currTrack.addLunch(userID, req.body.foodName, req.body.calories, req.body.servingS, req.body.servingN, req.body.sugar, 
        req.body.fat, req.body.protein, req.body.fiber, req.body.sodium);
    res.send("Added food to lunch");
})

//Add food to dinner
app.post("/users/view/meals/dinner", function(req, res){
    var userID = req.header("userID");
    currTrack.addDinner(userID, req.body.foodName, req.body.calories, req.body.servingS, req.body.servingN, req.body.sugar, 
        req.body.fat, req.body.protein, req.body.fiber, req.body.sodium);
    res.send("Added food to dinner");
})

//View breakfast food
app.get("/users/view/meals/breakfast/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s breakfast: " + currTrack.users[req.params.id].breakfastFood);
    }
    else
        res.send("You don't have access to view this account.");
})

//View lunch food
app.get("/users/view/meals/lunch/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s lunch: " + currTrack.users[req.params.id].lunchFood);
    }
    else
        res.send("You don't have access to view this account.");
})

//View dinner food
app.get("/users/view/meals/dinner/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send(currTrack.users[req.params.id].name + "'s dinner: " +  currTrack.users[req.params.id].dinnerFood);
    }
    else
        res.send("You don't have access to view this account.");
})

//Add Exercises
app.post("/users/view/myWorkouts", function(req, res){
    var userID = req.header("userID");
    currTrack.addExercise(userID, req.body.lunges, req.body.squats, req.body.pushups, req.body.situps, req.body.milesRan);
    res.send("Added workout");
})

//Display exercises
app.get("/users/view/myWorkouts/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        var exerciseList = "Lunges: " + currTrack.users[req.params.id].userLunges +
            "\n Squats: " + currTrack.users[req.params.id].userSquats +
            "\n Pushups: " + currTrack.users[req.params.id].userPushups +
            "\n Situps: " + currTrack.users[req.params.id].userSitups +
            "\n Miles ran: " + currTrack.users[req.params.id].userMiles;
        exerciseList 
        res.send(currTrack.users[req.params.id].name + "'s Workout: \n" + exerciseList)
    }
    else
        res.send("You don't have access to view this account.");
})

//Display lunges
app.get("/users/view/myWorkout/lunges/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send("Lunges: " + currTrack.users[req.params.id].userLunges)
    }
    else
        res.send("You don't have access to view this account.");
})

//Display squats
app.get("/users/view/myWorkout/squats/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send("Squats: " + currTrack.users[req.params.id].userSquats)
    }
    else
        res.send("You don't have access to view this account.");
})

//Display pushups
app.get("/users/view/myWorkout/pushups/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send("Pushups: " + currTrack.users[req.params.id].userPushups)
    }
    else
        res.send("You don't have access to view this account.");
})

//Display situps
app.get("/users/view/myWorkout/situps/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send("Situps: " + currTrack.users[req.params.id].userSitups)
    }
    else
        res.send("You don't have access to view this account.");
})

//Display miles
app.get("/users/view/myWorkout/milesRan/:id", function(req, res){
    var userID = req.params.id;
    if(currTrack.users[req.params.id].givePrivacy.includes(String (userID))){
        res.send("Miles ran: " + currTrack.users[req.params.id].userMiles)
    }
    else
        res.send("You don't have access to view this account.");
})

//Allows other user's to access currUser's information
app.get("/users/access", function(req, res){
    var currID = req.header("userID")
    currTrack.givePrivacy(req.body.diffUser, currID);
    res.send("Granted access!")
})

module.exports = app;