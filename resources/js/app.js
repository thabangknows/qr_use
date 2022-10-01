import "./bootstrap";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import * as VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import Home from '../pages/Home.vue'
import Generate from '../pages/Generate.vue';
import About from '../pages/About.vue'

import App from "./App.vue";


const routes = [
    {
        path: "/",
        component: Home,
    },
    { 
        path: "/generate",
        component: Generate,
    },
    { 
        path: "/about",
        component: About,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount("#app");



//link: qr-use.rf.gd
//username epiz_32700410
//aZlg8HNeU83
//password: Ket-be04
