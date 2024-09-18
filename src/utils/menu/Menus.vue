<template>
    <div class="menusBox">
        <div v-for="part,index in operationList" :key="index">
            <div 
                class="operationItem no-select" 
                v-for="item in part" :key="part"
                @click="jumpTo(item.path)">{{ item.name }}</div>
            <div v-if="index !== operationList.length - 1" class="splitLine"></div>
        </div>
    </div>
</template>

<script setup>

const prop = defineProps({
    /** 
     * operationList：自定义菜单配置参数
     *  
     * 数据结构：[[{...},{...},...],[...],...]
     * 
     * 具体对象：
     * name: '库存分布'
     * path: '/inventory/distribution'
     * 
    */
    operationList: Array,
})
const jumpTo = (path) => {
    console.log("即将跳转到"+path)
}
</script>

<style lang="scss">
.menusBox{
    width: auto;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(0, 70, 130, .14);
    border-radius: 6px;
    padding: 6px 4px;
    z-index: 999;

    .operationItem{
        height: 24px;
        line-height: 24px;
        padding: 4px 8px;
        border-radius: 4px;
    }
    .operationItem:hover {
        cursor: default;
        background-color: #eff1f1;
        height: 24px;
    }
    .splitLine{
        width: auto;
        height: 1px;
        background-color: #BBBBBB;
        margin: 4px auto;
    }
}


/* 不可选中 */
.no-select {
  user-select: none; /* 标准浏览器 */
  -webkit-user-select: none; /* Safari 和 Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer 和 Edge */
}
</style>