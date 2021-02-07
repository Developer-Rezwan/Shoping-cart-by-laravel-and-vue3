import {createRouter , createWebHistory} from 'vue-router';
import Home from '../pages/Home';
import Product from '../pages/Product';

const routes = [
    {
        path: "/",
        name : "home",
        component : Home
    },
    {
        path: "/product/:id",
        name : "product",
        component: Product,
        props : true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
