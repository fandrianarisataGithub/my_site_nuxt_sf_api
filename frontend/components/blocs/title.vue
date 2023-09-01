<template>
  <div class="bloc-title" data-scroll-section style="display:flex;">
    <h3 v-for="(item, index) in createTitleTextValue"
      :key="index"
      data-scroll :data-scroll-delay="item.delay" :data-scroll-speed="speed"
    >{{ (item.textValue == "" || item.textValue == " ") ? "&nbsp;" : item.textValue }}</h3>
  </div>
</template>
<script>
  export default {
    props: ['value', 'number', 'speed'],
    data(){
      return{
        titleValue : []
      }
    },
    computed: {
      createTitleTextValue(){
        var startDelay = 0.04;
        var textSplited = this.customSplit(this.value);
        var result = [];
        for(var i=0; i< textSplited.length; i++){
          startDelay += 0.01;
          result.push({delay: startDelay, textValue: textSplited[i]});
        }
        return result;
      }
    },
    mounted(){
      //console.log(this.$refs.scroller.locomotive);
    },
    methods:{
      customSplit(chaine) {
        console.log(chaine)
        const tableau = [];

        for (let i = 0; i < chaine.length; i++) {
          tableau.push(chaine[i]);
        }

        return tableau;
      }
    }
  }
</script>
