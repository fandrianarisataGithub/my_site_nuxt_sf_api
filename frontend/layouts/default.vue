<template>
	<div>
    <div class="button-menu" @click="toggleMenu">
      <Menu :menuState="isMenuOpened"/>
    </div>
		<Header :isMenuOpened = "isMenuOpened" @closeTheMenu="toggleMenu"/>
    <div class="container">
        <Nuxt />
    </div>
	</div>
</template>
<script>
	export default {
		name : 'Default',
    data(){
        return{
          isMenuOpened : false
        }
    },
    watch:{
      $route(){
        this.isMenuOpened = false;
      }
    },
    methods: {
        toggleMenu(){
          this.isMenuOpened = !this.isMenuOpened
        }
    }
	}
</script>
