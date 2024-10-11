<template>
    <div>
        <div class="bottom">
            <div class="title">财务数据{{ size }}</div>
            <div class="data_Item">
                <statistical-card :style="`width: ${type.percent}%;`" v-for="item in type.number" />
            </div>
        </div>
    </div>
</template>

<script setup name="WorkPlace">
import StatisticalCard from './StatisticalCard.vue';

import { useWindowResize } from '@/hooks/useWindowResize';
import { computed } from 'vue';

const { size } = useWindowResize();
const typeExemple = {
    small: {number: 4, percent: 24},
    normal: {number: 5, percent: 19},
    large: {number: 6, percent: 16}
}
const type = computed(() => typeExemple[size.value])
</script>

<style lang="scss" scoped>
.bottom{
    border-radius: 10px;
    padding: 10px 12px;
    height: 196px;
    background-color: #ffffff;
    
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .data_Item{
        display: flex;
        justify-content: space-between;
    }
    
    
}
</style>