<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        My Workouts
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for= "x in state.myWorkouts" :key="x.name">
                            {{x.pushups}} Push ups                                                                 
                            <br> 
                            {{x.situps}} Sit ups
                            <br> 
                            {{x.milesRan}} Miles Ran
                        </li>
                    </ul> 
                    <div class="smaller ap">
                        <h5 class="card-title">Add Workout</h5>
                        Push Ups: <input v-select :options="numbers" class="form-control" type="number" id="pushups"></v-select >
                        Sit Ups: <input v-select :options="numbers" class="form-control" type="number" id="situps"> 
                        Miles Ran: <input v-select :options="numbers" class="form-control" type="number" id="milesRan">
                        <a @click.prevent="addWorkout" class="btn btn-sm btn-primary">Add Workout</a>
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
        margin:10px;
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
                workouts: []
            },
            numbers:["5","10","15","20","25","30"]
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
    
        addWorkout() {
            let userid = api.GetUserid;
            let pushups = document.getElementById("pushups").value;
            let situps = document.getElementById("situps").value;
            let milesRan = document.getElementById("milesRan").value;
            api.AddWorkout(userid,pushups,situps,milesRan);    
        }
    }
}
</script>