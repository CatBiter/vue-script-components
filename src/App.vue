<template>
    <!-- 提供绝对定位的根节点 -->
    <div id="RootElementTarget" style="position: relative;"></div>
    <!-- 页面内容 -->
    <div class="bg" :style="{ backgroundColor: variables.backgroundColor }">
        <router-view />
    </div>
    <!-- 全局右侧显示隐藏测标签 -->
    <div class="detailShowFixed" v-show="!status" @click="changeDetailVisible">
        {{ label }}
    </div>
    <!-- 全局预览蒙层 -->
     <Mask>
        <img :src="Logo">
     </Mask>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import Mask from '@/components/Mask'
import useAppStore from '@/store/modules/app'
import Logo from '@/assets/aaa.png'
const appStore = useAppStore()
const status = ref(true)
const label = ref("")
watch(() => appStore.detailShow, (newValue, oldValue) => {
    status.value = newValue.status
    label.value = newValue.name
})
const changeDetailVisible = () => {
    status.value = !status.value
    const detailParams = {
        status: status.value,
        name: label.value
    }
    appStore.changeHideDetail(detailParams)
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: calc(100vh - 24px);
    padding: 12px 0;
}

.detailShowFixed {
    position: fixed;
    right: 0;
    bottom: 30px;
    padding: 6px;
    width: 20px;
    height: 120px;
    font-size: 14px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: #409eff;
    cursor: pointer;
    border-radius: 20px 6px 6px 20px;
}
</style>
