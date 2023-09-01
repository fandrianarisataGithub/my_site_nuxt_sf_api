<template>
	<header class="layout-header" :class="{'opened' : isMenuOpened}">
		<nav>
			<div class="links-pages">
        <ul>
            <li><nuxt-link to="/" class="h3 button draw">Accueil</nuxt-link></li>
            <li><nuxt-link to="/about" class="h3 button draw">À propos</nuxt-link></li>
            <li><nuxt-link to="/blogs" class="h3 button draw">Blogues</nuxt-link></li>
            <li><nuxt-link to="/mes-services" class="h3 button draw">Mes services</nuxt-link></li>
            <li><nuxt-link to="/contact" class="h3 button draw">Contact</nuxt-link></li>
        </ul>
      </div>
			<div class="social-container">
        <ul class="social">
          <li>
            <a href="#" class="h4 button spin circle"><fa :icon="['fab', 'facebook']" /></a>
          </li>
          <li>
            <a href="#" class="h4 button draw"><fa :icon="['fab', 'linkedin']" /></a>
          </li>
          <li>
            <a href="#" class="h4 button spin circle"><fa :icon="['fab', 'github']" /></a>
          </li>
        </ul>
        <ul class="social centered">
          <li>
            <a href="#" class="h5 button spin circle"><fa :icon="['fas', 'phone']" /></a>
          </li>
          <li>
            <a href="#" class="h5 button draw"><fa :icon="['fas', 'envelope']" /></a>
          </li>
        </ul>
      </div>
		</nav>
	</header>
</template>
<script>
		export default {
			props : ['isMenuOpened'],
		}
</script>
