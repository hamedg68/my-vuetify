import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {Routes} from '@/plugins/router/routes'

const router = new VueRouter({
    routes: Routes,
    mode: 'history',//برای حذف # از روت اصلی
    base: process.env.BASE_URL,
    // scrollBehavior(to, from, savePosition) {
    //     if (savePosition)//تنظیمات مربوط به حفظ پوزیشن صفحه موقع برگشت
    //         return savePosition
    //
    //     // //تنضیمات اسکرول به پوزیشن خاص از صفحه
    //     // if (to.hash) {
    //     //     return {
    //     //         selector: to.hash
    //     //     }
    //     // }
    //
    //
    //     // return {//با ورود به هر صفحه صفحه از بالا لود میشه
    //     //     x: 0,
    //     //     y: 0
    //     // }
    // }
})

export default router
