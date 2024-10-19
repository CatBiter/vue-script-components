<template>
    <div v-for="(title,index) in breadcrumbList" :key="index">
        <span class="title">{{ title }}</span>
        <span v-if="index !== breadcrumbList.length - 1" class="split">/</span>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbList = computed(() => {
    return route.matched.map((item) => item.meta.title)
})

</script>

<style lang="scss" scoped>
.title{
    
}
.split{
    padding: 0 10px;
}
</style>