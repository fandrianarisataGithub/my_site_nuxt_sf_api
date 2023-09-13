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
					<div class="img-container">
						<div class="img-content">
								<img
								src="~/assets/images/perso/za.jpg"
								alt="sata fenitriniaina feni"
								/>
						</div>
						<h3 class="description">DEV VUE-NUXT-SYMFONY</h3>
					</div>
					<div class="bref">
						<div class="my-name" data-scroll>
							<h1>Je suis Sata Fenitriniaina.</h1>
						</div>
						<h2>
							I'm a Product Designer working remotely from 24°C Dublin, Ireland.
						</h2>
						<h3>
							Over the past 12+ years, I've worked in various areas of digital
							design, including front-end development, email, marketing, and app
							UI/UX. I'm proud to have worn many hats. These days, I focus on
							building Help Scout's knowledge base and AI tools as a Senior
							Product Designer.
						</h3>
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
        async mounted(){

        }
	}
</script>
