<template>
    <nav>
        <ul>
            <li v-for="(a,index) in navList" :key="index" class="Navactive">
                <router-link :to="a.rout" v-text="a.name"></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            navList : [{
                name : '关注',
                rout : 'cfollow'
            },{
                name : '推荐',
                rout : 'crecom'
            },{
                name : '活动',
                rout : 'cactivity'
            },{
                name : '百科',
                rout : 'cency'
            },{
                name : '学习',
                rout : 'cstudy'
            },{
                name : '素质',
                rout : 'cquality'
            },{
                name : '家庭',
                rout : 'cfamily'
            },],
        }
    },      
}
</script>




<style lang="scss" scoped>
nav{
    width: 100%;
    height: 45px;
    background: #fff;
    font-size: 16px;
    color: #000;
    ul{
        box-shadow:0px 1px 3px #565656;
        width: 100%;
        display: flex;
        li{
            flex: 1;
            float: left;
            line-height: 45px;
            text-align: center;
        }
        .Navactive{
            color: #F56C40;
            border-bottom: 2px solid #F56C40;
        }
        a{
            display: block;
            font-size: 16px;
            color: #000;
            text-decoration: none;
        }
    }
}
</style>

