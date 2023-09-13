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
		<div class="locomotive-style vertical page-blog">
			<div class="bloc-introduction" data-scroll-section>
            <div class="bloc-title-page" data-scroll>
                <h2>
                    Blogue
                </h2>
                <h1>
                    ACTUALITÉS
                </h1>
            </div>
            <div data-scroll-section
                class="blog-container"
            >
                <div class="unite-blog">
                    <a class="img" href="#">
                        <img src="~/assets/images/front/baobab.PNG" alt="blog image">
                    </a>
                    <div class="dates-title">
                        <div class="date">10 july 2022</div>
                        <div class="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            dignissimos fugiat laborum!
                        </div>
                        <div class="read-more">
                            <a href="#" class="element-button">Lire plus</a>
                        </div>
                    </div>
                </div>
                <div class="unite-blog">
                    <a class="img" href="#">
                        <img src="~/assets/images/front/baobab.PNG" alt="blog image">
                    </a>
                    <div class="dates-title">
                        <div class="date">10 july 2022</div>
                        <div class="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            dignissimos fugiat laborum!
                        </div>
                        <div class="read-more">
                            <a href="#" class="element-button">Lire plus</a>
                        </div>
                    </div>
                </div>
                <div class="unite-blog">
                    <a class="img" href="#">
                        <img src="~/assets/images/front/baobab.PNG" alt="blog image">
                    </a>
                    <div class="dates-title">
                        <div class="date">10 july 2022</div>
                        <div class="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            dignissimos fugiat laborum!
                        </div>
                        <div class="read-more">
                            <a href="#" class="element-button">Lire plus</a>
                        </div>
                    </div>
                </div>
                <div class="unite-blog">
                    <a class="img" href="#">
                        <img src="~/assets/images/front/baobab.PNG" alt="blog image">
                    </a>
                    <div class="dates-title">
                        <div class="date">10 july 2022</div>
                        <div class="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            dignissimos fugiat laborum!
                        </div>
                        <div class="read-more">
                            <a href="#" class="element-button">Lire plus</a>
                        </div>
                    </div>
                </div>
                <div class="unite-blog">
                    <a class="img" href="#">
                        <img src="~/assets/images/front/baobab.PNG" alt="blog image">
                    </a>
                    <div class="dates-title">
                        <div class="date">10 july 2022</div>
                        <div class="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            dignissimos fugiat laborum!
                        </div>
                        <div class="read-more">
                            <a href="#" class="element-button">Lire plus</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="load-more-container" data-scroll-section>
                <button class="load-more element-button">
                    Load more
                </button>
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
