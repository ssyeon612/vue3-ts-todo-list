import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import ItemList from '@/views/item-list.vue'
import ItemList from '@/views/item-list.vue'

const routes: Array<RouteRecordRaw> = [{
  path: '/:status?',
  name: 'item-list',
  component: ItemList
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
