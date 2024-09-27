<template>
    <div>
        <div class="box">
            <div class="bar">

            </div>
            <div class="canvasContent" ref="canvasContentRef">
                <div class="canvas" ref="canvasRef" @mousedown="startDrag" @mouseup="stopDrag" @mousemove="onDrag">
                    <div class="start"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup name="WorkPlace">

const canvasContentRef = ref(null)
const canvasRef = ref(null)

const dragStartX = ref(0);
const dragStartY = ref(0);
const isDragging = ref(false);
const isSpacePressed = ref(false);

const handleKeyDown = (e) => {
    if (e.key === ' ') {
        isSpacePressed.value = true;
        if(!isDragging.value){
            canvasContentRef.value.style.cursor = 'grab';
        }
    }
}
const handleKeyUp = (e) => {
    isSpacePressed.value = false;
    canvasContentRef.value.style.cursor = 'default';
    // console.log("取消按下")
}


onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
})

const startDrag = (e) => {
    if (!isSpacePressed.value) return; // 如果空格键没有按下，则不开始拖拽

    dragStartX.value = e.clientX;
    dragStartY.value = e.clientY;
    isDragging.value = true;
    // console.log("开始拖拽")
}
const stopDrag = (e) => {
    isDragging.value = false;
    // console.log("结束拖拽")
}
const onDrag = (e) => {
    if (!isDragging.value || !isSpacePressed.value) return;

    // 阻止默认事件，避免文本选择等  
    e.preventDefault();

    const rect = e.target.getBoundingClientRect();
    console.log(rect)
    if(e.target === canvasRef.value){
        // console.log(e.clientX, dragStartX.value)
        e.target.style.left = `${e.clientX - dragStartX.value}px`;
        e.target.style.top = `${e.clientY - dragStartY.value}px`;

        const maxLeft = rect.width - e.target.offsetWidth;
        const maxTop = rect.height - e.target.offsetHeight;
        e.target.style.left = `${Math.min(e.clientX - dragStartX.value, maxLeft)}px`;
        e.target.style.top = `${Math.min(e.clientY - dragStartY.value, maxTop)}px`;
    }else{
        canvasRef.value.style.left = `${e.clientX - dragStartX.value}px`;
        canvasRef.value.style.top = `${e.clientY - dragStartY.value}px`;

        const maxLeft = rect.width - e.target.offsetWidth;
        const maxTop = rect.height - e.target.offsetHeight;
    }

    canvasContentRef.value.style.cursor = 'grabbing';
}

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('keyup', handleKeyUp)
})
</script>

<style scoped lang="scss">
.box {
    height: 100%;
    background-color: #ffffff;

    .bar {
        height: 46px;
        border-bottom: 1px solid #e9e9e9;
    }

    .canvasContent {
        width: 100%;
        height: calc(100% - 47px);
        overflow: hidden;
        position: relative;

        .canvas {
            width: 2000px;
            height: 1000px;
            background-color: rgb(250, 226, 230);
            position: absolute;

            .start {
                position: absolute;
                top: 100px;
                left: 100px;
                width: 100px;
                height: 100px;
                border-radius: 50px;
                background-color: orange;
            }

        }

    }
}
</style>