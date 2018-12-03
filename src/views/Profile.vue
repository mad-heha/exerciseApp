<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        My Profile <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: userId() !== null}">Log in</a>
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
                                    <li v-for="g in myGoals" :key="g" class="list-group-item">{{g}}</li>
                                </ul>
                                <form id="new-goal" @submit.prevent="addGoal">
                                    <div> 
                                        <label for="goal">Add Goal</label>
                                        <input id="goal" v-model="newGoal">
                                        <input class="btn btn-sm btn-primary" type="submit" value="Submit">
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card">
                                <h5 class="card-header">
                                    My Friends
                                </h5>
                                <ul class="list-group list-group-flush">
                                    <li v-for="m in myFriends" :key="m" class="list-group-item">{{m}}</li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                    <pre>
                        {{$data}}
                    </pre>
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
            },
            myGoals: [],
            newGoal: null,
            myFriends: [],
            
        }
    },
        created(){
            setInterval(()=> this.refresh(), 5000);
        },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },

        userId: ()=> api.userId,

        login() {
            fb.FBLogin();
        },
        addGoal() {
            api.AddGoal(this.newGoal)
            .then(() => this.newGoal=null) 
        }
    }
}
</script>