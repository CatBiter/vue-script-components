<template>
    <!-- <component :is="iconComponent" v-bind="$attrs" /> -->
</template>

<script setup>
// import { defineAsyncComponent } from 'element-plus';
// import { computed, render } from 'vue';

// const props = defineProps({
//     name: {
//         type: String,
//         required: true
//     }
// })

// const isElementIcon = (name) => name.startsWith('el-');

// const iconComponent = computed(() => {
//     const name = props.name;

//     if(isElementIcon(name)) {
//         return defineAsyncComponent(() => import(/* @vite-ignore */ `./path/to/element-icons/${name}.vue`)); 
//     } else {
//         return {
//             functional: true,
//             render(h, { props }) {
//                 return h('svg', {
//                     attrs: {
//                         viewBox: '0 0 100 100',
//                         // 其他svg属性
//                     },
//                     domProps: {
//                         innerHTML: getSvgPathByName(name)
//                     }
//                 })  
//             }
//         }
//     }
// })

// function getSvgPathByName(name) {
//     return `<path d="M10 10H90V90H10Z" fill="black" />`;
// }
</script>