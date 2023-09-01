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
    <div
      class="locomotive-style vertical smooth-scroll page-about"
      data-scroll-container
    >
        <div data-scroll-section>
            <div class="about-page-tilte">
                <h1
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-1.2"
                >
                    Lorem, ipsum dolor.
                </h1>
                <h2
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="1.2"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
            </div>
        </div>
        <div data-scroll-section id="about-experience">
            <div class="experience-container">
                <div class="gif-text">
                        <div class="h1">Experience</div>
                        <div class="avatar"></div>
                </div>
                <div>
                    <Carousel/>
                </div>
            </div>
        </div>
        <footer class="locomotive-style-section footer" data-scroll-section>
            <Footer />
        </footer>
    </div>
  </LocomotiveScroll>
</template>
