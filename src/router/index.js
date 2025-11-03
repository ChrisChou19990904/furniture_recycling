// src/router/index.js (Vue 3 修正版)
import { createRouter, createWebHistory } from 'vue-router';

// 引入 Views
import ApplicationList from '../views/ApplicationList.vue';
import Scheduling from '../views/Scheduling.vue'; // 假設您已創建此文件

const routes = [
    // 申請列表
    {
        path: '/application',
        name: 'ApplicationBase',
        component: ApplicationList,
        redirect: '/application/unchecked', // 預設重定向到未審核
        children: [
            // 注意：Vue 3 中，這些子路由的組件建議使用動態引入 (Lazy Loading)
            { path: 'overview', name: 'ApplicationOverview', component: () => import('../components/ApplicationTabs/Overview.vue') },
            { path: 'unchecked', name: 'ApplicationUnchecked', component: () => import('../components/ApplicationTabs/Unchecked.vue') },
            { path: 'reviewing', name: 'ApplicationReviewing', component: () => import('../components/ApplicationTabs/Reviewing.vue') },
            { path: 'dispatched', name: 'ApplicationDispatched', component: () => import('../components/ApplicationTabs/Dispatched.vue') },
            { path: 'completed', name: 'ApplicationCompleted', component: () => import('../components/ApplicationTabs/Completed.vue') },
        ],
    },

    // 排程頁面
    {
        path: '/scheduling',
        name: 'SchedulingBase',
        component: Scheduling,
        redirect: '/scheduling/vehicle', // 預設重定向到車輛選擇
        children: [
            { path: 'vehicle', name: 'SchedulingVehicle', component: () => import('../components/SchedulingTabs/VehicleSelect.vue') },
            { path: 'case', name: 'SchedulingCase', component: () => import('../components/SchedulingTabs/CaseSelect.vue') },
            { path: 'path', name: 'SchedulingPath', component: () => import('../components/SchedulingTabs/PathPlanning.vue') },
            { path: 'auto', name: 'SchedulingAuto', component: () => import('../components/SchedulingTabs/AutoGenerate.vue') },
        ],
    },

    // 根路徑重定向
    {
        path: '/',
        redirect: '/application/unchecked',
    },
    // 404 處理
    {
        path: '/:catchAll(.*)',
        redirect: '/',
    }
];

const router = createRouter({
    // 使用 history 模式
    history: createWebHistory(),
    routes,
});

export default router;


