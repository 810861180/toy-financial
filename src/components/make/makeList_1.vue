<template>
    <div class="list">
        <list1 :rowmos='rowmo'></list1>
        <div class="fri">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t23461/98/2382557904/40039/5f7d034a/5b7e9054N991af2f5.jpg?width=750&height=280" alt="">
        </div>
        <div class="ticket">{{ ticket }}</div>
        <div class="card">
            <div class="left">
                <p class="left_p">{{ or }}</p><span>%</span>
                <p class="left_p2">近一年涨跌幅</p>
                <div class="left_hr"></div>
                <div class="left_div">立即购买</div><i class="el-icon-caret-right"></i>
            </div>
            <div class="right">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in right" :key="item.id">
                            <img :src="item.url" class="rimg">
                            <span class="rspan">{{ item.span }}</span>
                        </div>
                    </div>
                </div>
                <div class="right_">
                    <span class="rsps">为你推荐</span>
                    <p class="ciss">
                        <i class="el-icon-arrow-right"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import list1 from '../home/list_1.vue'
export default {
    components:{
        list1
    },
    data() {
        return {
            ticket:'100-99',
            or:'13.99',
            rowmo:[
                {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t19825/175/2716312753/5076/dfe2d74f/5b7cc241N65ff1885.png?width=90&height=90', span1:'领红包', span2:'', color1:'black', color2:'', size:'.75rem'},
                {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t24682/140/813231673/5159/f8133cd6/5b7cc24fNb15a2746.png?width=90&height=90', span1:'领福利', span2:'', color1:'black', color2:'', size:'.75rem'},
                {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t25789/23/702574804/4169/de69ccb0/5b7cc25bN4bcd4087.png?width=90&height=90', span1:'领券', span2:'', color1:'black', color2:'', size:'.75rem'},
                {id:4, url:'https://img12.360buyimg.com/jrpmobile/jfs/t24289/19/2403404444/4856/13f8bcb9/5b7cc264Nb9e090f2.png?width=90&height=90', span1:'支付抽奖', span2:'', color1:'black', color2:'', size:'.75rem'},
                {id:5, url:'https://img12.360buyimg.com/jrpmobile/jfs/t22759/360/2331671780/3943/bed46aef/5b7cc26fN8d6ccb0d.png?width=90&height=90', span1:'全部', span2:'', color1:'black', color2:'', size:'.75rem'}
            ],
            right:[
                {id:1, span:'5折首发 黑科技减肚子神器', url:'https://img12.360buyimg.com/jrpmobile/jfs/t23854/78/2345368511/32416/5461a019/5b7cbd67Nfb18f49c.jpg?width=160&height=160'},
                {id:2, span:'券后价169元限量购 运动休闲鞋', url:'https://img12.360buyimg.com/jrpmobile/jfs/t24898/128/793801673/12037/e514bbf4/5b7cbd83N3a068e3d.jpg?width=160&height=160'},
                {id:3, span:'26元超值 神奇方便的磁吸充电线', url:'https://img12.360buyimg.com/jrpmobile/jfs/t23962/300/2337390444/24336/8b59ce27/5b7cbd22Nf45089a3.jpg?width=160&height=160'},
                {id:4, span:'众筹价立减400 全场景面包沙发', url:'https://img12.360buyimg.com/jrpmobile/jfs/t24064/323/2369551871/31041/4ca7cef6/5b7cbd40N2fd795c5.jpg?width=160&height=160'},
                {id:5, span:'128元抢 手自一体精密螺丝刀套装', url:'https://img12.360buyimg.com/jrpmobile/jfs/t22459/107/2332782335/22841/e8e42731/5b7cbd9bNa4cd75ea.jpg?width=160&height=160'}
            ]
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container',{
            autoplay:true,
            delay: 1000,
            direction:'vertical',
        })
    }
}
</script>

<style scoped>
    .list{
        position: relative;
    }
    .ticket{
        color:white;
        background: #FA8072;
        font-size: .75rem;
        display: inline-block;
        border-radius: .625rem;
        position: absolute;
        top:.9375rem;
        left: 50%;
    }
    .card{
        width: 92%;
        margin: 0 auto;
        height: 6.25rem;
    }
    .left{
        height: 100%;
        width: 36.5%;
        border-radius: .1875rem;
        display: inline-block;
        background: rgb(255, 98,23);
        color: white;
    }
    .left span{
        font-size: .75rem;
    }
    .left_p{
        font-weight: bold;
        font-size: 2.2rem;
        display: inline-block;
        margin-left: .625rem;
    }
    .left_p2{
        font-size: .75rem;
        margin-left: .75rem;
    }
    .left_hr{
        width: 70%;
        margin: .25rem 0 .25rem .75rem;
        height: .0625rem;
        background: hsla(0,0%,100%,.3);;
    }
    .left_div{
        font-size: .75rem;
        margin-left: .75rem;
        display: inline-block;
        padding-right: 1.25rem;
    }
    .right{
        height: 100%;
        width: 61.5%;
        float: right;
        border-radius: .1875rem;
        background: rgb(68, 101, 245);
        position: relative;
    }
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .rimg{
        width: 5rem;
        display: inline-block;
        float: left;
        margin: .625rem .625rem 1.25rem .625rem;
    }
    .rspan{
        display: inline-block;
        font-size: .75rem;
        color:white;
        width: 44%;
        float: left;
        margin-top: .625rem
    }
    .right_{
        z-index: 9;
        color: white;
        font-size: .75rem;
        position: absolute;
        bottom: .5rem;
        right: .5rem;
    }
    .rsps{
        display: inline-block;
        padding-right: 20px;
        vertical-align: sub;
    }
    .ciss{
        display: inline-block;
        height: 2.1875rem;
        width: 2.1875rem;
        border-radius: 2.1875rem;
        background: rgb(90, 227, 255);
        text-align: center;
        line-height: 2.1875rem;
    }
    .fri{
        width: 100%;
        height: 100%;
    }
    .fri img{
        width: 100%;
    }
</style>
