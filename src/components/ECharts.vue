<template>
    <e-charts ref="echartRef" class="echart" :option="option" />
</template>

<script setup name="Echarts">
import { hexToRgba } from '@/utils/colorFormat'

const props = defineProps({
    color: {
        type: String,
        default: '#84b7f9'
    },
    xData: {
        type: Array,
        required: true,
    },
    yData: {
        type: Array,
        required: true,
    }
})

const option = {
    // 边距
    grid: {
        top: '10%',
        bottom: '10%',
        left: '5%',
        right: '5%',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.xData,
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
            data: props.yData,
            type: 'line',
            smooth: true,  // 设置平滑
            // 设置点的颜色
            itemStyle: {
                color: props.color,
            },
            // 设置线条的颜色
            lineStyle: {
                color: props.color,
                width: 2
            },
            // 设置区域的背景颜色
            areaStyle: {
                color: hexToRgba(props.color, 0.4)
            }
        }
    ]
}

</script>

<style lang="scss" scoped>
.echart{
    width: 100%;
    height: 100%;
}
</style>