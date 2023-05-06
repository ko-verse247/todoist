<script setup>
import JSConfetti from 'js-confetti'
import menuIcon from '../assets/icons/menu-icon.svg'
import homeIcon from '../assets/icons/home-icon.svg'
import addWhiteIcon from '../assets/icons/add-white-icon.svg'
import graphIcon from '../assets/icons/graph-icon.svg'
import infoIcon from '../assets/icons/info-icon.svg'
import bellIcon from '../assets/icons/bell-icon.svg'
import userIcon from '../assets/icons/user-icon.svg'
import searchIcon from '../assets/icons/search-icon.svg'

const props = defineProps({
  completedCount: { type: Number, required: true },
  incompleteCount: { type: Number, required: true }
})

const fireConfetti = () => {
  const jsConfetti = new JSConfetti()
  if (props.completedCount === props.incompleteCount + props.completedCount) {
    jsConfetti.addConfetti({
      emojiSize: 70,
      emojis: ['✅', '🔥', '💥', '✨', '💫', '🎉']
    })
  } else {
    jsConfetti.addConfetti({
      emojiSize: 70,
      emojis: ['❗', '⏱️', '⏳', '', '👀', '🤔']
    })
  }
}
</script>

<template lang="pug">
nav.navbar
  .menu-panel
    button.btn-nav.dropdown
      .dropdown-content.left
        ul.menu-list 
          li
            a.menu-link(href="") 통계
          li
            p.menu-link(@click="fireConfetti") 완료: {{ completedCount }} / {{ +incompleteCount + +completedCount }}
          li
            a.menu-link(href="") FAQ/문의
          li
            a.menu-link(href="") 알림
          li
            a.menu-link(href="") User님의 프로필
      menuIcon.icon.icon-nav(alt="")
      span.visually-hidden 메뉴
    a(href="/" title="홈페이지")
      homeIcon.icon.icon-nav(alt="")
    .search-bar
      searchIcon.icon.search-icon(alt="")
      input.search(placeholder="검색" type="search")
  .user-panel.hidden-on-mobile
    button.btn-nav
      addWhiteIcon.icon.icon-nav(alt="")
      span.visually-hidden 작업 추가
    button.btn-nav
      graphIcon.icon.icon-nav(alt="")
      span.visually-hidden 통계
    .completed-tasks.tooltip
      p {{ completedCount }} / {{ +incompleteCount + +completedCount }}
      span.tooltiptext {{completedCount == +incompleteCount + +completedCount ? '다 됐습니다! 수고하셨습니다!' : '할 수 있습니다!'}}
    button.btn-nav.dropdown
      .dropdown-content.right.ask
        p.dropdown-text 질문이 있으세요?
        ul.menu-list
          li
            a.menu-link(href="") FAQ/문의
      infoIcon.icon.icon-nav(alt="")
      span.visually-hidden FAQ/문의
    button.btn-nav.dropdown
      .dropdown-content.right.notif
        p.dropdown-text 새로운 알림이 없습니다.
      bellIcon.icon.icon-nav(alt="")
      span.visually-hidden 알림
    button.btn-nav.dropdown
      .dropdown-content.right.user
        p.dropdown-text User님, 환영합니다
        ul.menu-list 
          li
            a.menu-link(href="") 내프로필
          li
            a.menu-link(href="") 계정 관리
          li
            a.menu-link(href="") 로그아웃
      userIcon.icon.icon-nav(alt="")
      span.visually-hidden User님의 프로필
</template>

<style lang="less">
@import '@/assets/styles/dropdown.less';

.menu-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  margin: 0;
}

.menu-link {
  display: block;
  padding: 20px 20px;
  font-size: 1.1rem;
  color: @text-primary;
  text-decoration: none;
  overflow: hidden;
  font-weight: 400;
  margin: 0;
}

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
  padding: 0px 10px;
  min-height: 65px;
}

.menu-panel,
.user-panel {
  display: flex;
  align-items: center;
  margin: 0 5px;
}

.btn-nav {
  border: none;
  background: none;
  margin: 0;
  padding: 0;
}

.icon.icon-nav {
  transform: scale(1);
  cursor: pointer;
  margin: 0 3px;
}

.completed-tasks {
  display: block;
  margin: 0 3px;
  font-size: 1rem;
  cursor: pointer;
  min-width: max-content;
  transform: translatey(-2px);
}

.search-bar {
  position: relative;
  margin-left: 5px;
}

.search {
  margin: 0 5px;
  background: @search-bg;
  color: @search-text;
  border-radius: @search-border-radius;
  border: none;
  line-height: 1.5;
  height: 40px;
  min-width: 180px;
  width: 100%;
  max-width: 300px;
  padding-left: 40px;
  font-size: 1.2rem;
}

.search::placeholder {
  color: @search-text;
  opacity: 1;
}

.search-icon {
  position: absolute;
  top: 8px;
  left: 7px;
}

@media only screen and (max-width: 499px) {
  .hidden-on-mobile {
    display: none;
  }
}

@media only screen and (min-width: 800px) {
  .completed-tasks {
    font-size: 1.2rem;
  }

  .icon.icon-nav {
    transform: scale(1.2);
    cursor: pointer;
    margin: 0 7px;
  }

  .search {
    min-width: 300px;
  }
}
</style>
