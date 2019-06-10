<template>
  <div class="home">
    <Hbanner/>
    <Hcont/>
  </div>
</template>
<script lang="ts">
import '../assets/base.css'; // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import Hheader from '@/components/Hheader.vue'; // @ is an alias to /src
import Hbanner from '@/components/Hbanner.vue'; // @ is an alias to /src
import Hcont from '@/components/Hcont.vue'; // @ is an alias to /src

@Component({
  components: {
    Hbanner,
    Hcont,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
 body{
    font-size: 14px;
    color: #333;
}
</style>



