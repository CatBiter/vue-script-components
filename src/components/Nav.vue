<template>
    <div class="navBox">
        <div v-for="item in navItem" :key="item">
            <svg-icon :name="navItem.icon"></svg-icon>
            {{ item.name }}
        </div>
        111
    </div>
</template>

<script setup>
let navItem = ref([
    {icon: 'home', text: '首页'},
    {icon: 'currency', text: '档案'},
    {icon: 'cube', text: '采购'},
    {icon: 'database', text: '库存'},
    {icon: 'peoples', text: '客户'},
    {icon: 'home', text: '财务'},
    {icon: 'chart', text: '分析'},
    {icon: 'setting', text: '设置'},
])
</script>

<style scoped>
.navBox{
    width: 75px;
    height: calc(100vh - 118px);
    background: linear-gradient(to bottom, #1f45af, #3599fb);
    border-top-right-radius: 60px;
    padding-top: 118px;
}
</style>