<template>
    <Header></Header>
    <v_slider :slider_data="slider_data"></v_slider>

    <section class="container-wrapper">
        <h3 class="main-font-header">Популярные категории</h3>
        <div class="grid-container popular">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
    <section class="container-wrapper">
        <h3 class="main-font-header">Товары для сада</h3>
        <div class="grid-container garden">
            <div></div>
            <div></div>
        </div>
    </section>
    <section class="container-wrapper">

        <h3 class="main-font-header">Отзывы о нас</h3>
        <div>
            <Review></Review>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import Header from "./header/Header.vue";
import v_slider from "./universal/slider/v_slider.vue";
import Footer from "./footer/Footer.vue";
import Review from "./review/Review.vue";

export default {
    name: "MainPage",
    components: {
        Review,
        Header,
        v_slider,
        Footer
    },
    mounted() {
        document.title = 'Главная';
    },
    data() {
        return {
            slider_data: [
                {
                    text: 'Первый слайд'
                },
                {
                    text: 'Второй слайд'
                },
                {
                    text: 'Третий слайд'
                },
                {
                    text: 'Четвертый слайд'
                },
                {
                    text: 'Пятый слайд'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .main-font-header {
        font-family: var(--main-font), sans-serif;
        font-size: 24px;
        margin: 30px 0;
    }
    .grid-container {
        display: grid;
        height: 525px;
        grid-gap: 30px;
        margin-bottom: 30px;
    }
    .grid-container > * {
        background-color: var(--accent-color);
        border-radius: 10px;
    }
    .popular > :first-child {
        grid-column: 1/3;
        grid-row: 1/3;
    }
    .popular > :nth-child(2) {
        grid-column: 3/4;
        grid-row: 1/2;
    }
    .popular > :nth-child(3) {
        grid-column: 4/5;
        grid-row: 1/2;
    }
    .popular > :nth-child(4) {
        grid-column: 3/4;
        grid-row: 2/3;
    }
    .popular > :nth-child(5) {
        grid-column: 4/5;
        grid-row: 2/3;
    }
    .garden > :first-child {
        grid-row: 1/2;
    }
    .garden > :first-child {
        grid-row: 2/4;
    }
    .garden {
        height: 700px;
    }
</style>
