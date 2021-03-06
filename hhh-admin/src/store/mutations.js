// 这里定义一个mutations对象，里面存一些方法，用来改变state的状态
import router from '../router'

const mutations = {
  // 存储后端返回的中的token
  token (state, token) {
    state.token = token
  },
  // 存储后端返回的用户相关的信息
  userinfo (state, userinfo) {
    state.avatar = userinfo.data.avatar
    state.buttons = userinfo.data.buttons
    state.roles = userinfo.data.roles
    state.routes = userinfo.data.routes
  },
  // 保存用户需要展示的异步路由
  matchRoutes (state, matchRoutes) {
    state.matchRoutes = matchRoutes
  },
  // 最终用户需要展示的所有路由
  allRoutes (state, allRoutes) {
    state.allRoutes = allRoutes
  },
  // 用户的按钮权限
  userButtons (state, userButtons) {
    state.userButtons = userButtons
  },
  // 改变侧边栏的展开和收起
  asideCollapse (state) {
    state.asideCollapse = !state.asideCollapse
  },
  // token过期被动退出
  logout (state) {
    state.token = ''
    localStorage.clear()
    router.push('/login')
  }
}
export default mutations
