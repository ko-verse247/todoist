<script setup>

</script>

<template lang="pug">
.navbar
    .leftbuttons
        button(title="메뉴 열기")
            img(src="@/assets/menuicon.svg")
        button(title="홈으로 이동")
            img(src="@/assets/homeicon.svg")
        .searchbar
            img(class="searchicon" src="@/assets/searchicon.svg")
            input(class="search" placeholder="검색")

    .rightbuttons
        button(title="작업 추가")
            img(src="@/assets/addicon.svg")
        button(title="생산성 열기")
            img(src="@/assets/graphicon.svg")
            span 0/5
        button(title="도움말 및 정보 열기")
            img(src="@/assets/infoicon.svg")
        button(title="알림 열기")
            img(src="@/assets/bellicon.svg")
        button(class="profileButton" title="프로필 사진 메뉴 열기")
</template>

<style scoped>
.navbar {
    box-sizing: border-box;
    flex-shrink: 0;
    height: 44px;
    z-index: 200;
    padding-left: 18px;
    padding-right: 18px;
    background-color: var(--todoist-orange);
    display: flex;
    position: static;
    justify-content: space-between;
    width: 100%;
}

button {
    background-color: var(--todoist-orange);
}

button:hover {
    background-color: var(--todoist-soft-orange);
}

.leftbuttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.searchbar {
    display: flex;
    width: 100%;
    border: 1px solid var(--todoist-soft-orange);
    background-color: var(--todoist-soft-orange);
}

.search {
    outline: none;
    border: none;
    background-color: var(--todoist-soft-orange);
    width: 100%;
    color: white;
}
.search:focus, .search:hover{
    background-color: white;
    color: grey;
}

.rightbuttons {
    display: flex;
    align-items: center;
}

.profileButton {
    background-color: white;
    border-radius: 50%;
    height: 32px;
    width: 32px;
}
</style>