<template>
    <div class="titleCard">
        <div class="title">图片预览</div>
        <el-button class="typeBtn" type="primary">图片预览</el-button>
        <el-image
            style="width: 100px; height: 100px"
            :src="srcList[0]"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="srcList"
            :initial-index="4"
            fit="cover"
        />
    </div>
</template>

<script setup name="Preview">
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
]

</script>

<style lang="scss" scoped>
.titleCard {
    border-radius: 6px;
    background-color: #ffffff;
    padding: 10px;
    display: flex;

    .title {
        font-size: 20px;
    }

    .typeBtn {
        display: flex;
        margin-left: 10px;
    }
}
</style>