export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const BlocsAnimateWord = () => import('../..\\components\\blocs\\animateWord.vue' /* webpackChunkName: "components/blocs-animate-word" */).then(c => wrapFunctional(c.default || c))
export const BlocsCarousel = () => import('../..\\components\\blocs\\carousel.vue' /* webpackChunkName: "components/blocs-carousel" */).then(c => wrapFunctional(c.default || c))
export const BlocsTitle = () => import('../..\\components\\blocs\\title.vue' /* webpackChunkName: "components/blocs-title" */).then(c => wrapFunctional(c.default || c))
export const ElementsMenu = () => import('../..\\components\\elements\\menu.vue' /* webpackChunkName: "components/elements-menu" */).then(c => wrapFunctional(c.default || c))
export const ElementsSvg = () => import('../..\\components\\elements\\svg.vue' /* webpackChunkName: "components/elements-svg" */).then(c => wrapFunctional(c.default || c))
export const LayoutsFooter = () => import('../..\\components\\layouts\\footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutsHeader = () => import('../..\\components\\layouts\\header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
