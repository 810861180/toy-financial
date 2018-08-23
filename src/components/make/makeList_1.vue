<template>
    <div class="list">
        <list1 :rowmos='rowmo'></list1>
        <div class="ticket">{{ ticket }}</div>
        <div class="card">
            <div class="left">
                <p class="left_p">{{ or }}</p><span>%</span>
                <p class="left_p2">近一年涨跌幅</p>
                <div class="left_hr"></div>
                <div class="left_div">立即购买</div><i class="el-icon-caret-right"></i>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<script>
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
        }
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
        width: 7.65rem;
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
        width: 13.5rem;
        float: right;
        border-radius: .1875rem;
        background: rgb(68, 101, 245);
    }
</style>
