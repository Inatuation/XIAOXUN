<template>
  <div id="app">
    <Hheader/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Hfooter/>
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
