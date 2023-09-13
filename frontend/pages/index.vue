<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,

      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    }"
  >
    <div class="locomotive-style vertical page-home">
      <div class="bloc-introduction" data-scroll-section>
        <div class="bloc-image-and-description">
          <div class="bref">
            <div class="my-name" data-scroll>
              <h1>Je suis Fenitra.</h1>
              <h2>Développeur Vue/Nuxt</h2>
              <h2>Développeur Symfony</h2>
              <a href="#" class="link-contact">Contactez-moi</a>
              <div class="phones">
                <a href="tel:+261325109013" class="btn btn-contact">
                    <fa :icon="['fas', 'phone']" />
                    <span>+261 32 51 090 13</span>
                </a>
                <a href="mailto:fandrianarisata2@gmail.com">
                    <fa :icon="['fas', 'envelope']" />
                    <span>fandrianarisata2@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div class="img-container">
            <div class="img-content">
              <img
                src="~/assets/images/perso/home.png"
                alt="sata fenitriniaina feni"
              />
            </div>
            <h3 class="description">DEV VUE-NUXT-SYMFONY</h3>
          </div>
        </div>
      </div>
      <footer class="locomotive-style-section footer" data-scroll-section>
        <Footer />
      </footer>
    </div>
  </LocomotiveScroll>
</template>
<script>
export default {
  async mounted() {},
};
</script>
