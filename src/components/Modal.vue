<template>
    <div class="modal-content">
        <h2>{{ dfp.msg }}</h2>
        <p>shabi</p>
        <p>{{ dfp.title }}</p>
        <button @click="$emit('close')">Close Modal&times;</button>

    </div>


</template>


<script setup>

import { defineProps } from 'vue';


const dfp = defineProps({
    title: String,
    msg:String
})

defineEmits("close")
setTimeout(() => {
    console.log(`Title from parent: ${dfp.title} \nmsg from parent: ${dfp.msg}`);
}, 3000);

</script>



<style scoped>

.modal-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button{
    all: initial;
    text-align: center;
    background-color: var(--main-color);
    margin-top: 5%;
    padding: 5%;
    border-radius: 5%;
}
button:active{
    background-color: var(--primary-color);
    color: aliceblue;
}


</style>