import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _334d331c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _783eade2 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _d16c9f22 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _0def50a4 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _2299673b = () => interopDefault(import('..\\pages\\index-old.vue' /* webpackChunkName: "pages/index-old" */))
const _67e6467e = () => interopDefault(import('..\\pages\\mes-projets\\index.vue' /* webpackChunkName: "pages/mes-projets/index" */))
const _05269811 = () => interopDefault(import('..\\pages\\mes-services\\index.vue' /* webpackChunkName: "pages/mes-services/index" */))
const _53050de1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _334d331c,
    name: "about"
  }, {
    path: "/blogs",
    component: _783eade2,
    name: "blogs"
  }, {
    path: "/contact",
    component: _d16c9f22,
    name: "contact"
  }, {
    path: "/demo",
    component: _0def50a4,
    name: "demo"
  }, {
    path: "/index-old",
    component: _2299673b,
    name: "index-old"
  }, {
    path: "/mes-projets",
    component: _67e6467e,
    name: "mes-projets"
  }, {
    path: "/mes-services",
    component: _05269811,
    name: "mes-services"
  }, {
    path: "/",
    component: _53050de1,
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
