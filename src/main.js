import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import './style.css';
import Store from './store'

import "./style.css";
import App from './App.vue';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home.vue';
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const routes = [
    {
        path: "/",
        component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    }
];

const router = createRouter({
    history: createWebHistory(), // uses the WebHistory API in the browser (in order to go to previous routes)
    routes,
});

createApp(App).use(router).use(Store).mount('#app');
