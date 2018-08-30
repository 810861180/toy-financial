<template>
    <div>
        <div>
            <div class="top">
                <div><img src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" class="top_img"></div>
                <div class="right"><span class="span_right">会员福利</span><img class="img_right" :src="img_" alt=""></div>
            </div>
            <div class="headline-color"></div>
            <div class="user">
                <ul v-for="item in user" :key="item.id" class="user_ul">
                    <li class="user_li">
                        <img class="user_img1" :src="item.img">
                        <span class="user_span1">{{ item.title }}</span>
                        <span class="user_span2">{{ item.span }}</span>
                        <img class="user_img2" :src="img_">
                    </li>
                    <div class="user_div" v-show="item.hr"></div>
                </ul>
            </div>
            <div class="headline-color"></div>
            <div class="foot_1">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70" class="foot_img">
                <span class="foot_span1">实名认证</span>
                <img :src="img_" class="foot_img2">
            </div>
            <div class="headline-color"></div>
            <div class="foot_1">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70" class="foot_img">
                <span class="foot_span1">帮助中心</span>
                <img :src="img_" class="foot_img2">
            </div>
            <div class="headline-color"></div>
            <div class="user_footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            img_:'https://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png',
            user:[
                {id:1, img:'https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70', title:'我的资产', span:'查看全部资产', hr:true},
                {id:2, img:'https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70', title:'我的优惠券', span:'查看全部', hr:true},
                {id:3, img:'https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90', title:'我的金币', span:'赚金币兑好物', hr:true},
                {id:4, img:'https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90', title:'我的金条', span:'查看额度', hr:true},
                {id:5, img:'https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70', title:'我的借钱', span:'查看全部产品', hr:true},
                {id:6, img:'https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70', title:'我的白条', span:'去提额', hr:true},
                {id:7, img:'https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70', title:'我的众筹', span:'查订单/物流', hr:true},
                {id:8, img:'https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70', title:'我的保障', span:'全方位保障', hr:false},
            ],
        }
    }
}
</script>

<style scoped>
    .top{
        width: 100%;
        height: 4.375rem;
        position: relative;
    }
    .user_footer{
        height: 3.125rem;
        width: 100%;
        margin-top: .625rem;
    }
    .top_img{
        width: 3.125rem;
        height: 3.125rem;
        margin: .625rem 0 0 1.25rem
    }
    .right{
        height: 1.875rem;
        line-height: 1.875rem;
        display: inline-block;
        position: absolute;
        right: 1.3125rem;
        top: 50%;
        color: #999;
        margin-top: -.9375rem
    }
    .span_right{
        font-size: .875rem; 
    }
    .img_right{
        width: .4375rem;
        display: inline-block;
        margin-left: .9375rem
    }


    .user{
        margin-top: .625rem;
    }
    .user_ul{
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
    }
    .user_li{
        width: 100%;
        height: 3.5rem;
        list-style: none;
    }
    .user_img1, .foot_img{
        width: 1.5rem;
        line-height: 3.5rem;
        display: inline-block;
        position: absolute;
        top:1rem;
        left: 1.25rem;
    }
    .user_span1, .foot_span1{
        line-height: 3.5rem;
        display: inline-block;
        position: absolute;
        left: 3.5rem;
    }
    .user_span2{
        line-height: 3.5rem;
        font-size: .875rem;
        color: #999;
        display: inline-block;
        position: absolute;
        right: 2.5rem;
    }
    .user_img2, .foot_img2{
        height: .875rem;
        line-height: 56px;
        display: inline-block;
        position: absolute;
        top:1.3125rem;
        right: 20px;
    }
    .user_div{
        height: .0625rem;
        width: 84.5%;
        margin-left: 15.5%;
        background: #eee;
    }

    .foot_1{
        height: 3.5rem;
        width: 100%;
        margin-top: .625rem;
        position: relative;
    }
</style>
