<template>
    <div class="main-b">
        <div><img src="/resources/img/burger-sm.svg" alt=""></div>
        <div class="text">Каталог</div>
    </div>
</template>

<script>
export default {
    name: "CatalogBtn"
}
</script>

<style scoped>
.main-b {
    background-color: var(--accent-color);
    width: 120px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
}

.main-b > div {
    width: 20px;
    height: 20px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: top;
}

.main-b > .text {
    width: auto;
    height: auto;
    color: #E0E0E0;
    font-family: var(--main-font), sans-serif;
}

</style>
