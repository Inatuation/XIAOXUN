<template>
  <div id="app">
    <Hheader/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Hfooter v-if="footerFn()"/>
  </div>
</template>


<script lang="js">
import Vue from 'vue';
import Hfooter from './components/Hfooter.vue';
import Hheader from './components/Hheader.vue';
import './assets/Footericon.js';
export default Vue.extend({
  components : {
    Hheader,
    Hfooter,
  },
  methods : {
    footerFn(){
      return this.$store.state.homeList.footers;
    }
  },
  // mounted(){
  //   console.log(this.$router.options.routes[0].children[1])
  //   this.$router.options.routes[0].children[1].path = 'crecom'
  //   console.log(this.$router.options.routes[0].children[1])
  // },
});
</script>




<style lang="scss">
.icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
     }
*{
  margin: 0;padding: 0;
}
</style>
