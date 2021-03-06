import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Student from '@/student'
import Teacher from '@/teacher'
/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: false                   if set false, item will not show in the sidebar(default is false)
 * alwaysShow: false               if set false, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: false                if set false, the page will no be cached(default is false)
    affix: false                  if set false, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is false)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: false
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: false
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: false
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: false
  },
  {
    path: '/department',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: '院系管理',
      meta: { title: '院系管理', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/major',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/major/index'),
      name: '专业管理',
      meta: { title: '专业管理', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/profile',

    // 你可以选择不同的layout组件
    component: Student,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/profile/index'),
      name: '个人信息',
      meta: { title: '个人信息', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/teacher-info',

    // 你可以选择不同的layout组件
    component: Teacher,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/teacher-info/index'),
      name: '个人信息',
      meta: { title: '个人信息', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/class',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/class/index'),
      name: '班级管理',
      meta: { title: '班级管理', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/major',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'add',
      component: () => import('@/views/major/add'),
      name: '添加专业',
      meta: { title: '添加专业', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/class',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'add',
      component: () => import('@/views/class/add'),
      name: '添加班级',
      meta: { title: '添加班级', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/major',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'update',
      component: () => import('@/views/major/update'),
      name: '修改专业信息',
      meta: { title: '修改专业信息', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/class',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'update',
      component: () => import('@/views/class/update'),
      name: '修改班级信息',
      meta: { title: '修改班级信息', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/user',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/user/index'),
      name: '用户管理',
      meta: { title: '用户管理', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/admin/permission',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/admin/permission/index'),
      name: '添加管理员',
      meta: { title: '添加管理员', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/user/permission',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/user/permission/index'),
      name: '激活用户',
      meta: { title: '激活用户', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/user/course',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/course/permission/index'),
      name: '添加课程',
      meta: { title: '添加课程', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/currentScore',

    // 你可以选择不同的layout组件
    component: Layout,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/table/score'),
      name: '评教得分列表',
      meta: { title: '评教得分列表', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/teacher/course',

    // 你可以选择不同的layout组件
    component: Teacher,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'index',
      component: () => import('@/views/teacher-course/course/index'),
      name: '进行选课',
      meta: { title: '进行选课', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/teacher/score',

    // 你可以选择不同的layout组件
    component: Teacher,

    // 这里开始对应的路由都会显示在app-main中 如上图所示
    children: [{
      path: 'record',
      component: () => import('@/views/teacher-course/course/record'),
      name: '评教记录',
      meta: { title: '评教记录', icon: 'dashboard', affix: false, noCache: false }
    }]
  },
  {
    path: '/student/index',
    component: Student,
    children: [
      {
        path: 'index',
        component: () => import('@/views/student/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/teacher/index',
    component: Teacher,
    children: [
      {
        path: 'index',
        component: () => import('@/views/teacher/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/student/',
    component: Student,
    children: [
      {
        path: 'score',
        component: () => import('@/views/table/drag-table'),
        name: '评分教师列表',
        meta: { title: '评分列表', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/student/score',
    component: Student,
    children: [
      {
        path: 'record',
        component: () => import('@/views/table/record-table'),
        name: '评教记录',
        meta: { title: '评教记录', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/score/',
    component: Student,
    children: [
      {
        path: 'index',
        component: () => import('@/views/score/drag-table'),
        name: '评分页面',
        meta: { title: '评分页面', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/admin/userInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/complex-table'),
        name: '用户信息列表',
        meta: { title: '用户信息列表', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/admin/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/admin/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: false, noCache: false }
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: false
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: false,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: false }
      }
    ]
  },
  {
    path: '/teacher-info',
    component: Layout,
    redirect: '/teacher-info/index',
    hidden: false,
    children: [
      {
        path: 'index',
        component: () => import('@/views/teacher/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: false }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 基础数据
  {
    path: '/base',
    component: Layout,
    meta: { title: '基础数据', icon: 'user', noCache: false },
    children: [
      {
        path: 'area',
        component: () => import('@/pages/base/Area'),
        name: 'base_area',
        meta: { title: '区域管理' }
      },
      {
        path: 'department',
        component: () => import('@/pages/base/Department'),
        name: 'base_department',
        meta: { title: '部门管理' }
      },
      {
        path: 'clazz',
        component: () => import('@/pages/base/Clazz'),
        name: 'base_clazz',
        meta: { title: '班级管理' }
      },
      {
        path: 'course',
        component: () => import('@/pages/base/Course'),
        name: 'base_course',
        meta: { title: '课程管理' }
      },
      {
        path: 'teacher',
        component: () => import('@/pages/base/Teacher'),
        name: 'base_teacher',
        meta: { title: '讲师管理' }
      }
    ]
  },
  // 问卷管理
  {
    path: '/question',
    component: Layout,
    meta: { title: '问卷管理', icon: 'user', noCache: false },
    children: [
      {
        path: 'questionnaire',
        component: () => import('@/pages/question/Questionnaire'),
        name: 'question_questionnaire',
        meta: { title: '问卷管理' }
      },
      {
        path: 'bank',
        component: () => import('@/pages/question/Bank'),
        name: 'question_bank',
        meta: { title: '题库管理' }
      }
    ]
  },
  // 课调管理
  {
    path: '/survey',
    component: Layout,
    meta: { title: '课调管理', icon: 'user', noCache: false },
    children: [
      {
        path: 'investigate',
        component: () => import('@/pages/survey/Investigate'),
        name: 'survey_investigate',
        meta: { title: '课调管理' }
      },
      {
        path: 'monitor',
        component: () => import('@/pages/survey/Monitor'),
        name: 'survey_monitor',
        meta: { title: '课调监控' }
      },
      {
        path: 'audit',
        component: () => import('@/pages/survey/Audit'),
        name: 'survey_audit',
        meta: { title: '课调审核' }
      }
    ]
  },
  // 课调统计
  {
    path: '/count',
    component: Layout,
    meta: { title: '课调统计', icon: 'user', noCache: false },
    children: [
      {
        path: 'complete',
        component: () => import('@/pages/count/Complete'),
        name: 'count_complete',
        meta: { title: '全部课调' }
      },
      {
        path: 'analyze',
        component: () => import('@/pages/count/Analyze'),
        name: 'count_analyze',
        meta: { title: '班级课调分析' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: false }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
