<template>
  <article>
    <div class="Mall_searchL">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
      </a>
    </div>
    <div class="Mall_searchC">
      <input type="text" placeholder="搜索商品">
    </div>
    <div class="Mall_searchR">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </a>
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
      </a>
    </div>
  </article>
</template>


<style lang="scss" scoped>
article {
  width: 100%;
  height: 40px;
  line-height: 40px;
  .Mall_searchL,
  .Mall_searchC,
  .Mall_searchR {
    float: left;
    text-align: center;
    font-size: 20px;
  }
  .Mall_searchL {
    width: 50px;
  }
  .Mall_searchC {
    width: 240px;
    input {
      height: 30px;
      width: 100%;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      padding-left: 30px;
      vertical-align: middle;
      background: url("../assets/images/search.png") no-repeat;
      background-size: 20px 20px;
      background-position: 5px 5px;
    }
  }
  .Mall_searchR {
    width: 85px;
    a:nth-child(2) {
      margin-left: 20px;
    }
  }
}
</style>

