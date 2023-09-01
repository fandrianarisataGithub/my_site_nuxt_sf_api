import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1766bc5d = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _57356981 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _49b42520 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _25cf1b43 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _f3db48dc = () => interopDefault(import('..\\pages\\mes-services\\index.vue' /* webpackChunkName: "pages/mes-services/index" */))
const _371e9722 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1766bc5d,
    name: "about"
  }, {
    path: "/blogs",
    component: _57356981,
    name: "blogs"
  }, {
    path: "/contact",
    component: _49b42520,
    name: "contact"
  }, {
    path: "/demo",
    component: _25cf1b43,
    name: "demo"
  }, {
    path: "/mes-services",
    component: _f3db48dc,
    name: "mes-services"
  }, {
    path: "/",
    component: _371e9722,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
