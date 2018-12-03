class User{
    constructor(name, id, fbid){
        this.id = id;
        this.name = name;
        this.fbid = fbid;
        this.goals = [];
        this.meals = []; 
        this.workouts = [];
        this.allowed = [String(id)];
    } 
}

class Track{
    constructor(){
        this.users = [];
    }

    login(name, fbid, access_token){
        let user = this.users.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, this.users.length, fbid);
            this.users.push(user);
        }
        user.access_token = access_token;
        return user;
    }

    addGoal(user, goal){
        this.users[user].goals.push(goal);
    }

    addMeal(user, foodName, calories){
        //creates food object
        var newFood = [
            foodName, calories
        ];
        //pushes object into meals
        this.users[user].meals.push(newFood);
    }

    addWorkout(user, pushups, situps, milesRan){
        //pushes lunges into user lunges array
        var newWorkout = [
            pushups, situps, milesRan
        ];
        //pushes object into workouts
        this.users[user].workouts.push(newWorkout);
    }

    givePrivacy(user, friend){
        //allows another user to access User's information
        this.users[user].allowed.push(friend);
    }
}


module.exports={
    Track, User
}