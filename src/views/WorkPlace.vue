<template>
    <div>
        <e-charts class="chart" :option="option" />
    </div>
</template>

<script setup name="WorkPlace">
import { rgbaToHex, hexToRgba } from '@/utils/colorFormat'

const props = defineProps({
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    color: {
        type: String,
    }
})

const option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            show: false // 隐藏坐标刻度
        },
        axisTick: {
            show: false // 隐藏坐标刻度线
        },
        axisLine: {
            show: false // 隐藏坐标轴线
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false // 隐藏 Y 轴
        },
        axisLabel: {
            show: false // 隐藏 Y 轴刻度
        },
        axisTick: {
            show: false // 隐藏 Y 轴刻度线
        },
        splitLine: {
            show: false // 隐藏网格线
        }
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,  // 设置平滑
            // 设置点的颜色
            itemStyle: {
                color: '#9978F7'
            },
            // 设置线条的颜色
            lineStyle: {
                color: '#9978F7',
                width: 2
            },
            // 设置区域的背景颜色
            areaStyle: {
                color: 'rgba(153, 120, 247, 0.4)'
            }
        }
    ]
}

</script>

<style lang="scss" scoped>
.chart {
    height: 400px;
}
</style>