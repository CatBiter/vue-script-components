<template>
    <div class="main">
        <div class="test" :style="`height: ${height}px`" @click="add"></div>
        <hide-deatil 
            :title="detailTitle" 
            :tableData="tableData"
            :tableConfig="tableConfig" 
        />
    </div>
</template>

<script setup name="DeatilShow">
import HideDeatil from '@/components/HideDeatil'

const detailTitle = ref("详情标题头")

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        id: '123412313213',
        price: '1722',
        beizhu: '备注备注备注备注备注备注备注备注备注备注备注'
    },{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        id: '123412313213',
        price: '1722',
        beizhu: '备注备注备注备注备注备注备注备注备注备注备注'
    },{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        id: '123412313213',
        price: '1722',
        beizhu: '备注备注备注备注备注备注备注备注备注备注备注'
    },{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        id: '123412313213',
        price: '1722',
        beizhu: '备注备注备注备注备注备注备注备注备注备注备注'
    },{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        id: '123412313213',
        price: '1722',
        beizhu: '备注备注备注备注备注备注备注备注备注备注备注'
    },
]
const tableConfig = {
    defaultSort: { prop: 'date', order: 'descending' },
    tableDataConfig: [
        { prop: 'id', label: '订单ID', fixed: true, width: "180"},
        { prop: 'date', label: '日期', sortable: true, width: "180"},
        { prop: 'name', label: '名称', width: "180"},
        { prop: 'address', label: '地址', width: "280"},
        { prop: 'price', label: '金额', with: "100"},
        { prop: 'beizhu', label: '备注', width: "600"},
    ]
}

const height = ref(400)
const add = () => {
    height.value = 500
}
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: column;
    .test{
        background-color: #ffffff;
        border-radius: 6px;
        margin-bottom: 12px;
    }
}

</style>