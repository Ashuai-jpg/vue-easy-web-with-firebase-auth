<template #="title">
    <el-container>
        <el-header class="el-header">
            <div class="header-title">
                <h1>
                    Welcome to my starter project
                </h1>
                    <a href="https://github.com/Ashuai-jpg" target="_blank">--My Page--</a>
                    <router-link to="../index" class="links">--Newpage-- </router-link>
            </div>
            <!-- avatar -->
            <div class="Avatar">
                <el-dropdown trigger="click">
                    <el-row class="demo-avatar demo-basic">
                        <el-col>
                            <div class="sub-title">Hi!</div>
                            <div class="demo-basic--circle">
                                <div class="block">
                                    <!-- <el-avatar shape="square" :size="50" :src="squareUrl" /> -->
                                    <el-avatar shape="square" :size="50" />
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="$store.dispatch('logout')">Log out</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <!-- avatar above -->


            </div>
        </el-header>
    </el-container>
</template>


<script setup>
// import { icon } from '@element-plus/icons-vue'




</script>



<style scoped>
.el-header {
    width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgb(245, 66, 101);
    color: #fff;
}

/* header items style */
.el-header h1 {
    position: relative;
    /* left: 50%; */
}

.el-header .Avatar {
    position: sticky;
    display: flex;
    left: 90%;
    cursor: pointer;
}

.example-showcase .el-dropdown+.el-dropdown {
    margin-left: 15px;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}




/* avatar img */
.demo-basic {
    text-align: center;
}

.demo-basic .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.demo-basic .block:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}

.demo-basic .block {
    flex: 1;
}

.demo-basic .el-col:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}







/* links style */
.links,a {
    color: inherit;
    text-decoration: none;
}
</style>