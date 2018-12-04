const api_root = "http://localhost:80/Tracker";
export let userid = null;

export function GetState(){
    return myFetch(api_root + "/");
}
export function Login(name, fbid, access_token){
    return myFetch(api_root + `/users`, {name, fbid, access_token})
        .then(x=> {userid = x.id});
}
export function GetUserid(){
    return userid;
}
export function GetMyGoals(){
    return myFetch(api_root + `/goals/${userid}`);
}
export function GetMyMeals(){
    return myFetch(api_root + `/meals/${userid}`);
}
export function GetFriends(){
    return myFetch(api_root + `/access/${userid}`);
}
export function GetWorkouts(){
    return myFetch(api_root + `/workouts/${userid}`)
}
export function AddFriend(userid, friendId){
    return myFetch(api_root + `/friends`, {userid, friendId})
}
export function AddMeal(userid, foodName, calories){
    return myFetch(api_root + `/meals`, {userid, foodName, calories})
}
export function AddGoal(userid, newGoal){
    return myFetch(api_root + `/goals`, {userid, newGoal})
}
export function AddWorkout(userid, pushups, situps, milesRan){
    return myFetch(api_root + `/workouts`, {userid, pushups, situps, milesRan})
}

  function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            userid: userid
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