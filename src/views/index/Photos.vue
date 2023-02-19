<template>
    <body>
        <div class="wrapper">

            <h1>Image gallery example</h1>
            <div class="full-img">
                <div class="overlay"  :style="{ opacity}">
                    <img class="displayed-img" :src="state.imageLinks[selectedImage]">
                    <button class="dark" @click="switchDarken">{{btnText}}</button>
                </div>
            </div>
    
            <div class="thumb-bar" v-for="(image, index) in state.imageLinks" :key="index" @click="showImage(index)">
                <img :src="image" />
    
            </div>
        </div>
    </body>
</template>

<script setup>

import { ref, reactive,watch,onMounted } from 'vue'

const selectedImage = ref(0);

const opacity = ref(1)
const btnText = ref('Faden')


onMounted(()=>{
    selectedImage.value = localStorage.getItem('selectedImage')
})



watch(selectedImage, newVal => {
	localStorage.setItem('selectedImage', newVal)
    console.log(newVal);

}, { deep: true })


const state = reactive({
    imageLinks: [
        '/images/pic1.jpg',
        '/images/pic2.jpg',
        '/images/pic3.jpg',
        '/images/pic4.jpg',
        '/images/pic5.jpg'],
    //    alts : {
    //   'pic1.jpg' : 'Closeup of a human eye',
    //   'pic2.jpg' : 'Rock that looks like a wave',
    //   'pic3.jpg' : 'Purple and white pansies',
    //   'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    //   'pic5.jpg' : 'Large moth on a leaf'
    // }
})

const showImage = (index) => {
    selectedImage.value = index

}

const switchDarken = () => {
    console.log(opacity);
    if (opacity.value == 1) {
        opacity.value = 0.5
        btnText.value = 'Strengthen'
    }else{
        opacity.value = 1
        btnText.value = 'Faden'
    }
   return
}

</script>





<style scoped>




h1 {
    font-family: helvetica, arial, sans-serif;
    text-align: center;
}

body {
    width: 640px;
    margin: 0 auto;
}

.full-img {
    position: relative;
    display: block;
    width: 640px;
    height: 480px;
}

.overlay {
   
    position: absolute;
    top: 0;
    left: 0;
    width: 640px;
    height: 480px;
    background-color: rgba(0, 0, 0, 0);
}

button {
    border: 0;
    background: rgba(150, 150, 150, 0.6);
    text-shadow: 1px 1px 1px white;
    border: 1px solid #999;
    position: absolute;
    cursor: pointer;
    top: 2px;
    left: 2px;
}

.thumb-bar img {
    display: block;
    width: 20%;
    float: left;
    cursor: pointer;
}
</style>