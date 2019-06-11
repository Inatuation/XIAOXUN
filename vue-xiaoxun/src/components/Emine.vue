<template>
    <div id="Emain">
        <a class="Emain_login">
            <img class="headImg" src="../assets/images/Elogin.jpg" alt="">
            点击登录
            <img class="youjiantou" src="../assets/images/youjiantou.png" alt="">
        </a>
        <a class="Emain_option Emain_optionBD">
            <img class="optionImg" src="../assets/images/Ewatch.jpg" alt="">
            <img class="youjiantou" src="../assets/images/youjiantou.png" alt="">
            添加手表
        </a>
        <a class="Emain_option">
            <img class="optionImg" src="../assets/images/Eguanyu.jpg" alt="">
            <img class="youjiantou" src="../assets/images/youjiantou.png" alt="">
            关于
        </a>
    </div>
</template>


<style lang="scss" scoped>
#Emain{
    width: 100%;
    height: auto;
    padding: 30px 20px 0 20px;
    .youjiantou{
        width: 12px;
        height: 12px;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top:-6px;
    }
    .Emain_login{
        width: 100%;
        display: block;
        text-decoration:none;
        font-size: 20px;
        position: relative;
        margin-bottom: 30px;
        .headImg{
            width: 60px;
            height: 60px;
            display: inline-block;
            vertical-align:middle;
        }
    }
    .Emain_option{
        width: 100%;
        display: block;
        text-decoration:none;
        position: relative;
        font-size: 14px;
        padding:15px 0 15px 0;
        .optionImg{
            width: 24px;
            height: 24px;
            display: inline-block;
            vertical-align:middle;
        }
    }
    .Emain_optionBD{
        border-bottom:1px solid #ccc;
    }
}
</style>

