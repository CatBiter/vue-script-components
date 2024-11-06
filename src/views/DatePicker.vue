<template>
    <div class="date-picker" ref="datePicker">
        <input class="picker__input" ref="dateInputRef" type="text" placeholder="选择日期" @focus="handleInputFocus" />

        <Teleport to="body">
            <div v-show="showPopup" class="ob-popper" :style="`left: ${position.x}px;top: ${position.y}px`" ref="popupRef">
                <div style="width: 300px;height: 100px;"></div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

// 气泡位置
const position = ref({x: 0,y: 0})

const showPopup = ref(false)
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

// 获取父级元素
function findParent(el) {
    let parent = el.parentNode;
    while (parent && parent.nodeType !== 9) {
        if (parent.nodeName !== 'BODY') {
            return parent;
        }
        parent = parent.parentNode;
    }
    return null;
}

const handleCilckOutSide = (event) => {
    if (event.target === dateInputRef.value)
        return
    if (!popupRef.value.contains(event.target)) {
        showPopup.value = false
    }
}

const handleScroller = () => {
    if(!showPopup.value) return;

    const input = dateInputRef.value.getBoundingClientRect()
    const popup = popupRef.value.getBoundingClientRect()
    if (input.x + popup.width < window.innerWidth) {
        // 左对齐
        position.value.x = input.x
    } else {
        // 右对齐
        position.value.x = input.x + input.width - popup.width
    }
    if (input.y + input.height + popup.height > window.innerHeight) {
        // 放置顶部（10为间距）
        position.value.y = input.y - popup.height - 10
    } else {
        // 放置底部（10为间距）
        position.value.y = input.y + input.height + 10
    }
}

const scroller = () => {
    console.log("测试")
}


onMounted(() => {
    document.addEventListener('click', handleCilckOutSide);

    const parentElement = findParent(datePicker.value);
    window.addEventListener('scroll', ()=>{console.log(111)})
    if (parentElement) {
        parentElement.addEventListener('scroll', () => {
            console.log(111)
        },true);
    }

    window.addEventListener('scroll', scroller);
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleCilckOutSide);

    const parentElement = findParent(datePicker.value);
    if (parentElement) {
        parentElement.removeEventListener('scroll', scroller);
    }

    window.removeEventListener('scroll', scroller);
})

</script>

<style scoped>
.date-picker {
    position: relative;
    display: inline-block;
    top: 50px;

    .picker__input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
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