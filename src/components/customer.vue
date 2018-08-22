<template>
    <div class="add">
        <div class="headline-color"></div>
        <div>
            <img class="img1" src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
        </div>
        <div class="custoer_img">
            <div v-for="item in customer.url" :key="item.id"><img :src="item.url"><p>{{ item.span }}</p></div>
        </div>
        <div v-for="item in customer.text" :key="item.id" class="text">
            <div class="hr"></div>
            <p>{{ item.text }}</p>
        </div>
        <div class="footers">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer:{
                url:[
                    {id:1, span:'客户端', url:'https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108'},
                    {id:2, span:'触屏版', url:'https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108'},
                    {id:3, span:'电脑板', url:'https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108'}
                ],
                text:[
                    {id:1, text:'Copyright © 2004-2018 京东JD.com 版权所有'},
                    {id:2, text:'投资有风险，购买需谨慎'},
                    {id:3, text:'京东金融平台服务协议'},
                    {id:4, text:'京东金融隐私政策'}
                ]
            }
        }
    }
}
</script>

<style scoped>
    .add{
        float: left;
        background: #F2F2F2;
    }
    .img1{
        width: 100%;
    }
    .custoer_img{
        width: 100%;
        display: flex;
        text-align: center;
        padding-top: 1.25rem;
        margin-bottom: .625rem;
    }
    .custoer_img div{
        flex: 1;
    }
    .custoer_img div img{
        width: 38%;
    }
    .custoer_img div p{
        font-size: .875rem;
        color: grey;
    }
    .text{
        text-align: center;
        height: 45px;
        line-height: 45px;
    }
    .text p{
        font-size: .75rem;
        color: grey;
    }
    .hr{
        height: .0625rem;
        width: 100%;
        background: #ddd;
    }
    .footers{
        height: 3.1875rem;
        width: 100%;
        background: #F2F2F2;
    }
</style>
