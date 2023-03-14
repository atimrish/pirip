<template>
    <header class="main">
        <div class="wrap container-wrapper">
            <router-link :to="{name: 'Main'}" class="logo">LOGO</router-link>
            <CatalogBtn></CatalogBtn>
            <Search></Search>
            <router-link :to="{name: 'Favourites'}" class="icon-header">
                <img src="/resources/img/favourite.svg" alt="">
            </router-link>
            <router-link :to="{name: 'Profile'}" class="icon-header">
                <img src="/resources/img/profile.svg" alt="">
            </router-link>
            <router-link :to="{name: 'Cart'}" class="icon-header">
                <img src="/resources/img/cart.svg" alt="">
            </router-link>
        </div>
    </header>
</template>

<script>
import CatalogBtn from "./CatalogBtn.vue";
import Search from "./Search.vue";
export default {
    name: "Header",
    components: {
        CatalogBtn,
        Search
    }
}
</script>

<style scoped>
    .main {
        height: 80px;
        width: 100%;
        background-color: var(--gray-color);
    }
    .wrap {
        //padding: 0 250px;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
    }
    .logo {
        font-family: var(--main-font), sans-serif;
        font-weight: 500;
        font-size: var(--medium-font-size);
        text-decoration: none;
        color: var(--black-color);
    }
    .icon-header {
        width: 36px;
        height: 36px;
        display: block;
        flex-shrink: 0;
    }

    .icon-header > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

</style>
