<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        
                       
                        My Profile <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: userid() !== null}">Log in</a>
                        <br>
                        <i v-if="userid() !== null">(Welcome {{state.users[userid()].name}})</i>
                        <br> 
                    </h5>
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <div class="card" >
                                <h5 class="card-header">
                                    My Goals
                                </h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" v-for= "g in state.myGoals" :key="g">{{g}}</li>
                                </ul>
                                <br>
                                <div class="smaller">
                                    <h5 class="card-title">Add Goal</h5>
                                        Goal: <input class="form-control" type="text" id="newGoal">
                                        <a @click.prevent="addGoal" class="btn btn-sm btn-primary">Add Goal</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card">
                                <h5 class="card-header">
                                    My Friends
                                </h5>
                                <ul class="list-group list-group-flush">
                                    <li v-for="m in friends" :key="m" class="list-group-item">{{m}}</li>
                                </ul>  
                                <br>
                                <div class="smaller">
                                    <h5 class="card-title">Add Friend</h5>
                                        Friend Name: <input class="form-control" type="text" id="friend">
                                        <a @click.prevent="addFriend" class="btn btn-sm btn-primary">Add Friend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
    li.list-group-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        img {
            width: 30px; height: 30px;
            margin-right: 5px;
        }
        h5 {
            flex-grow: 1;
        }
    }
    .smaller {
        margin: 10px;
    }
</style>

<script>
// @ is an alias to /src
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

export default {
    data(){
        return {
            state: {
                users: [],
                goals: [],
                friends: [],
            },        
        }
    },
        created(){
            setInterval(()=> this.refresh(), 1000);
        },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },

        userid: ()=> api.userid,

        login() {
            fb.FBLogin();
        },
        addGoal() {
            let userid = api.GetUserid;
            let newGoal = document.getElementById("newGoal").value;
            api.AddGoal(userid,newGoal);
        },
        addFriend() {
            let userid = api.GetUserid;
            let friend = document.getElementById("friend").value;
            api.AddFriend(userid,friend);
        }
    }
}
</script>