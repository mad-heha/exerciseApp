<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        My Meals 
                    </h5>
                    <ul class="list-group list-group-flush">
                       <li class="list-group-item" v-for= "x in state.myMeals" :key="x.name"><b>Food: {{x.foodName}}</b>
                                                                                                <br> {{x.calories}} Calories
                        </li>
                    </ul>
                    <div class="smaller">
                        <h5 class="card-title">Add Meal</h5>
                        Name of Food: <input class="form-control" type="text" id="foodName"> 
                        Calories: <input class="form-control" type="number" id="calories">
                        <a @click.prevent="addMeal" class="btn btn-sm btn-primary">Add Meal</a>
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
                meals: [],
            },
        }
    },
      created(){
            setInterval(()=> this.refresh(), 1000);
        },
    methods: {
        refresh(){
            api.GetState()
            .then(x => this.state = x)
        },

        userid: () => api.userid,

        addMeal(){
            let userid = api.GetUserid;
            let foodName = document.getElementById("foodName").value;
            let calories = document.getElementById("calories").value;
            api.AddMeal(userid,foodName,calories);
        }
        
    }
}
</script>