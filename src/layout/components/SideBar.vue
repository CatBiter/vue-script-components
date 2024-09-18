<template>
    <div class="sideBar" :style="{ backgroundColor: variables.sideBarBackground }">
        <div class="project">
            <!-- logo和项目名称 -->
        </div>
        <el-menu 
            :default-active="activeIndex.toString()" :collapse="isCollapse" :background-color="variables.sideBarBackground"
            :text-color="variables.sideBarColor" :unique-opened="true"
            :active-text-color="variables.sideBarColorActive" :collapse-transition="true" mode="vertical"
            @select="handleSelect">
            <side-bar-item 
                v-for="(route, index) in constRoutes"
                :key="route.path + index"
                :item="route"
                :base-path="route.path"
            />
        </el-menu>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import SideBarItem from './SideBarItem.vue';
import { constRoutes } from '@/router'
import { useRouter } from 'vue-router';
const router = useRouter()
const isCollapse = ref(false)
const activeIndex = ref(1)

const handleSelect = (path) => {
    router.push(path)
}


</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.module';

.sideBar {
    min-width: 50px;
    width: 200px;
    height: calc(100vh - 24px);
    border-radius: 0 8px 8px 0;

    .scrollbar{
        height: calc(100vh - 24px);
    }
    .project {
        width: calc(100% - 32px);
        height: calc(56px - 3px);
        border-bottom: 3px solid $base-menu-splitLine;
        padding: 0 16px;
    }
}
</style>