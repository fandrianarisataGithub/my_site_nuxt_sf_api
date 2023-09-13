<template>
	<div class="bloc-agile">
		<agile :options="options">
			<div v-for="(n, i) in 6" class="slide" :class="'slide--' + n" :key="i">
				<div class="unite-slide">
					<div class="image">
						<img
							src="~/assets/images/perso/home.png"
							alt="sata fenitriniaina feni"
						/>
					</div>
					<div class="recommandation">
						<div class="text">
							<q>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas rerum exercitationem
								pariatur quisquam! Pariatur?
							</q>
						</div>
						<div class="name-rec">
							Rakoto be
						</div>
						<div class="role-rec">
							Chef ...
						</div>
					</div>
				</div>
			</div>
		</agile>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			options: {
				infinite: true,
				slidesToShow: 1,
				navButtons: true,
				dots: true
			}
		}
	}
}
</script>
<style lang="sass">
	// Basic VueAgile styles
	.agile
		margin-top: 20px

		&__actions
			margin-top: 20px

		&__nav-button
			background: transparent
			border: none
			color: #ccc
			cursor: pointer
			font-size: 24px
			transition-duration: .3s
			&:hover
				color: #888

		&__dot
			margin: 0 10px

			button
				background-color: #eee
				border: none
				border-radius: 50%
				cursor: pointer
				display: block
				height: 10px
				font-size: 0
				line-height: 0
				margin: 0
				padding: 0
				transition-duration: .3s
				width: 10px

			&--current,
			&:hover
				button
					background-color: #888

	// Slides styles
	.slide
		align-items: center
		color: #fff
		display: flex
		font-size: 32px
		font-weight: 300
		height: 200px
		justify-content: center

</style>
