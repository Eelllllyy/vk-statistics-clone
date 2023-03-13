<template>
  <header class="statistics-header flex">
    <div class="subblock-statistics-header-one flex">
      <h1>Statistics</h1>
      <input class="statistics-search" placeholder="Search...">
      <img src="@/statistics/assets/img/notification.svg" class="statistics-notification">
    </div>
    <div class="subblock-statistics-header-two flex">
      <p>Elina</p>
      <img src="@/statistics/assets/img/logo-user.svg">
      <button class="statistics-btn-flag"></button>
    </div>
  </header>  
</template>
<style scoped>
.statistics-header{
  margin: 0px 50px 0 120px;
  padding-top: 67px;
}
.statistics-notification{
  cursor: pointer;
}
.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.subblock-statistics-header-one{
  width: 394px;
}
.subblock-statistics-header-two{
  width: 141px;
}
.statistics-search{
  height: 32px;
  border: 1px solid #EBEBEB;
  border-radius: 8px;
  padding: 5px;
  margin-left: 19px;
  cursor: pointer;
}
.statistics-btn-flag{
  background-image: url('@/statistics/assets/img/button-flag.svg');
  width: 10px;
  height: 6px;
  border: none;
  background-color: none;
  cursor: pointer;
}
</style>