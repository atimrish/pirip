<template>
    <div class="slider-item-main">
        <img :src=" 'resources/' + img" alt="">
        <div class="text" v-if=" text !== '' ">{{ text }}</div>
    </div>
</template>

<script>

export default {
    name: "v_slider_item",
    props: {
        img: {
            type: String,
            default: 'no-image.png'
        },
        text: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped>
  .slider-item-main {
      width: 100%;
      height: 100%;
      background-color: var(--accent-color);
      flex-shrink: 0;
  }
</style>
