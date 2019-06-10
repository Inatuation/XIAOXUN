<template>
  <header>
    <div id="header" v-text="titleName"></div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  height: 45px;
  width: 100%;
  background: #f56c40;
  line-height: 45px;
  text-align: center;
  color: #fff;
}
</style>


<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  computed : {
    titleName() {
      return this.$store.state.title;
    }
  },
};
</script>

