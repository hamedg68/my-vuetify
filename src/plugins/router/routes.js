import Dashboard from "@/views/Dashboard";
import Projects from "@/views/Projects";
import Team from "@/views/Team";

export const Routes = [

    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },

    {
        path: '/projects',
        name: 'projects',
        component: Projects,
    },

    {
        path: '/team',
        name: 'Team',
        component: Team,
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




