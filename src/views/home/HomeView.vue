<template>
    <el-container class="layout-container-demo">


        <!-- header style -->
        <HomeViewHeader />

        <!-- aside style -->
        <el-container class="nav-content">

            <el-aside width="200px">
                <el-scrollbar>
                    <!-- <el-menu :default-openeds="['1', '3']"> -->
                    <el-menu :default-openeds="['1']">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <MoreFilled />
                                </el-icon>SFC Router

                            </template>
                            <el-menu-item-group>

                                <router-link to="/home/1-childone"><el-menu-item index="1-1">vid 1 <el-icon>
                                            <VideoPlay />
                                        </el-icon></el-menu-item></router-link>
                                <router-link to="/home/1-childtwo"><el-menu-item index="1-2">vid 2 <el-icon>
                                            <VideoPlay />
                                        </el-icon></el-menu-item></router-link>
                                <router-link to="/home/1-childthree"><el-menu-item index="1-3">vid 3 <el-icon>
                                            <VideoPlay />
                                        </el-icon></el-menu-item></router-link>
                            </el-menu-item-group>
                            <!-- <el-menu-item-group title="Group 2">
                                <el-menu-item index="1-3">Option 3</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>Option4</template>
                                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                            </el-sub-menu> -->
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <MapLocation />
                                </el-icon>Map Iframe
                            </template>
                            <el-menu-item-group>
                                <router-link to="/home/2-childthone"><el-menu-item index="2-1">Map1</el-menu-item></router-link>
                                <el-menu-item index="2-2">Option 2</el-menu-item>
                            </el-menu-item-group>
                            <!-- <el-menu-item-group title="Group 2">
                                <el-menu-item index="2-3">Option 3</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="2-4">
                                <template #title>Option 4</template>
                                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                            </el-sub-menu> -->
                        </el-sub-menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>

            <MainContent />
        </el-container>

    </el-container>

</template>

<script  setup>
import { MapLocation, Menu as  MoreFilled, VideoPlay } from '@element-plus/icons-vue'
import MainContent from '../../components/MainContent.vue'
import HomeViewHeader from './HomeViewHeader.vue'

// const item = {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
// }
// const tableData = ref(Array.from({ length: 5 }).fill(item))
</script>

<style scoped>
.layout-container-demo {
    display: block;
}

.nav-content {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: rgb(245, 66, 101);
    height: 90vh;
    min-width: 10vw;
}

.layout-container-demo .el-menu {
    border-right: none;

}

.layout-container-demo .el-main {
    padding: 0;

}
</style>
