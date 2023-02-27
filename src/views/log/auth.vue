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
                <!-- simple and clean code of log-in / sign-up (with policy confirmation) -->
                <input v-if="isLog" type="submit" value="Log In" />
                <input v-else type="submit" value="Sign Up" :disabled="!PolicyIsChecked"/>
            </form>
            <label for="checkbox" v-if="!isLog"> 
                    <input type="checkbox" name="checkbox" v-model="PolicyIsChecked">
                    <span>  this is a  <dfn> <abbr title="Just check the fucking box and go login">policy </abbr> </dfn> </span>
                </label>



        </section>
        <Teleport to="body">
            <div class="modal-btn">
            <span>Using <em>&lt;Teleport&gt;</em>  to 
                <button id="mdBtn" 
                @click="isOpen=true">
                Show Modal
            </button>
                 popup</span>
            
            </div>
            <div class="modal" v-if="isOpen">
                <Modal
                title="Title here"
                msg="Message here"
                @close="isOpen=false"
                />
            </div>
        </Teleport>






    </main>
</template>

<script setup>
import { ref, watch} from 'vue'
import { useStore } from 'vuex'
import  Modal from '../../components/Modal.vue'

const store = useStore();

const form_input = ref({});
const isLog = ref(true)
const isOpen = ref(false)
const PolicyIsChecked = ref(false)


watch(PolicyIsChecked, ()=>{
    console.log(PolicyIsChecked.value);
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
    opacity: 0.5;
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

form.login input:not([type="submit"]) {
    color: var(--text-color);
    border: 3px solid var(--primary-color);
    border-radius: 5px;
}

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

/* Modal style */
.modal-btn{
    position:absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#mdBtn{
    outline: none;
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    padding: 5px;
}
#mdBtn:active{
    color: aliceblue;
    background-color: var(--text-color);
}


.modal{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal > div{
    background-color: aliceblue;
    padding: 50px;
    border-radius: 10px;
}
</style>