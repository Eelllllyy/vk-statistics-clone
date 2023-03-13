<template>
  <main class="statistics-main">
    <statisticsHeader/>
    <section class="statistics-section">
      <statisticCard v-for="card in guestsCard">
        <template v-slot:header>{{ card.title }}</template>
        <template v-slot:friends>{{ card.people }} people</template>
        <template v-slot:static>{{ card.static }}</template>
      </statisticCard>
    </section>
  </main>
</template>
<script setup>
import statisticsHeader from '@/statistics/components/header/statisticsHeader.vue';
import statisticCard from '@/statistics/components/card/statisticCard.vue';
import { guestsCard } from '@/statistics/statisticsService';
</script>
<style scoped>
.statistics-main{
  background: #EFF3F9;
  width: 100vw;
  height: 100vh;
}
.statistics-section{
  margin: 0px 50px 0 120px;
  display: flex;
  justify-content: space-between;
}
</style>