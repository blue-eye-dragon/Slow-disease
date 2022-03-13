import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login/index')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/view/layout/index.vue'),
      meta: {
        title: '底层layout'
      },
      children: [
        // 检测预警页面
        {
          "path": "/detecteWarning",
          "name": "detecteWarning",
          "component": () => import("@/view/detecteWarning/index.vue"),
        },
        // 工作台
        {
          "path": "/workTable",
          "name": "workTable",
          "component": () => import("@/view/workTable/index.vue"),
        },
        // 疾病患者管理
        {
          "path": "/patientList",
          "name": "patientList",
          "component": () => import("@/view/patientList/index.vue"),
        },
        // 统计报表
        {
          "path": "/statisticalReports",
          "name": "statisticalReports",
          "component": () => import("@/view/statisticalReports/index.vue"),
        },
        // 卡片详情
        {
          "path": "/cardInformation",
          "name": "cardInformation",
          "component": () => import("@/view/cardInformation/index.vue"),
        }
        // 社区信息维护
        // {
        //   "path": "/communityMaintain",
        //   "name": "communityMaintain",
        //   "component": () => import("@/view/backManagement/communityMaintain/index.vue"),
        // }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   if (to.name !== 'Login' && !token) next({ name: 'Login' })
//   // 如果用户未能验证身份，则 `next` 会被调用两次
//   next()
// })

export default router
