<template>
  <header>
    <div id="header" v-text="titleName">
    </div>
      <svg v-if="titlelogo" class="icon fl" aria-hidden="true">
        <use xlink:href="#icon-buoumaotubiao09"></use>
      </svg>
      <svg v-if="titlelogo" class="icon fr" aria-hidden="true">
        <use xlink:href="#icon-zhuye"></use>
      </svg>
  </header>
</template>

<script>
import '../assets/headericon.js'
export default {
  data() {
    return {
      title: ""
    };
  },
  computed: {
    titleName() {
      return this.$store.state.title;
    },
    titlelogo(){
      return this.$store.state.homeList.logo;
    }
  },
  methods : {

  }
};
</script>

<style lang="scss" scoped>
header{
    height: 45px;
    width: 100%;
    position: relative;
    background: #f56c40;
  #header {
    width: 100px;
    margin: 0 auto;
    line-height: 45px;
    text-align: center;
    color: #fff;
  }
  .icon{
    font-size:20px;
    position: absolute;
    margin-top:-10px;
  }
    .fl{
      left: 10px;
      top: 50%;
    }
    .fr{
      right: 10px;
      top: 50%;
    }
}

</style>

