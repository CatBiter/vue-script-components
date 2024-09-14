<template>
    <div class="sideBar" :style="{ backgroundColor: variables.sideBarBackground }">
        <div class="project">
            <!-- logo和项目名称 -->
        </div>
        <el-scrollbar>
            <el-menu :default-active="1" :collapse="isCollapse" :background-color="variables.sideBarBackground"
                :text-color="variables.sideBarColor" :unique-opened="true"
                :active-text-color="variables.sideBarColorActive" :collapse-transition="true" mode="vertical">
                <el-menu-item index="1">
                    <el-icon><icon-ep-menu /></el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'

const isCollapse = ref(false)
const sideBarConfig = ref([
    { title: '演练场', icon: '' }
])
</script>

<style lang="scss" scoped>
.sideBar {
    min-width: 50px;
    width: 200px;
    height: calc(100vh - 24px);
    border-radius: 0 8px 8px 0;

    .project {
        width: calc(100% - 32px);
        height: calc(56px - 3px);
        border-bottom: 3px solid #282c38;
        padding: 0 16px;
    }
}
</style>