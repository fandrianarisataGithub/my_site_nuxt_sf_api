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
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                    <div
                        class="locomotive-style-big-square bg-image"
                        data-scroll
                        data-scroll-speed="-0.5"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, explicabo?
                    </div>
                    <div
                        class="locomotive-style-small-square"
                        data-scroll
                        data-scroll-speed="2.5"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, explicabo?
                    </div>
                </div>
            </div>
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                    <div
                        class="locomotive-style-small-square"
                        data-scroll
                        data-scroll-speed="2.5"
                    >
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div
                        class="locomotive-style-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    >
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                </div>
            </div>
            <div class="locomotive-style-section" data-scroll-section>
                <div class="locomotive-style-content">
                    <div
                        class="locomotive-style-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    >
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div
                        class="locomotive-style-small-square"
                        data-scroll
                        data-scroll-speed="2.5"
                    >
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
            <footer class="locomotive-style-section footer" data-scroll-section>
                <Footer />
            </footer>
        </div>
  </LocomotiveScroll>
</template>
