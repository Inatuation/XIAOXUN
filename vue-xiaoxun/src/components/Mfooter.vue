<template>
  <div id="Mfooter">
    <img class="shouhou" src="../assets/images/Mall_shouhou.jpg" alt>
    <div>
      <h2>联系我们</h2>
      <div class="contacts">
        <div>
          <img class="bookPeg" src="../assets/images/Mall_contactImg.jpg" alt>
          <h3>商城客服中心</h3>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-p_lianxirenguanli"></use>
          </svg>
          <p>
            <span>在线时间： 09：00-18：00</span>
          </p>
          <p>
            <span>在线客服：</span>
            <a href="javascript:;">点击联系</a>
          </p>
        </div>
      </div>
      <div class="contacts">
        <div>
          <h3>
            申请维修
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huaban-"></use>
            </svg>
          </h3>
          <p>
            <span>微信公众号：小寻实验室-服务-申请维修</span>
          </p>
          <p>
            <span>维修进度查询：4000-908-508</span>
          </p>
        </div>
      </div>
      <div class="contacts contactsNO">
        <div>
          <h3>
            投诉建议
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youjian2"></use>
            </svg>
          </h3>
          <p>
            <span>商城店长： lvchunguang@longcheer.com</span>
          </p>
        </div>
      </div>
    </div>
    <div class="Mfooter_suppor"><span>由XunKids提供技术支持</span></div>
  </div>
</template>


<style lang="scss" scoped>
#Mfooter {
  width: 85%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 27px;
  .shouhou {
    width: 100%;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  .contacts {
    width: 100%;
    margin: 0 auto;
    border-bottom: 2px dashed #ccc;
    position: relative;
    padding:10px 0 10px 0;
    .bookPeg {
      width: 22px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 0;
    }
    h3 {
      display: inline-block;
      line-height: 40px;
      color: #FF6320;
      font-weight:100;
    }
    p {
        font-size: 14px;
        a{
            color: #61749F;
        }
    }
  }
  .contactsNO{
      border:0;
  }
  .Mfooter_suppor{
      width: 100%;
      height: 30px;
      background: #F5F5F5;
      color: rgb(51, 51, 51);
      line-height: 30px;
      text-align: center;
      font-size: 12px;
  }
}
</style>
