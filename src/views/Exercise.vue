<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        My Workouts
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="e in myExercises" :key="e" class="list-group-item">{{e}}</li>
                        <!-- <a @click.prevent="addWorkout" class="btn btn-sm btn-primary">Add Workout</a> -->
                    </ul> 
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
//let loopTimer = null;

export default {
    data(){
        return {
            state: {
                users: [],
            },
            myExercises: [],
            newWorkout: null
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },

        userId: ()=> api.userId,
    
        //addWorkout() {
          //  api.Add???????????????????(this.newWorkout)
            //.then(() => this.newWorkout=null)         
        //}
    }
}
</script>