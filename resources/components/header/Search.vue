<template>
    <div class="search-input">
        <input type="search" name="header_search" id="header_search">
        <img src="/resources/img/search.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style scoped>
    .search-input {
        position: relative;
    }
    .search-input > img {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
    }
    .search-input > input {
        width: 550px;
        height: 48px;
        border-radius: 10px;
        border: none;
        background-color: var(--white-color);
        font-size: var(--min-font-size);
        font-family: var(--main-font), sans-serif;
        padding: 0 10px;
    }
</style>
