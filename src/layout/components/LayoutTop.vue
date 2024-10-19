<template>
    <div class="left">
        <svg-icon :class="appStore.sidebar.opened?'defult':'defult shrink'" icon-class="shrink" @click="toggleSideBar"/>
        <breadcrumb />

    </div>
    <div class="right">

    </div>
</template>

<script setup>
import Breadcrumb from './Breadcrumb.vue';
import useAppStore from '@/store/modules/app'

const appStore = useAppStore();

const toggleSideBar = () => {
    appStore.toggleSideBar()
}
</script>

<style lang="scss" scoped>
.left{
    display: flex;

    .defult{
        font-size: 18px;
        cursor: pointer;
        margin-right: 12px;
        color: #6e6e6e;
    }
    .shrink{
        transform: rotate(180deg);
    }

    
}
</style>