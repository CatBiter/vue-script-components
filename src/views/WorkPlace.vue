<template>
    <!-- <custom-date-picker placeholder="请选择日期" /> -->
    <!-- <v-date-picker
        :header-text="''"
    >
        <template #header>
            1111
        </template>
</v-date-picker> -->
    <div style="height: 1000px;">
        <date-picker />
        <!-- <el-date-picker style="top: 500px;" v-model="value2" type="datetimerange" start-placeholder="Start Date" end-placeholder="End Date"
            :default-time="defaultTime2" /> -->
    </div>

</template>

<script setup name="WorkPlace">
// import CustomDatePicker from './CustomDatePicker.vue';
import DatePicker from './DatePicker.vue';

</script>

<style lang="scss" scoped></style>