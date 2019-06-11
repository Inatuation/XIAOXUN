<template>
    <nav>
        <ul>
            <li v-for="(a,index) in navList" :key="index" @click="actFn(index)" :class="index == act? 'Navactive' : ''">
                <router-link :to="a.rout" v-text="a.tab"></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            navList : [{
                tab : '关注',
                rout : 'cfollow'
            },{
                tab : '推荐',
                rout : '',
            },{
                tab : '活动',
                rout : 'cactivity'
            },{
                tab : '百科',
                rout : 'cency'
            },{
                tab : '学习',
                rout : 'cstudy'
            },{
                tab : '素质',
                rout : 'cquality'
            },{
                tab : '家庭',
                rout : 'cfamily'
            },],
            act : 1,
        }
    }, 
    methods : {
        actFn(index){
            this.act = index;
        }
    }     
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

