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
		<div class="locomotive-style vertical page-service">
			<div class="service-container" data-scroll-section>
				<div class="bloc-title-page" data-scroll>
					<h2>
						Serice
					</h2>
					<h1>
						MY SPECIALITIES
					</h1>
				</div>
				<ul class="list-specialities" >
					<li>
						<div class="title-gradient">WEB DESIGN</div>
						<div class="speciality-description">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercillam
								tempore nobis doloremque, mollitia quaerat?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercillam
								tempore nobis doloremque, mollitia quaerat?
							</p>
						</div>
					</li>
					<li>
						<div class="title-gradient">WEB DESIGN</div>
						<div class="speciality-description">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercillam
								tempore nobis doloremque, mollitia quaerat?
							</p>
						</div>
					</li>
					<li>
						<div class="title-gradient">WEB DESIGN</div>
						<div class="speciality-description">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercillam
								tempore nobis doloremque, mollitia quaerat?
							</p>
						</div>
					</li>
				</ul>
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
