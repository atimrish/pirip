<template>
    <footer class="footer-main-container">
        <div class="container-wrapper">
            <div class="footer-info">
                <div>
                    <h3>О нас</h3>
                </div>
                <div>
                    <h3>Контакты</h3>
                </div>
            </div>
            <div class="icon-container">
                <div class="footer-icon"></div>
                <div class="footer-icon"></div>
                <div class="footer-icon"></div>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer-main-container {
        background-color: var(--black-color);
        height: 560px;
        width: 100%;
    }
    .footer-info {
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
        border-bottom: 2px solid var(--gray-color);
        height: 80%;
    }
    .footer-info > * {
        width: 500px;
        height: 360px;

    }
    .footer-info > * > h3 {
        color: var(--white-color);
        font-family: var(--main-font), sans-serif;
        font-size: var(--medium-font-size);
    }
    .icon-container {
        display: flex;
        padding: 20px 0;
    }
    .icon-container > .footer-icon {
        width: 50px;
        height: 50px;
        background-color: var(--gray-color);
        border-radius: 50%;
        margin-right: 30px;
    }

</style>
