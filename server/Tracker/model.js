const userData  = require('./userData');

class User{
    constructor(id, username, password){
        this.id = id;
        this.user = username;
        this.password = password;
        this.userGoals = [];
        this.breakfastFood = [];
        this.lunchFood = [];
        this.dinnerFood= [];
        this.userLunges =[];
        this.userSquats =[];
        this.userPushups =[];
        this.userSitups =[];
        this.userMiles =[];
        this.allowed = [];
    } 
}

class Track{
    constructor(){
        this.users = [];
    }

    addGoal(currGoal, currUser){
        this.accounts[currUser].userGoals.push(currGoal);
    }

    addBreakfast(currUser, foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium){
        //creates food object
        var newFood = [
            foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium
        ];
        //pushes object int breakfastFood
        this.accounts[currUser].breakfastFood.push(newFood);
    }

    addLunch(currUser, foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium){
        //creates food object
        var newFood = [
            foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium
        ];
        //pushes object int0 lunchFood
        this.accounts[currUser].lunchFood.push(newFood);
    }

    addDinner(currUser, foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium){
        //creates food object 
        var newFood = [
            foodName, calories, servingS, servingN, sugar, fat, protein, fiber, sodium
        ];
        //pushes object into dinnerFood
        this.accounts[currUser].dinnerFood.push(newFood);
    }

    addExercise(currUser, lunges, squats, pushups, situps, milesRan){
        //pushes lunges into user lunges array
        this.users[currUser].userLunges.push(lunges);
        //pushes squats into user squats array
        this.users[currUser].userSquats.push(squats);
        //pushes pushups into user pushups array
        this.users[currUser].userPushups.push(pushups);
        //pushes situps into situps array
        this.users[currUser].userSitups.push(situps);
        //pushes milesRan into miles array
        this.users[currUser].userMiles.push(milesRan);
    }

    givePrivacy(currUser, diffUser){
        //allows another user to access currUser's information
        this.users[currUser].allowed.push(diffUser);
    }
}


module.exports={
    Track, User
}