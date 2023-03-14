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
        right: 8px;
        top: 6px;
        width: 28px;
        height: 28px;
    }
    .search-input > input {
        width: 400px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: var(--white-color);
        font-size: var(--min-font-size);
        font-family: var(--main-font), sans-serif;
        padding: 0 10px;
    }
</style>
