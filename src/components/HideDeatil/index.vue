<template>
    <div class="detailContent" v-show="detailVisible">
        <div class="top">
            <span class="header1" @click="show">{{ props.title + tableHeight }}</span>
            <hide-target :name="'新页数据'" />
        </div>
        <div class="content" ref="tableContentRef">
            <el-table 
                :data="props.tableData" 
                style="width: 100%" 
                :height="tableHeight"
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
import { nextTick, onMounted, onUnmounted } from 'vue';
const appStore = useAppStore()
const props = defineProps({
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
const resizeObserver = new ResizeObserver(entries => {
    for(const entry of entries){
        nextTick(()=>{
            console.log(entry.target.offsetHeight)
            tableHeight.value = entry.target.offsetHeight
        })
    }
})

onMounted(()=>{
    resizeObserver.observe(tableContentRef.value)
})
onUnmounted(()=>{
    resizeObserver.unobserve(tableContentRef.value)
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