<template>
    <section>
        <div class="upwrap">

            <h3 class="title">Search Github Users</h3>
            <div class="searchbar">
                <input type="text" placeholder="Search..." v-model.lazy="keyword" class="search input"
                    @keydown.enter="searchUsers">&nbsp;
                <button @click="searchUsers" class="search button ">Search</button>
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
</section>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
// import axios from 'axios'


const keyword = ref('')
const store = useStore()
const state = reactive({
    users: [],
    count: 0
})






// no vuex 
// function searchUsers() {
//     axios.get(`https://api.github.com/search/users?q=${keyword.value}`).then(
//         response => {
//             console.log('Request success', response.data.items)
//             state.users = response.data.items.slice(0, 25)
//         },
//         error => {
//             console.log('Bad request', response.data)
//         }
//     )
// }


//final version with vuex 
function searchUsers() {
    if (keyword) {
        store.dispatch('searchUsers', keyword)

        state.users = store.state.users
        const fechAgain = setInterval(() => {

            state.users = store.state.users
            const user_lower = store.state.users[0].login.toLowerCase()
            const key_lower = keyword.value.toLowerCase()
            console.log('ok?');
            if (key_lower === user_lower) {
                clearInterval(fechAgain)
            }
            
        }, 1000)
    }


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
    margin-bottom: 20px;
    font-size: 2rem;
    color: var(--main-text);
}

.searchbar {
    display: inherit;
    align-self: center;
}

.upwrap {
    display: inherit;
    flex-direction: column;
    margin-bottom: 10px;
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

.card {
    display: inherit;
    flex-direction: column;
    width: 180px;
    height: 135px;
    align-items: center;
    justify-content: space-around;
    /* background-color: var(--primary-color-light); */

}
</style>