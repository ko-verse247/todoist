<script setup>
import menuIcon from "../assets/icons/menu-icon.svg"
import homeIcon from "../assets/icons/home-icon.svg"
import addWhiteIcon from "../assets/icons/add-white-icon.svg"
import graphIcon from "../assets/icons/graph-icon.svg"
import infoIcon from "../assets/icons/info-icon.svg"
import bellIcon from "../assets/icons/bell-icon.svg"
import userIcon from "../assets/icons/user-icon.svg"
import searchIcon from "../assets/icons/search-icon.svg"

defineProps({
})
</script>

<template lang="pug">
nav.navbar
  .menu-panel
    menuIcon.icon(alt="메뉴")
    a(href="/" title="홈페이지")
      homeIcon.icon(alt="")
    div.search-bar
      searchIcon.icon.search-icon(alt="")
      input.search(placeholder="검색" type="text")
  .user-panel
    addWhiteIcon.icon(alt="작업 추가")
    graphIcon.icon(alt="통계")
    p.completed-tasks 0/5
    infoIcon.icon(alt="FAQ/문의")
    bellIcon.icon(alt="알림")
    userIcon.icon(alt="User님의 프로필")

</template>

<style lang="less">

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: @accent;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: @text-nav;
  padding: 0px 20px;
  min-height: 50px;
}

.menu-panel, .user-panel {
  display: flex;
  align-items: center;
}

.search-bar {
  position: relative;
}

.search {
  margin: 0 5px;
  background: @search-bg;
  color: @search-text;
  border-radius: @search-border-radius;
  border: none;
  line-height: 1.5;
  height: 40px;
  width: 200px;
  padding-left: 40px;
  font-size: 1.2rem;
}

.search::placeholder{
  color: @search-text;
  opacity: 1;
}

.search-icon {
  position: absolute;
  top: 8px;
  left: 7px;
}

.icon {
  transform: scale(1.5);
  cursor: pointer;
  margin: 0 7px;
}

.completed-tasks {
  margin: 0px 7px;
  font-size: 1.2rem;

}

</style>
