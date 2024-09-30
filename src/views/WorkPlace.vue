<template>
    <div>
        <div class="bottom">
            <div class="title">财务数据</div>
            <div class="banner">
                <div class="previous"><</div>
                <div class="data_list">
                    <div class="statistical_card">

                    </div>
                    <div class="statistical_card"></div>
                    <div class="statistical_card"></div>
                    <div class="statistical_card"></div>
                </div>
                <div class="next">></div>
            </div>
            <!-- <e-charts :xData="xData" :yData="yData" :color="'#9978F7'"/> -->
        </div>
    </div>
</template>

<script setup name="WorkPlace">
import ECharts from '@/components/ECharts.vue';

const xData = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const yData = ref([820, 932, 901, 934, 1290, 1330, 1320])
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

    .banner{
        position: relative;
        display: flex;
        align-items: center;

        .previous{
            width: 24px;
            height: 100%;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
        }

        .data_list{
            width: 100%;
            height: 158px;
            display: flex;
            justify-content: space-between;

            .statistical_card{
                width: 320px;
                background-color: #ffffff;
                padding: 16px;
                border-radius: 8px;
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
            }
        }

        .next {
            width: 24px;
            height: 100%;
            
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
        }
    }

    
    
}
</style>