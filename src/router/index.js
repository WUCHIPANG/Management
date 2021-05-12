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
      name: '首頁',
      meta: {
          requireAuth: true,
         },
      component: resolve => require(['@/containers/TheContainer'], resolve),

      children: [
        {
          path: 'distribution',
          name: '指派',
          component: resolve => require(['@/views/Distribution'], resolve)
        },
        {
          path: 'idle',
          name: '指派人員',
          component: resolve => require(['@/views/management/Idle'], resolve)
        },
        {
          path: 'tasklist',
          name: '進行中派單',
          component: resolve => require(['@/views/management/TaskList'], resolve)
        },
         {
          path: 'taskcontenting/:num/:status',
          name: '派單內容',
          component: resolve => require(['@/views/management/TaskContentIng'], resolve)
        },
        {
          path: 'taskcontenting',
          name: '派單內容',
          component: resolve => require(['@/views/management/TaskContentIng'], resolve)
        },
        {
          path: 'historytask',
          name: '歷史派工紀錄',
          component: resolve => require(['@/views/management/HistoryTask'], resolve)
        },
        {
          path: 'attendance',
          name: '出勤紀錄',
          component: resolve => require(['@/views/management/Attendance'], resolve)
        },
        {
          path: 'addemployee',
          name: '新增人員',
          component: resolve => require(['@/views/management/AddEmployee'], resolve)
        },
        {
          path: 'employeeContent/:id/:name',
          name: '編輯人員',
          component: resolve => require(['@/views/management/EmployeeContent'], resolve)
        },
        {
          path: 'employeeContent',
          name: 'Employee Content',
          component: resolve => require(['@/views/management/EmployeeContent'], resolve)
        },
        {
          path: 'nursingstation',
          name: '護理站派單紀錄',
          component: resolve => require(['@/views/management/NursingStation'], resolve)
        },
         {
          path: 'mgmtaddtask',
          name: '補單',
          component: resolve => require(['@/views/management/MgmtAddTask'], resolve)
        },
          {
          path: 'taskcontent/:num/:status',
          name: '派單內容',
          component: resolve => require(['@/views/management/TaskContent'], resolve)
        },
        {
          path: 'taskcontent',
          name: 'Task Content',
          component: resolve => require(['@/views/management/TaskContent'], resolve)
        },
        {
          path: 'addstation',
          name: '新增護理站',
          component: resolve => require(['@/views/management/AddStation'], resolve)
        },
        {
          path: 'editstation',
          name: '編輯護理站',
          component: resolve => require(['@/views/management/EditStation'], resolve)
        },
        {
          path: 'managementreport',
          name: '管理報表',
          component: resolve => require(['@/views/management/ManagementReport'], resolve)
        },
        {
          path: 'empoyeemgmt',
          name: '人員管理',
          component: resolve => require(['@/views/management/EmpoyeeMgmt'], resolve)
        },
        {
          path: 'nursingstationmgmt',
          name: '護理站管理',
          component: resolve => require(['@/views/management/NursingStationMgmt'], resolve)
        },
        {
          path: 'optionMgmt',
          name: '派遣選項管理',
          component: resolve => require(['@/views/management/OptionMgmt'], resolve)
        },
        {
          path: 'announcement',
          name: '公告',
          component: resolve => require(['@/views/management/Announcement'], resolve)
        },
        {
          path: 'system',
          name: '系統設定',
          component: resolve => require(['@/views/management/System'], resolve)
        },
         {
          path: 'pushTest',
          name: '推播測試',
          component: resolve => require(['@/views/management/PushTest'], resolve)
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
