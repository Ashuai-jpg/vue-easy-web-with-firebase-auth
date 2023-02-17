<template >
    <main class="login">
        <section class="forms" v-if="isLog">
            
            <form class="login" @submit.prevent="login" >
                <h2>Login</h2>
                <input type="email" placeholder="Email address" v-model="login_form.email" />
                <input type="password" placeholder="Password" v-model="login_form.password" />
                <input type="submit" value="Sign In" />
            </form>
            <button type="button" @click="swapLog" class="swap">Go Register</button>
            
        </section>
            
        <section class="forms" v-if="!isLog">
        
            <form class="login" @submit.prevent="register" >
                <h2>Register</h2>
                <input type="email" placeholder="Email address" v-model="register_form.email" />
                <input type="password" placeholder="Password" v-model="register_form.password" />
                <input type="submit" value="Sign Up" />
             
            </form>

            <button type="button" @click="log_register" class="swap">Go Login</button>
        </section>
        
           
            <!-- <div >
                <router-link to="/register" id="toRegister">Go Register </router-link>
            </div> -->

        
    </main>
</template>

<script setup>
// import { nextTick } from 'process';
import { ref ,computed} from 'vue'
import { useStore } from 'vuex'
const login_title = ref('Login')
const login_form = ref({});
const register_form = ref({});
const store = useStore();
const isLog = ref(true)



const log_register = ()=>{
    isLog.value = !isLog.value
    if (isLog) {
        login_title.value = 'Login'
    } else {
        login_title.value = 'Sign Up'
    }

}

const login = () => {
    store.dispatch('login', login_form.value);
}
const register = () => {
    store.dispatch('register', register_form.value);
}

</script>

<style scoped>


.forms , h2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items:center ;
    

}

form {
    padding: 8rem 1rem 1rem;
}


h2 {
    color: var(--primary-color);
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    min-width: 400px; /*  */
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color: inherit;
}


form.login input:not([type="submit"]) {
    color:  var(--text-color);
    border-bottom: 2px solid var(--primary-color-light);
}

form.login input[type="submit"],
.swap {
    border: none;
    background-color: var(--primary-color);
    color:var(--main-color);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
}

.swap{
    width: 150px; ;
}
</style>