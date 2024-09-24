<template>
    <div class="detailContent" v-show="detailVisible">
        <div class="top">
            <span class="header1">{{ props.title }}</span>
            <hide-target :name="props.name" />
        </div>
        <div class="content" ref="tableContentRef">
            <el-table 
                :data="props.tableData" 
                style="width: 100%" 
                :height="tableHeight.toString()"
                :default-sort="props.tableConfig.defaultSort">
                <el-table-column 
                    v-for="(item,index) in props.tableConfig.tableDataConfig" 
                    :key="index"
                    :prop="item.prop" 
                    :label="item.label" 
                    :sortable="item.sortable"
                    :fixed="item.fixed"
                    :width="item.width" 
                />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import HideTarget from '@/components/HideDeatil/HideTarget';
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tableData: {
        type: Array,
        required: true
    },
    tableConfig: {
        type: Object,
        required: true
    }
})

// 隐藏detail模块
const detailVisible = ref(true)
watch(() => appStore.detailShow, (newValue) => {
    detailVisible.value = newValue.status
})

const tableContentRef = ref(null)
const tableHeight = ref(0)
// 监听元素的尺寸变化了，触发重新计算表格的高度
const resizeObserver = new ResizeObserver(entries => {
    const rect = tableContentRef.value.getBoundingClientRect()
    tableHeight.value = window.innerHeight - rect.y - 22
})

onMounted(async () => {
    await nextTick(); // 等待 DOM 更新完成
    if(tableContentRef.value){
        resizeObserver.observe(tableContentRef.value)
    }
})
onBeforeUnmount(() => {
    if(resizeObserver && tableContentRef.value){
        resizeObserver.unobserve(tableContentRef.value)
        resizeObserver.disconnect()
    }
})
</script>

<style lang="scss" scoped>
.detailContent{
    flex: 1;
    background-color: #ffffff;
    height: 200px;
    padding: 10px 14px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .content{
        flex: 1;
    }
}
</style>