<template>
  <div class="statistic-card">
    <h3><slot name="header"></slot></h3>
    <div class="statistic-card-subblock">
      <div><slot name="friends"></slot></div>
      <div><slot name="static"></slot></div>
    </div>
  </div>
</template>
<style scoped>
.statistic-card{
  background: #FDFDFF;
  border: 1px solid #EBEBEB;
  border-radius: 13px;
  width: 341px;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}
.statistic-card-subblock{
  display: flex;
  justify-content: space-between;
}
</style>