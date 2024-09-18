<template>
    <!-- 提供绝对定位的根节点 -->
    <div id="RootElementTarget" style="position: relative;"></div>
    <!-- 页面内容 -->
    <div class="bg" :style="{ backgroundColor: variables.backgroundColor}">
        <router-view/>
    </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: calc(100vh - 24px);
    padding: 12px 0;
}
</style>
