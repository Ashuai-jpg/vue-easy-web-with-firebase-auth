<template>
    <main>
        <section class="indexHome">
            <router-view class="mainContent"></router-view>
        </section>

    </main>

</template>



<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
// import { reactive, ref } from 'vue'



</script>

<style>
section .indexHome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    min-height: 90vh;
    min-width: calc(89vw + 11px);
    background: rgb(255, 66, 101);
    background: linear-gradient(90deg, rgba(255, 66, 101, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 66, 101, 1) 100%);
    background-size: cover;
    background-repeat: no-repeat;

}



.vid-content,
.map-content {
    display: inherit;
    flex-direction: column;
    align-items: center;
}

/* .Appreciate {


} */

h2.sup {
    margin-top: 5vh;
    background-color: rgb(245, 66, 101);
    width: fit-content;
    border-radius: 7px;
}
</style>


