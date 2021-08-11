import Home from '@/views/Home'


export const Routes = [

    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About'),
    },

    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test'),
    },


    // {
    //     name : '404',
    //     path: '/404',
    //     component: notFound,
    // },
    //
    // {
    //     path: '*',
    //     redirect: '/404'
    // },

]




