<template>
    <div class="date-picker" ref="datePicker" >
        <input class="picker-input" ref="dateInputRef"
            type="text" placeholder="选择日期" @focus="handleInputFocus" />
        <div v-show="showPopup" class="popup" ref="popupRef">
            
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

const showPopup = ref(false)
const dateInputRef = ref(null)
const popupRef = ref(null)

// 点击触发下拉
const handleInputFocus = () => {
    showPopup.value = true
}

const handleCilckOutSide = (event) => {
    if(event.target === dateInputRef.value)
        return
    if(!popupRef.value.contains(event.target)){
        showPopup.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleCilckOutSide);
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleCilckOutSide);
})

</script>

<style scoped>
.date-picker {
    position: relative;
    display: inline-block;
}

input {
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
    left: 0;
    margin-top: 10px;
}
</style>