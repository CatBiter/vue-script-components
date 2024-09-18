<template>
    <template v-if="hasOneChild(item.children, item)">
        <el-menu-item :index="resolvePath(onlyOneChild.path, onlyOneChild.query)">
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
            :base-path="resolvePath(child.path)"
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
const resolvePath = (routePath, routeQuery) => {
    // console.log(`basePath:${props.basePath}`)
    if (routeQuery) {
        let query = JSON.parse(routeQuery);
        return { path: getNormalPath(props.basePath + '/' + routePath), query: query }
    }
    return getNormalPath(props.basePath + '/' + routePath)
}
</script>

<style lang="scss" scoped></style>