<template>
    <section>
        <div class="upwrap">

            <h3 class="title">Search Github Users</h3>
            <div class="searchbar">
                <input type="text" placeholder="Press enter after input" v-model.lazy="keyword" class="search input"
                    @keydown.enter="searchUsers">&nbsp;
                <button @click="randomCol" class="search button "  :style="{ backgroundColor: ranCol }">Search</button>
                <!-- <button @keydown.enter="state.count++">{{state.count}}</button> -->
            </div>
        </div>

        <div class="row">
            <div class="card" v-for="user in state.users" :key="user.login">
                <a :href="user.html_url" target="_blank">
                    <img :src="user.avatar_url" :alt="user.login" style="width:100px">
                </a>
                <p class='card-text'> {{ user.login.slice(0, 8) }} </p>
            </div>
        </div>
        <footer class="footer">
            <h3>This is a footer</h3>
        </footer>
</section>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
import axios from 'axios';



const keyword = ref('')
const ranCol = ref('var(--btn-color)')
const store = useStore()
let number = ref(1)
const state = reactive({
    users: [],
    count: 0
})

// random color logic
function random(number){
    return Math.floor(Math.random()*(number+1))
}

function randomCol (){
     ranCol.value = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
}
// 



// search user logic
async function searchUsers() {
   await axios.get(`https://api.github.com/search/users?q=${keyword.value}`).then(
        response => {
            console.log('Request success', response.data.items)
            state.users = response.data.items
            store.commit('STORE_USERS', state.users.value)
        },
        error => {
            console.log('Bad request', response.data)
        }
    )
}












</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* title and search */

.title {
    text-shadow: 0 1px 3px var(--main-text);
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;
    color: var(--main-text);
}

.searchbar {
    display: inherit;
    align-self: center;
}

.upwrap {
    transition: var(--tran-05);
    display: inherit;
    position: sticky;
    top: 0;
    flex-direction: column;
    border-bottom: 2px solid  var( --sidebar-color);
    box-shadow: 0 2px 2px var( --sidebar-color) ;
    margin: 5% 0 1% 0 ;
    background-color: var(--main-color);
    width: 100%;
}

.search {
    all: unset;
    font-size: larger;
}

.input {
    color: var(--text-color);
    border-bottom: 3px solid var(--main-text);
}

.button {
    color: var(--btn-text);
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--btn-color);
}



/*  */
.row {
    display: inherit;
    flex-wrap: wrap;
    max-width: 1000px;
    justify-self: center;


}

img:hover{
    opacity: 0.5;
}
.card {
    display: inherit;
    flex-direction: column;
    width: 300px;
    height: 135px;
    align-items: center;
    justify-content: space-around;
    /* background-color: var(--primary-color-light); */

}

.footer{
    height: 5%;
    width: 100%;
    text-align: center;
    text-shadow: 2px 2px 3px grey;
    position: fixed;
    bottom: 0;
    border-top: 2px solid  var( --sidebar-color);
    box-shadow: 0 2px 2px var( --sidebar-color) ;
    background-color:  var(--main-color) ;
    opacity: 0.8;
    transition: var(--tran-05);
    
}
</style>