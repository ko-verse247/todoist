<script setup>

</script>

<template lang="pug">
.navbar
    .leftbuttons
        button(type="button" title="Open menu")
            img(src="@/assets/menuicon.svg")
        button(title="Go to home")
            img(src="@/assets/homeicon.svg")
        .searchbar
            img(src="@/assets/searchicon.svg")
            input(class="search" placeholder="검색")

    .rightbuttons
        button
            img(src="@/assets/addicon.svg")
        button
            img(src="@/assets/graphicon.svg")
            span 0/5
        button
            img(src="@/assets/infoicon.svg")
        button
            img(src="@/assets/bellicon.svg")
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
button{
    background-color: var(--todoist-orange);
}
.leftbuttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.searchbar {
    display:flex;
    width: 100%;
    border: 1px solid var(--todoist-soft-orange);
    background-color: var(--todoist-soft-orange);
}

.search {
    border: none;
    background-color: var(--todoist-soft-orange);
    width: 100%;
    color: white;
}

.rightbuttons {
    display: flex;
    align-items: center;
}

</style>