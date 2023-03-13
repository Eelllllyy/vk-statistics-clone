<template>
  <div class="statistic-card" :class="[changeTheme? 'lightThemeCard' : 'darkThemeCard' ]">
    <h3><slot name="header"></slot></h3>
    <div class="statistic-card-subblock">
      <div><slot name="friends"></slot></div>
      <div class="static-content">
        <div><slot name="static"></slot></div>
        <div class="arrow"><slot name="arrow"></slot></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { changeTheme } from '@/common/commonService'
</script>
<style scoped>
.statistic-card{
  border: 1px solid #EBEBEB;
  border-radius: 13px;
  width: 341px;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  margin: 50px 0;
}
.lightThemeCard{
  background-color: #FDFDFF;
}
.darkThemeCard{
  background: #282C31;
}
.statistic-card-subblock{
  display: flex;
  justify-content: space-between;
}
.static-content{
  display: flex;
}
.arrow{
  margin-left: 5px;
}
.statistic-card:hover{
  background: #e5e5f0;
}
</style>