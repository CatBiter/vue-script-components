<template>
    <div class="sideBar" :style="{ backgroundColor: variables.sideBarBackground, width: sidebarOpened?'200px':'64px' }">
        <div class="project">
            <!-- logo和项目名称 -->
        </div>
        <el-menu 
            v-if="sidebarOpened"
            class="custom-menu"
            :default-active="activeIndex.toString()" 
            :collapse="isCollapse" 
            :background-color="variables.sideBarBackground"
            :text-color="variables.sideBarColor" :unique-opened="true"
            :active-text-color="variables.sideBarColorActive" 
            :collapse-transition="true" mode="vertical"
            @select="handleSelect">
            <side-bar-item 
                v-for="(route, index) in constRoutes"
                :key="route.path + index"
                :item="route"
                :base-path="route.path"
            />
        </el-menu>
        <div v-if="!sidebarOpened">
            <div class="collapseItem" v-for="item in collapseList">
                <svg-icon class="navIcon" :icon-class="item.icon"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import SideBarItem from './SideBarItem.vue';
import useAppStore from '@/store/modules/app'
import { constRoutes } from '@/router'
import { useRouter } from 'vue-router';

const appStore = useAppStore()
const router = useRouter()
const isCollapse = ref(false)
const activeIndex = ref(1)

const handleSelect = (path) => {
    router.push(path)
}
const sidebarOpened = computed(() => {
    return appStore.sidebar.opened
})
const collapseList = constRoutes.map(item => {
    return {path: item.path, icon: item.meta.icon}
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.module';

.sideBar {
    min-width: 50px;
    width: 200px;
    height: calc(100vh - 24px);
    border-radius: 0 8px 8px 0;
    transition: width 0.2s ease-out;

    .scrollbar{
        height: calc(100vh - 24px);
    }
    .project {
        width: calc(100% - 32px);
        height: calc(56px - 3px);
        border-bottom: 3px solid $base-menu-splitLine;
        padding: 0 16px;
    }
    .collapseItem{
        width: 64px;
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;

        .navIcon{
            font-size: 24px;
            color: #898d99;
        }
    }
    
}
</style>