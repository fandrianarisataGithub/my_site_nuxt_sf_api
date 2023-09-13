<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
    <div class="locomotive-style vertical">
      <header data-scroll-section>
        <h1>
          Vertical<br />
          Scroll
        </h1>
      </header>
      <div class="locomotive-style-section" data-scroll-section>
        <div class="locomotive-style-content">
          <div
            class="locomotive-style-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
          <div
            class="locomotive-style-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
        </div>
      </div>
      <div class="locomotive-style-section" data-scroll-section>
        <div class="locomotive-style-content">
          <div
            class="locomotive-style-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
          <div
            class="locomotive-style-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
        </div>
      </div>
      <div class="locomotive-style-section" data-scroll-section>
        <div class="locomotive-style-content">
          <div
            class="locomotive-style-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
          <div
            class="locomotive-style-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/">
          Go to Horizontal Scroll
        </nuxt-link>
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>
import LocomotiveScroll from '@/LocomotiveScroll/component';
export default {
  components: {
    LocomotiveScroll
  }
}
</script>

<style lang="scss">
@import './demo.scss';
</style>
