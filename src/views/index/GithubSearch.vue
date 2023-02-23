<template>
    <section>
        <div class="upwrap">

            <h3 class="title">Search Github Users</h3>
            <div class="searchbar">
                <div class="input-wrapper">
                    <input type="text" placeholder="Press enter after input" v-model="keyword" class="search input"
                        @keydown.enter="getUser">
                    <span  id="search-decor"></span>
                </div>&nbsp;
                <button @click="getUser" class="search button " >Search</button>
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
import { ref, reactive, onMounted } from 'vue'
import { searchUsers } from '../../utils/axios';



const keyword = ref('')
const res = ref({})
const state = reactive({
    users: [],
    count: 0
})
onMounted(()=>{
   state.users =  JSON.parse(localStorage.getItem('gitusers_info') || '')
})






function getUser() {
    searchUsers(keyword.value)
    .then(res => {
        state.users = res;
        localStorage.setItem('gitusers_info', JSON.stringify(res))
    })
    
}



</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color);
    transition: var(--tran-05);
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
    border-bottom: 2px solid var(--sidebar-color);
    box-shadow: 0 2px 2px var(--sidebar-color);
    margin: 5% 0 1% 0;
    background-color: var(--main-color);
    width: 100%;
}

.search {
    all: unset;
    font-size: larger;
}


.input-wrapper{
    display: flex;
    flex-direction: column;
}


/* underscore with hover transition */
#search-decor {
    margin-top: 0;
    height: 3px;
    width: 0%;
    background-color:  var(--primary-color);
    transition: all 0.3s ease-out;
}
.input-wrapper:hover  #search-decor
{
    width: 100%;
}
/*  */



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

img:hover {
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

.footer {
    height: 5%;
    width: 100%;
    text-align: center;
    text-shadow: 2px 2px 3px grey;
    position: fixed;
    bottom: 0;
    border-top: 2px solid var(--sidebar-color);
    box-shadow: 0 2px 2px var(--sidebar-color);
    background-color: var(--main-color);
    opacity: 0.8;
    transition: var(--tran-05);

}
</style>