<template>
  <div class="card-content">
    <div class="bar">
    <h3>Gender / Age</h3>
    <Bar :data="dataGender" :options="optionsGender"></Bar>
  </div>
  </div>
</template>
<script setup>
import { dataGender, optionsGender } from '@/statistics/statisticsService';
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
</script>
<style scoped>
.bar{
  width: 704px !important;
  height: 358px !important;
  padding: 35px;
}
.card-content{
  background: #FDFDFF;
  border: 1px solid #EBEBEB;
  border-radius: 13px;
}
</style>