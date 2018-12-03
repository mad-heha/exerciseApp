<template>
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header">
                        My Meals <a @click.prevent="addMeal" class="btn btn-sm btn-primary">Add Meal</a>
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="m in myMeals" :key="m" class="list-group-item">{{m}}
                            
                        </li>
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
            myMeals: [],
            newMeal: null,
            
        }
    },
      created(){
   
        },

    methods: {
        refresh(){
            api.GetState()
            .then(x => this.state = x)
        },

        userId: () => api.userId,

        addMeal(){
            api.AddMeal(this.newMeal)
            .then(() => this.newMeal = null) 
        }
        
    }
}
</script>