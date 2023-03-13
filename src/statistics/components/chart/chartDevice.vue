<template>
  <div class="card-content" :class="[changeTheme? 'lightThemeCard' : 'darkThemeCard' ]">
    <h3>Reach by device</h3>
    <div class="doughnut">
    <Doughnut :data="dataDevice" :options="optionsDevice"/>
  </div>
  </div>
</template>
<script setup>
import { dataDevice, optionsDevice } from '@/statistics/statisticsService';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { changeTheme } from '@/common/commonService';

ChartJS.register(ArcElement, Tooltip, Legend)
</script>
<style scoped>
.doughnut{
  width: 132px !important;
  height: 194px !important;
}
.lightThemeCard{
  background-color: #FDFDFF;
}
.darkThemeCard{
  background: #282C31;
  color: white;
}
.card-content{
  border: 1px solid #EBEBEB;
  border-radius: 13px;
  padding: 20px;
  height: 254px;
}
</style>