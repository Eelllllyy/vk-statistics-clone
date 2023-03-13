<template>
  <header class="common-header" :class="[changeTheme? 'lightTheme' : 'darkTheme']">
    <nav class="navbar flex">
      <img src="@/navbar/assets/logo-vk.svg" class="img-logo">
      <div class="img-block flex">
        <img src="@/navbar/assets/home.svg" class="img-home">
        <img src="@/navbar/assets/news.svg" class="img-news">
        <img src="@/navbar/assets/friends.svg" class="img-friends">
        <img src="@/navbar/assets/messages.svg" class="img-messages">
        <img src="@/navbar/assets/music.svg" class="img-music">
        <img src="@/navbar/assets/statistics.svg" class="img-statistics">
        <img src="@/navbar/assets/settings.svg" class="img-settings">
      </div>
      <button class="btn" @click="changeTheme = !changeTheme" >
      <div :class="[changeTheme? 'lightThemeButton' : 'darkThemeButton']"></div>
      <div v-if="!changeTheme" class="round-dark"></div>
    </button>
    </nav>
  </header>
</template>
<script setup>
import { changeTheme } from '@/common/commonService'
</script>
<style scoped>
.btn{
  background: #FDFDFF;
  border: 0.5px solid #4F4F4F;
  border-radius: 50px;
  width: 60px;
  height: 30px;
  position: relative;
  cursor: pointer;
}
.round-dark{
  background-color: #0d0d16;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  position: absolute;
  top: 5px;
  right: 0;
  animation: darkCircle 0.7s linear;
  animation-duration: 1s;
}
@keyframes darkCircle{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;

  }
}
.lightThemeButton{
  background: #7F7FD5;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  transition: all 0.5s linear;
}
.darkThemeButton{
  background: #7F7FD5;
  width: 60px;
  height: 30px;
  border-radius: 10px;
  transition: all 0.5s linear;
}
.common-header{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 98px;
  z-index: 10;
}
.lightTheme{
  background-color: white;
}
.darkTheme{
  background: #282C31;
}
.navbar{
  height: 100vh;
}
.flex{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.img-block{
  height: 400px;
}
.img-logo{
  width: 51px;
  height: 35px;
}
.img-home, .img-news, .img-statistics, .img-settings{
  width: 25px;
  height: 25px;
}
.img-friends{
  width: 25px;
  height: 23px;
}
.img-messages{
  width: 25px;
  height: 17px;  
}
.img-music{
  width: 19px;
  height: 25px;  
}
.img-tumbler{
  width: 60px;
  height: 30px;
}
</style>