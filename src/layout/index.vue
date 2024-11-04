<template>
    <div class="app">
        <SideBar />
        <div class="main">
            <div class="top" :style="{ backgroundColor: variables.sideBarBackground }">
                <LayoutTop />
            </div>
            <div class="app-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import SideBar from './components/SideBar.vue';
import LayoutTop from './components/LayoutTop.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.module';

.app {
    display: flex;

    .main {
        flex: 1;
        overflow: hidden;

        .top {
            height: 56px;
            margin: 0 12px;
            padding: 0 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
        }

        .app-main {
            position: relative;
            margin: 12px;
            height: calc(100vh - 92px);
            overflow-x: auto;
        }
    }
}

:deep() {
    .el-menu {

        // 设置菜单项的激活样式
        .el-menu-item.is-active,
        .el-sub-menu.is-active .el-menu-item.is-active {
            position: relative;

            // 添加左侧的激活线
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 4px; // 线的宽度
                background-color: $base-memu-color-active; // 线的颜色
            }

            background-color: rgba($color: $base-memu-color-active, $alpha: 0.1);
        }

        .el-menu-item:hover,
        .el-sub-menu .el-sub-menu__title:hover,
        .el-sub-menu .el-menu-item:hover{
            background-color: $base-menu-background-hover; // Hover 背景颜色
        }
    }
}
</style>