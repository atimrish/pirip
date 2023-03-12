<template>
    <Header></Header>
    <v_slider></v_slider>
</template>

<script>
import Header from "./header/Header.vue";
import v_slider from "./universal/slider/v_slider.vue";

export default {
    name: "MainPage",
    components: {
        Header,
        v_slider,
    }
}
</script>

<style scoped>

</style>
