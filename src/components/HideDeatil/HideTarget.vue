<template>
    <div class="hide" @click="changeDetailVisible">
        <span>隐藏</span>
        <el-icon style="font-size: 16px;top: 1px;margin-left: 6px;"><icon-ep-hide /></el-icon>
    </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import { defineProps, onBeforeUnmount } from 'vue'
const appStore = useAppStore()
const props = defineProps({
    name: String
})
const detailVisible = ref(true)
watch(() => appStore.detailShow, (newValue, oldValue) => {
  detailVisible.value = newValue.status
})
const changeDetailVisible = () => {
    detailVisible.value = !detailVisible.value
    const detailParams = {
        status: detailVisible.value,
        name: props.name
    }
    appStore.changeHideDetail(detailParams)
}

onBeforeUnmount(() => {
    appStore.changeHideDetail({status: true, name: ''})
})

</script>

<style lang="scss" scoped>
.hide{
    font-size: 14px;
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .visibleIcon{
        font-size: 18px;
        margin-left: 4px;
        margin-top: 2px;
    }
}
</style>