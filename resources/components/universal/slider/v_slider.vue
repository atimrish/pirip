<template>
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <v_slider_item
                v-for="(item, index) in slider_data"
                :text="item.text"
                :img="item.img"
                :key="index"
            >

            </v_slider_item>
        </div>
        <div class="swiper-pagination"></div>

    </div>
</template>

<script>

import V_slider_item from "./v_slider-item.vue";
import Swiper, { Pagination, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css';
export default {
    name: "v_slider",
    components: {V_slider_item},
    props: {
        slider_data: {
            type: Array,
            default: []
        }
    },
    mounted() {
        this.$nextTick(function () {
                const pagination = document.querySelector('.swiper-pagination');
                const swiper = new Swiper('.swiper', {
                    autoplay: true,
                    direction: 'horizontal',
                    modules: [Pagination, Autoplay],
                    loop: true,
                    slideNextClass: '.swiper-button-next',
                    slidePrevClass: '.swiper-button-prev',
                    pagination: {
                        el: pagination,
                        clickable: true,
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                        renderBullet: (index, className) => {
                            return `<div class="${className}"></div>`;
                        }
                    },

                });
        });

    }

}
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 512px;
}

.swiper-wrapper {
    height: 90%;
}

.swiper-pagination {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
}



</style>
