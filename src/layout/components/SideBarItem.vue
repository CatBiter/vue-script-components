<template>
    <template v-if="hasOneChild(item.children, item)">
        <el-menu-item :index="props.basePath + '/' + onlyOneChild.path">
            <template #title>{{ onlyOneChild.meta.title }}</template>
        </el-menu-item>
    </template>

    <el-sub-menu v-else :index="item.path" teleported>
        <template v-if="item.meta" #title>
            <span class="menu-title">{{ item.meta.title }}</span>
        </template>

        <side-bar-item 
            v-for="(child, index) in item.children"
            :key="child.path + index"
            :item="child"
            :base-path="props.basePath"
        />
    </el-sub-menu>
</template>

<script setup>
import { getNormalPath } from '@/utils/default';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    basePath: {
        type: String,
        default: ''
    }
})

const onlyOneChild = ref({});
const hasOneChild = (children = [], self) => {
    if(!children){
        children = [];
    }
    if(children.length === 1){
        onlyOneChild.value = children[0]
        return true;
    }else if(children.length === 0){
        onlyOneChild.value = self
        return true;
    }else{
        return false;
    }
}
</script>