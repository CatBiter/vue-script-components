<template>
    <el-date-picker
        v-model="date"
        type="daterange"
        :shortcuts="shortcuts"
        popper-class="unique-class"
    />

</template>

<script setup>
const date = ref('')

const shortcuts = [
  {
    text: '今日',
    value: new Date(),
  },
  {
    text: '昨日',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>

<style lang="scss" scoped>

</style>