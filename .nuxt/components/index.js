export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as BlocsAnimateWord } from '../..\\components\\blocs\\animateWord.vue'
export { default as BlocsCarousel } from '../..\\components\\blocs\\carousel.vue'
export { default as BlocsTitle } from '../..\\components\\blocs\\title.vue'
export { default as ElementsMenu } from '../..\\components\\elements\\menu.vue'
export { default as ElementsSvg } from '../..\\components\\elements\\svg.vue'
export { default as LayoutsFooter } from '../..\\components\\layouts\\footer.vue'
export { default as LayoutsHeader } from '../..\\components\\layouts\\header.vue'

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
