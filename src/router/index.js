import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: "/Login",
      name: 'Login',
        component: resolve =>
            require(["@/views/Login"], resolve)
    },
    {
      path: '/',
      redirect: '/distribution',
      name: 'Home',
      meta: {
          requireAuth: true,
         },
      component: resolve => require(['@/containers/TheContainer'], resolve),

      children: [
        {
          path: 'distribution',
          name: 'Distribution',
          component: resolve => require(['@/views/Distribution'], resolve)
        },
        {
          path: 'idle',
          name: 'Idle',
          component: resolve => require(['@/views/management/Idle'], resolve)
        },
        {
          path: 'employee',
          name: 'Employee',
          component: resolve => require(['@/views/management/Employee'], resolve)
        },
        {
          path: 'addemployee',
          name: 'Add Employee',
          component: resolve => require(['@/views/management/AddEmployee'], resolve)
        },
        {
          path: 'employeeContent/:id/:name',
          name: 'Employee Content',
          component: resolve => require(['@/views/management/EmployeeContent'], resolve)
        },
        {
          path: 'employeeContent',
          name: 'Employee Content',
          component: resolve => require(['@/views/management/EmployeeContent'], resolve)
        },
        {
          path: 'nursingstation',
          name: 'Nursing Station',
          component: resolve => require(['@/views/management/NursingStation'], resolve)
        },
        {
          path: 'addstation',
          name: 'Add Station',
          component: resolve => require(['@/views/management/AddStation'], resolve)
        },
        {
          path: 'managementreport',
          name: 'Management Report',
          component: resolve => require(['@/views/management/ManagementReport'], resolve)
        },
        {
          path: 'empoyeemgmt',
          name: 'Empoyee Management',
          component: resolve => require(['@/views/management/EmpoyeeMgmt'], resolve)
        },
        {
          path: 'nursingstationmgmt',
          name: 'Nursing Station Management',
          component: resolve => require(['@/views/management/NursingStationMgmt'], resolve)
        },
        {
          path: 'optionMgmt',
          name: 'Option Management',
          component: resolve => require(['@/views/management/NursingStationMgmt'], resolve)
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
          {
          path: '404',
          name: 'Page404',
          component: resolve => require(['@/views/pages/Page404'], resolve)
        },
        {
          path: '500',
          name: 'Page500',
          component: resolve => require(['@/views/pages/Page500'], resolve)
        },
        {
          path: 'register',
          name: 'Register',
          component: resolve => require(['@/views/pages/Register'], resolve)
        }
      ]
    }
  ]
}
// 要打開(暫時)
router.beforeEach((to, from, next) => {
   const token = window.sessionStorage.getItem('user')
  if (to.matched.some(res => res.meta.requireAuth)) { // 判斷該路由是否需要登入許可權
    // console.log('token',token)
    if (token) { // 取當前的token是否存在
      // store.dispatch('token', token)
      next();
    }
    else {
      next(
        {
          name: 'Login'
          // path: '/login',
          // query: {redirect: to.fullPath} // 將跳轉的路由path作為引數，登入成功後跳轉到該路由
        })
    }
  }
  else {
    next();
  }
});
export default router;
