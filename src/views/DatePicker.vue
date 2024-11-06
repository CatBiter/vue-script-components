<template>
    <div class="date-picker" ref="datePicker">
        <input class="picker__input" ref="dateInputRef" type="text" placeholder="选择日期" @focus="handleInputFocus" />

        <div v-show="showPopup" class="popup" :class="`${alignType} ${floatType}`" ref="popupRef">

        </div>
    </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

// 对齐输入框方式
const alignType = ref("float__left")
const floatType = ref("float__bottom")

const showPopup = ref(false)
let parentContainer = null;
const datePicker = ref(null)
const dateInputRef = ref(null)
const popupRef = ref(null)



// 点击触发下拉
const handleInputFocus = () => {
    showPopup.value = true
    nextTick(()=>{
        handleScroller()
    })
}

const handleCilckOutSide = (event) => {
    if (event.target === dateInputRef.value)
        return
    if (!popupRef.value.contains(event.target)) {
        showPopup.value = false
    }
}

const handleScroller = (event) => {
    console.log(111)
    event.stopPropagation();

    if(!showPopup.value) return;

    const { left, top, height: inputHeight } = dateInputRef.value.getBoundingClientRect()
    const { width: popupWidth, height: popupHeight } = popupRef.value.getBoundingClientRect()
    if (left + popupWidth > window.innerWidth) {
        alignType.value = "float__right"
    } else {
        alignType.value = "float__left"
    }
    if (top + inputHeight + popupHeight > window.innerHeight) {
        floatType.value = "float__top"
        popupRef.value.style.top = `${- popupHeight - 10}px`
    } else {
        floatType.value = "float__bottom"
        popupRef.value.style.top = `${inputHeight}px`
    }
}


onMounted(() => {
    document.addEventListener('click', handleCilckOutSide);
    //获取组件父级的dom
    parentContainer = datePicker.value.parentElement;
    console.log(parentContainer)
    parentContainer.addEventListener('scroll', handleScroller);
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleCilckOutSide);
    parentContainer.removeEventListener('scroll', handleScroller);
})

</script>

<style scoped>
.date-picker {
    position: relative;
    display: inline-block;
    float: left;
    top: 500px;


    .picker__input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .popup {
        width: 400px;
        height: 300px;
        position: absolute;
        background: white;
        border-radius: 4px;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
        z-index: 100;
        /* top: -300px; */
    }

    .float__right {
        right: 0;
    }

    .float__left {
        left: 0;
    }

    .float__bottom {
        margin-top: 10px;
    }

    .float__top {
        margin-bottom: 10px;
    }
}
</style>