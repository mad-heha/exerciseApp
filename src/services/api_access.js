const api_root = "http://localhost:80/Tracker";
export let userId = null;

export function GetState(){
    return myFetch(api_root + "/");
}
export function Login(name, fbid, access_token){
    return myFetch(api_root + `/users`, {name, fbid, access_token})
        .then(x=> {userId = x.id});
}
export function GetMyGoals(){
    return myFetch(api_root + `/goals/${userId}`);
}
export function GetMyMeals(){
    return myFetch(api_root + `/meals/${userId}`);
}
export function GetFriends(){
    return myFetch(api_root + `/access/${userId}`);
}
export function GetWorkouts(){
    return myFetch(api_root + `/workouts/${userId}`)
}
export function AddFriends(userId, friendId){
    return myFetch(api_root + `/access`, {userId, friendId})
}
export function AddMeal(userId, day, foodName, calories){
    return myFetch(api_root + `/meals`, {userId, day, foodName, calories})
}
export function AddGoal(userID, newGoal){
    return myFetch(api_root + `/goals`, {userID, newGoal})
}
export function AddWorkout(userI, pushups, situps, milesRan){
    return myFetch(api_root + `/workouts`, {userId, pushups, situps, milesRan})
}

  function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            userId: userId
        }
    };
    if(data){
        options = { 
            ...options,
            method: "POST",
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        };
    }
    return fetch(url, options)
    .then(response =>{
        return response.json() 
    }); //parses response to JSON
}