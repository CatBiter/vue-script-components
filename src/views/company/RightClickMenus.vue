<template>
    <div class="">
        <el-table ref="selfTable" :data="tableData" style="width: 100%" @row-contextmenu="handleClickMenu">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" min-width="120">
                <template #default>
                <el-button link type="primary" size="small" @click="handleEdit">
                    修改
                </el-button>
                <el-button link type="primary" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>    
</template>

<script setup name="RightClickMenus">
import { openContextMenus } from '@/utils/menu/openContextMenus'
import { nextTick, ref } from 'vue';
const selfTable = ref(null);
let targetDom = null ;
// 模拟数据
const operationList = [
    [
        {name: '库存分布', path: '/inventory/1-1'},
        {name: '所属供应商', path: '/inventory/1-2'},
        {name: '显示所在货位', path: '/inventory/1-3'}
    ],
    [
        {name: '商品销售排行榜', path: '/inventory/2-1'},
        {name: '商品进销存报表', path: '/inventory/2-2'}
    ],
]
nextTick(()=>{
  targetDom = selfTable.value.$el.querySelector('.el-table__body-wrapper')
  const { openMenu, closeMenu, isShow } = openContextMenus(targetDom, operationList)
})
const handleEdit = () => {
  
}

const currentSelect = ref(0)
const handleClickMenu = (rowData) => {
  
}
const tableData = [
  {
    id: 1829302,
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: 1829302,
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    id: 1829302,
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: 1829302,
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>

<style scoped lang="scss">

</style>