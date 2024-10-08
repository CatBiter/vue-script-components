<template>
    <div class="app">
        <SideBar />
        <div class="main">
            <div class="top" :style="{ backgroundColor: variables.sideBarBackground }"></div>
            <router-view class="app-main"></router-view>
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
        min-width: 1372px;
        overflow: hidden;
        .top{
            height: 56px;
            margin: 0 12px;
            padding: 0 12px;
            border-radius: 8px;
        }
        .app-main{
            padding: 0 12px;
            position: relative;
            margin-top: 12px;
            height: calc(100vh - 92px);
            overflow: auto;
        }
    }
}
</style>