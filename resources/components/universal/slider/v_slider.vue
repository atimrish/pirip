<template>
    <div class="slider-main">
        <div class="slider-wrapper">
            <V_slider_item v-for="(item, index) in items" :key="index" :text="item.text" />
        </div>
    </div>
</template>

<script>

import V_slider_item from "./v_slider-item.vue";
export default {
    name: "v_slider",
    components: {V_slider_item},

    data() {
        return {
            items: [
                {
                    text: 'Первый слайд'
                },
                {
                    text: 'Второй слайд'
                },
                {
                    text: 'Третий слайд'
                }
            ]
        }
    }

}
</script>

<style scoped>
    .slider-main {
        width: 100%;
        height: 500px;
        overflow: hidden;
    }
    .slider-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
    }

</style>
