<template>
  <main>
    <div class="main_goods">
      <h2>儿童早教益智</h2>
      <div class="main_biggoods">
        <a href="javascript:;"></a>
      </div>
      <div class="main_smagoods aw">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
      <div class="main_smagoods">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="main_goods">
      <h2>儿童生活周边</h2>
      <div class="main_biggoods">
        <a href="javascript:;"></a>
      </div>
      <div class="main_biggoods">
        <a href="javascript:;"></a>
      </div>
      <div class="main_smagoods aw">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
      <div class="main_smagoods">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="main_goods">
      <h2>配件专区</h2>
      <div class="main_smagoods aw">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
      <div class="main_smagoods">
        <figure>
          <img src="../assets/images/mallBanner.jpg" alt>
          <figcaption>
            <h3>小寻轮滑鞋1代</h3>
            <p>四重安全防护</p>
            <span>￥299</span>
            <del>￥499</del>
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>



<style lang="scss" scoped>
main {
  width: 100%;
  height: auto;
  padding: 0 10px 0 10px;
  .main_goods {
    width: 100%;
    height: auto;
    overflow: hidden;
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .main_biggoods {
      clear: both;
      height: 140px;
      width: 100%;
      margin-bottom: 10px;
      a {
        display: block;
        height: 100%;
        background: url("../assets/images/mallBanner.jpg");
        border-radius: 5px;
      }
    }
    .main_smagoods {
      width: 48%;
      float: Left;
      figure {
        height: 230px;
        width: 100%;
        clear: both;
        img {
          height: 130px;
          width: 100%;
          border-radius: 5px;
          margin-bottom: 5px;
        }
        figcaption {
          padding-left: 20px;
          line-height: 20px;
          h3 {
            font-size: 16px;
            color: #000;
          }
          p {
            font-size: 12px;
            color: #333;
          }
          span {
            font-size: 16px;
            color: #e28863;
          }
          del {
            font-size: 10px;
            color: #ccc;
          }
        }
      }
    }
    .aw {
      margin-right: 14px;
    }
  }
}
</style>
