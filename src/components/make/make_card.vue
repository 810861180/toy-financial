<template>
    <div>
        <div class="card">
            <p class="title">{{ card.title }}</p>
            <span class="span1">{{ card.span1 }}<i class="el-icon-arrow-right"></i></span>
            <div class="bgimg">
                <div class="card_div">
                    <p class="card_p1">{{ card.span2.number}}</p><span class="card_span">%</span>
                </div>
                <div class="hr"></div>
                <p class="card_p2">{{ card.span2.p}}</p>
                <p class="card_p3">{{ card.span2.span}}</p>
                <p class="card_btn">{{ card.span2.btn}}</p>
            </div>
            <div class="title2">
                {{ card.title2 }}
            </div>
            <div class="card_ul">
                <div class="card_li" v-for="item in card.ul" :key="item.id">
                    <p class="card_li_title">{{ item.title }}</p>
                    <p class="card_li_btn">{{ item.btn }}</p>
                    <p class="card_li_number">{{ item.number }}<span>%</span></p>
                    <p class="card_li_span">{{ item.span }}</p>
                </div>
            </div>
        </div>
        <div class="headline-color"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            card:{
                title:'小金库',
                span1:'更多理财产品',
                bgimg:'https://m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png',
                span2:{
                    number:'3.4220',
                    p:'七日年化收益',
                    span:'支付/缴费/优质理财/大额理财',
                    btn:'开启送礼包'
                },
                title2:'稳健灵活 小白精选',
                ul:[
                    {id:1, title:'月月盈', btn:'金融专享', number:'4.70', span:'近七日年化收益率'},
                    {id:2, title:'周期盈', btn:'理财精选', number:'4.60', span:'近七日年化收益率'},
                    {id:3, title:'五年盈', btn:'长期稳健', number:'5.80', span:'历史年化投资回报率'}
                ]
            }
        }
    }
}
</script>

<style scoped>
    .card{
        width: 92%;
        margin: 2.5rem auto 0 auto;
        /* padding-bottom: 1.25rem; */
    }
    .title{
        font-size: 1.125rem;
        font-weight: bold;
        display: inline-block;
    }
    .span1{
        font-size: .875rem;
        color: grey;
        float: right;
    }
    .bgimg{
        background: url('https://m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png') no-repeat;
        background-size:100%;
        width: 100%;
        height: 6.25rem;
        margin-top: 1.1rem;
        position: relative;
    }   
    .bgimg p{
        display: inline-block;
        font-size: .75rem;
        color: white;
    }
    .bgimg .card_div{
        position: absolute;
        left: .9375rem;
        top: .625rem;
    }
    .bgimg .card_p1{
        font-size: 1.75rem;
        font-weight: bold;
    }
    .bgimg .card_p2{
        position: absolute;
        left: .9375rem;
        top: 3.4375rem;
    }
    .bgimg .card_p3{
        position: absolute;
        left: .9375rem;
        top:4.6875rem;
        opacity: .6;
    }
    .bgimg .card_btn{
        position: absolute;
        top: 0;
        right: 0;
        width: 10.35rem;
        height: 6.25rem;
        line-height: 6.25rem;
        background: url('https://m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png') 50% no-repeat;
        background-size: cover;
        text-align: center;
    }
    .bgimg .card_span{
        font-size: .75rem;
        color: white;
        font-weight: bold;
    }
    .hr{
        position: absolute;
        left: .9375rem;
        top: 2.9375rem;
        height: .0625rem;
        width: 40%;
        background: hsla(0,0%,100%,.3);;
    }
    .title2{
        font-size: .875rem;
        height: 3.125rem;
        line-height: 3.125rem;
        width: 100%;
    }
    .card_ul{
        width: 100%;
        height: 7.8125rem;
        padding-bottom: 1.25rem;
    }
    .card_li{
        float: left;
        display: inline-block;
        width: 30%;
        height: 100%;
        margin-right: .625rem;
        box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
    }
    .card_li_title{
        display: inline-block;
        margin-left: 1.25rem;
        margin-top: 1.1rem;
    }
    .card_li_btn{
        font-size: .75rem;
        background: rgb(84, 136, 255);
        color: white;
        display: inline-block;
        border-radius: .625rem;
        margin: .3125rem 0 .125rem 1.25rem;
    }
    .card_li_number{
        font-size: 1.375rem;
        font-weight: bold;
        color: red;
        display: inline-block;
        margin-left: 1.25rem;
    }
    .card_li_number span{
        font-size: 1rem;
        font-weight: bold;
        color: red;
    }
    .card_li_span{
        font-size: .75rem;
        color: grey;
        display: inline-block;
        margin-left: 1.25rem;      
    }
</style>
