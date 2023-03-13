<template>
  <main class="statistics-main" :class="[changeTheme? 'lightTheme' : 'darkTheme' ]">
    <statisticsHeader/>
    <section class="statistics-section">
      <statisticCard v-for="card in guestsCard">
        <template v-slot:header>{{ card.title }}</template>
        <template v-slot:friends>{{ card.people }} people</template>
        <template v-slot:static>{{ card.static }}</template>
        <template v-slot:arrow><img :src="card.photo"></template>
      </statisticCard>
      <ChartDevice/>
      <ChartGenderAge/>
    </section>
  </main>
</template>
<script setup>
import statisticsHeader from '@/statistics/components/header/statisticsHeader.vue';
import statisticCard from '@/statistics/components/card/statisticCard.vue';
import { guestsCard } from '@/statistics/statisticsService';
import ChartGenderAge from '@/statistics/components/chart/chartGenderAge.vue';
import ChartDevice from '@/statistics/components/chart/chartDevice.vue';
import { changeTheme } from '@/common/commonService'

</script>
<style scoped>
.statistics-main{
  width: 100vw;
  height: 100vh;
}
.lightTheme{
  background-color: #EFF3F9;
}
.darkTheme{
  background: #212427;
  color: white;
}
.statistics-section{
  margin: 0px 50px 0 120px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>