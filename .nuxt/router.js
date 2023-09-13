import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7315a94a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _46c8f018 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _06cd531d = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _39485cb6 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _443069e0 = () => interopDefault(import('..\\pages\\mes-projets\\index.vue' /* webpackChunkName: "pages/mes-projets/index" */))
const _4f55a5bf = () => interopDefault(import('..\\pages\\mes-services\\index.vue' /* webpackChunkName: "pages/mes-services/index" */))
const _da64f7e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7315a94a,
    name: "about"
  }, {
    path: "/blogs",
    component: _46c8f018,
    name: "blogs"
  }, {
    path: "/contact",
    component: _06cd531d,
    name: "contact"
  }, {
    path: "/demo",
    component: _39485cb6,
    name: "demo"
  }, {
    path: "/mes-projets",
    component: _443069e0,
    name: "mes-projets"
  }, {
    path: "/mes-services",
    component: _4f55a5bf,
    name: "mes-services"
  }, {
    path: "/",
    component: _da64f7e2,
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
