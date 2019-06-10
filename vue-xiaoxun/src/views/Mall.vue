<template>
  <div id="Mall">
    <Msearch/>
    <Mbanner/>
    <Mmain/>
    <Mfooter />>
  </div>
</template>

<script>
import "../assets/Mallicon";//icon.js
import Msearch from '../components/Msearch.vue';
import Mbanner from '../components/Mbanner.vue';
import Mmain from '../components/Mmain.vue';
import Mfooter from '../components/Mfooter.vue';
export default {
  components : {
    Msearch,
    Mbanner,
    Mmain,
    Mfooter,
  }
};
</script>



<style lang="scss" scoped>
#Mall {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

