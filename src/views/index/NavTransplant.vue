<template>
    <div :class="{ test: isDark }"></div>
    <main :class="{ dark: isDark }">
        <nav class="sidebar " :class="{ close: isClose }">
            <header>
                <div class="image-text">
                    <span class="image">
                        <!--<img src="logo.png" alt="">-->
                    </span>

                    <RouterLink to="/" style="text-decoration: none;">
                        <div class="text logo-text">
                            <span class="name ">DDDD</span>
                        </div>
                    </RouterLink>
                </div>
                <el-icon class='bx bx-chevron-right toggle' :class="{ close: isClose }" @click="isClose = !isClose">
                    <ArrowRightBold />
                </el-icon>
                <!-- <i class='bx bx-chevron-right toggle' :class="{ close: isClose }" @click="{isClose =  !isClose; isOpen= !isOpen}"></i> -->
            </header>

            <div class="menu-bar">
                <div class="menu">

                    <li class="search-box">
                        <el-icon class="icon">
                            <Search />
                        </el-icon>
                        <input type="text" placeholder="Search...">
                    </li>

                    <ul class="menu-links">
                        <li class="nav-link">
                            <router-link to="/index/todolist">
                                <el-icon class="icon">
                                    <Tickets />
                                </el-icon>
                                <span class="text nav-text">Todo</span>
                            </router-link>
                        </li>

                        <li class="nav-link">
                            <RouterLink to="/index/githubsearch">
                                <el-icon class="icon">
                                    <DataAnalysis />
                                </el-icon>
                                <span class="text nav-text">Github</span>
                            </RouterLink>
                            <!-- <a href="#">
                                    
                                </a> -->
                        </li>

                        <li class="nav-link">
                            <a href="#">
                                <el-icon class="icon">
                                    <Bell />
                                </el-icon>
                                <span class="text nav-text">Notifications</span>
                            </a>
                        </li>

                        <li class="nav-link">
                            <a href="#">
                                <el-icon class="icon">
                                    <PieChart />
                                </el-icon>
                                <span class="text nav-text">Analytics</span>
                            </a>
                        </li>

                        <li class="nav-link">
                            <a href="#">
                                <el-icon class="icon">
                                    <Star />
                                </el-icon>
                                <span class="text nav-text">Likes</span>
                            </a>
                        </li>

                        <li class="nav-link">
                            <a href="#">
                                <el-icon class="icon">
                                    <Wallet />
                                </el-icon>
                                <span class="text nav-text">Wallets</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div class="bottom-content">
                    <li class="">
                        <a href="#" @click="$store.dispatch('logout')">
                            <el-icon class="icon">
                                <SwitchButton />
                            </el-icon>
                            <span class="text nav-text">Logout</span>
                        </a>
                    </li>

                    <li class="mode">
                        <div class="sun-moon">
                            <el-icon class="icon moon">
                                <Moon />
                            </el-icon>
                            <el-icon class="icon sun">
                                <Sunny />
                            </el-icon>
                        </div>
                        <span class="mode-text text">{{ isDark ? "Light mode" : "Dark mode" }}</span>

                        <div class="toggle-switch" @click="toggleDarkMode">
                            <span class="switch"></span>
                        </div>
                    </li>

                </div>
            </div>

        </nav>

        <section class="home">
            <div class="text">Simple Vue Web</div>
            <router-view></router-view>
        </section>

</main>
</template>


<script setup>
import { Search, DataAnalysis, Bell, PieChart, Star, Wallet, SwitchButton, Moon, Sunny, ArrowRightBold, Tickets } from '@element-plus/icons-vue'
import { ref } from 'vue';
const isClose = ref(false)
const isDark = ref(false)


const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('isDark', isDark.value);
}
let localIsDark = localStorage.getItem('isDark');
isDark.value = localIsDark !== null && localIsDark === 'true';

</script>

<style ></style>