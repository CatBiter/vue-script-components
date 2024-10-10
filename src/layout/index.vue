<template>
    <div class="app">
        <SideBar />
        <div class="main">
            <div class="top" :style="{ backgroundColor: variables.sideBarBackground }"></div>
            <div class="app-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import SideBar from './components/SideBar.vue';
</script>

<style lang="scss" scoped>
.app{
    display: flex;

    .main{
        flex: 1;
        overflow: hidden;
        .top{
            height: 56px;
            margin: 0 12px;
            padding: 0 12px;
            border-radius: 8px;
        }
        .app-main{
            position: relative;
            margin: 12px;
            height: calc(100vh - 92px);
            overflow: auto;
        }
    }
}
</style>