import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../components/MainPage.vue";
import FavouritesPage from "../components/FavouritesPage.vue";
import ProfilePage from "../components/ProfilePage.vue";
import CartPage from "../components/CartPage.vue";
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'Main'
        },
        {
            path: '/favourites',
            component: FavouritesPage,
            name: 'Favourites'
        },
        {
            path: '/profile',
            component: ProfilePage,
            name: 'Profile'
        },
        {
            path: '/cart',
            component: CartPage,
            name: 'Cart'
        }
    ],
})
