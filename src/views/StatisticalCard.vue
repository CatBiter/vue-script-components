<template>
    <div class="statistical_card">
        <div class="digital_data">
            <span style="font-size: 16px;">待收款 </span>
            <span style="font-size: 12px;">(万元)</span>

            <div class="number">312.32</div>
            <div class="amplitude">
                <div>较上月</div>
                <div>8%</div>
            </div>
        </div>
        <div style="width: 140px;height: 100px;">
            <e-charts :xData="xData" :yData="yData" :color="'#9978F7'"/>
        </div>
    </div>
</template>

<script setup >
import ECharts from '@/components/ECharts.vue';

const xData = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const yData = ref([820, 932, 901, 934, 1290, 1330, 1320])
</script>

<style lang="scss" scoped>
.statistical_card{
    background-color: #ffffff;
    padding: 16px 12px 16px 24px;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

    .digital_data{


        .number{
            font-size: 26px;
            font-weight: bold;
            margin: 10px 0;
        }
        .amplitude{
            display: flex;
            justify-content: space-between;
        }
    }
    
}
</style>