<template>
    <div class="mask" @click="handleMaskClick" v-show="isShow">
        <slot ></slot>
    </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore();
const isShow = computed(() => appStore.maskShow)

const handleMaskClick = (event) => {
    // 判断是否点击在插槽内容外
    // 这里可以通过 event.target 判断是否为 slot 的根元素
    if(event.target === event.currentTarget){
        appStore.changeMaskShow(false)
    }
}
</script>

<style lang="scss" scoped>
.mask{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>