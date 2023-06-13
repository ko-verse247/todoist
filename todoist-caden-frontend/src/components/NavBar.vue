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
        img(src="@/assets/graphicon.svg")
        span 0/5
        button
            img(src="@/assets/infoicon.svg")
        button
            img(src="@/assets/bellicon.svg")
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: var(--todoist-orange);
    display: flex;
    justify-content: space-between;
}
button{
    background-color: var(--todoist-orange);
}
.leftbuttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
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