<template>
  <CommonNavbar/>
  <Statistics/>
</template>

<script setup>
import CommonNavbar from '@/navbar/components/commonNavbar.vue';
import Statistics from '@/statistics/page/statistics.vue';
</script>
<style>
@font-face {
  font-family: 'CotlinC';
  src: url(@/assets/fonts/CotlinC.otf)
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'CotlinC';
}
</style>
