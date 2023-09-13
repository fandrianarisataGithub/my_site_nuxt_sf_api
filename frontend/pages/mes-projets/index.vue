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
        <div class="locomotive-style vertical page-project">
            <div data-scroll-section>
                <div class="bloc-title-page"
                    data-scroll
                    data-scroll-speed="-1.5"
                >
                  <h2>Serice</h2>
                  <h1>MY SPECIALITIES</h1>
                </div>
            </div>
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                <div
                    class="locomotive-style-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                    explicabo?
                </div>
                <div class="locomotive-style-small-square" data-scroll data-scroll-speed="2.5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                    explicabo?
                </div>
                </div>
            </div>
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                <div class="locomotive-style-small-square" data-scroll data-scroll-speed="2.5">
                    Lorem ipsum dolor sit amet.
                </div>
                <div class="locomotive-style-big-square" data-scroll data-scroll-speed="-0.5">
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                </div>
            </div>
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                <div class="locomotive-style-big-square" data-scroll data-scroll-speed="-0.5">
                    Lorem ipsum dolor sit amet.
                </div>
                <div class="locomotive-style-small-square" data-scroll data-scroll-speed="2.5">
                    Lorem ipsum dolor sit amet.
                </div>
                </div>
            </div>
            <div class="list-recommand" data-scroll-section>
                <div class="top-recommand" data-scroll>
                    <div class="title-recommand">
                        Testimonial
                    </div>
                    <div class="big-title-testimonial">
                        WHAT THEY SAYS?
                    </div>
                </div>
                <div class="slide-recommand" data-scroll>
                    <Carousel />
                </div>
            </div>
            <footer class="locomotive-style-section footer" data-scroll-section>
                <Footer />
            </footer>
        </div>
	  </LocomotiveScroll>
</template>
