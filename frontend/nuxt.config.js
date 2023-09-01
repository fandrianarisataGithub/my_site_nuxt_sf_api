export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	ssr: true,
	head: {
		title: 'my_site_nuxt',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/main.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
    {src: '~/plugins/locomotive-scroll', mode: "client"},
		{src: '~/plugins/blocs'},
    {src: '~/plugins/vue-agile', mode: "client"}
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/fontawesome'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/google-fonts',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},
	googleFonts: {
		families: {
			// Spécifiez ici la police Google que vous souhaitez utiliser
			// Exemple avec la police 'Roboto'
			'Edu+SA+Beginner': true,
			// Vous pouvez ajouter plusieurs polices ici si nécessaire
		}
	},
	fontawesome: {
			component: 'Fa',
			suffix: false,
			icons: {
				solid: true,
				brands: true,
			},
	},
}
