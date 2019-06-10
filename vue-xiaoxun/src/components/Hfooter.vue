<template>
  <footer>
    <ul class="footerNav">
      <li v-for="(a,index) in footerTab" :key="index">
        <router-link :to="a.rout">
          <div  @click="footerActive(index)" class="footerClick">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="index == footerAC ? a.icon2 : a.icon1"></use>
            </svg>
            <span v-text="a.name"></span>
          </div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerTab: [
        {
          name: "发现",
          rout: "/",
          icon1: "#icon-xingxing-copy",
          icon2: "#icon-xingxing-copy2"
        },
        {
          name: "商城",
          rout: "/mall",
          icon1: "#icon-shangpin-copy",
          icon2: "#icon-shangpin"
        },
        {
          name: "我的",
          rout: "/mine",
          icon1: "#icon-tuzi-copy-copy",
          icon2: "#icon-tuzi"
        }
      ],
      footerAC: 0
    };
  },
  methods: {
    footerActive(index) {
      this.footerAC = index;
      this.$store.state.title = this.footerTab[index].name
    }
  }
};
</script>



<style lang="scss" scoped>
footer {
  height: 47px;
  width: 100%;
  background: #f6f6f6;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  .footerNav {
    display: flex;
    height: 47px;
    width: 100%;
    li {
      float: left;
      flex: 1;
      font-size: 10px;
      a {
        display: block;
        width: 80px;
        height: 47px;
        margin: 0 auto;
        text-align: center;
        svg {
          font-size: 30px;
          line-height: 0px;
          text-align: center;
        }
        span {
          line-height: 10px;
          display: block;
          color: #7f7f7f;
        }
      }
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .footerClick{
      height: 47px;
  }
}
</style>

