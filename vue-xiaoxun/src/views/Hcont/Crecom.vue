<template>
  <main>
    <router-link to="/recommlist" class="newsList">
      <figure>
        <div @click="da" class="newsList_txt">
          <figcaption>如何有效辅助孩子调整情绪迎接期末考试？</figcaption>
          <p class="newsList_time">
            <span>小寻实验室</span>
            <span>今天</span>
          </p>
        </div>
        <img src="../../assets/images/CrecomImg.jpg" alt>
      </figure>
    </router-link>
  </main>
</template>

<script>
export default {
  methods : {
    da(){
      this.$store.state.homeList = {
        logo : true,
        footers : false,
      }
    }
  }
}
</script>


<style lang="scss" scoped>
main {
  height: 330px;
  overflow-y: auto;
  .newsList {
    height: 110px;
    width: 100%;
    display: block;
    padding-top: 10px;
    border-bottom: 1px solid #ccc;
    figure {
      width: 95%;
      margin: 0 auto;
      overflow: hidden;
      img {
        float: left;
        width: 110px;
        height: 90px;
      }
      .newsList_txt {
        float: right;
        height: 90px;
        position: relative;
        figcaption {
          width: 240px;
          padding-right: 10px;
          font-size: 16px;
          color: #000;
        }
      }
      .newsList_time {
        width: 240px;
        color: #b7b7b7;
        font-size: 12px;
        position: absolute;
        bottom: 0px;
        left: 0;
        span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
