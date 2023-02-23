<template >
    <main>

        <section class="forms">


            <form class="login" @submit.prevent="sub_value">
                <h2>Welcome </h2>
                <div class="switch-wrapper">
                   <a href="#" class="form-switcher" :class="isLog ? 'selected': 'unselected'" @click="isLog = true" >Log In</a><a href="#"
                        class="form-switcher" :class="!isLog ? 'selected': 'unselected'" @click="isLog = false" >Sign Up</a>
                </div>
                <input type="email" placeholder="you@email.com" v-model="form_input.email" />
                <input type="password" placeholder="Password" v-model="form_input.password" />
                <input v-if="isLog" type="submit" value="Log In" />
                <input v-else type="submit" value="Sign Up" :disabled="!isChecked"/>
            </form>
            <label for="checkbox" v-if="!isLog"> 
                    <input type="checkbox" name="checkbox" v-model="isChecked">
                    <span>this is a policy</span>
                </label>
           


        </section>






    </main>
</template>

<script setup>
import { ref, computed ,watch} from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const form_input = ref({});
const isLog = ref(true)
const isChecked = ref(false)



watch(isChecked, ()=>{
    console.log(isChecked.value);
})


const sub_value = () => {
    if (isLog.value) {
        console.log('login......');
        store.dispatch('login', form_input.value);
    } else {
        console.log('signing......');
        store.dispatch('register', form_input.value);
    }
}






</script>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


.forms,
h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;


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

input:not([type="checkbox"]) {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    min-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
    transition: background-color 0.4s ease-out; /* color transition when policy is checked */
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input[type="checkbox"]{
    color: var(--primary-color);
    border:none ;
}


input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color: inherit;
}

input:disabled{
    background-color:gray !important ;
    cursor:not-allowed !important;
}

/* form.login input:not([type="submit"]) {
    color: var(--text-color);
    border-bottom: 2px solid var(--primary-color-light);
} */

form.login input[type="submit"] {
    border: none;
    background-color: var(--primary-color);
    color: var(--main-color);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
}

/* switcher style */

.switch-wrapper {
    display: flex;
    flex-direction: row;
}


.form-switcher {
    border-bottom: 2px solid whitesmoke;
    text-align: center;
    width: 50%;
    margin-bottom: 2%;
}

a {
    cursor: default;
    text-decoration: none;
    color: var(--primary-color);
}

a.selected{
    
    border-bottom: 2px solid var(--primary-color);
}

a.unselected{
    cursor: pointer;
}
</style>