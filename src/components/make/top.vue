<template>
    <div>
        <div class="top_div">
            <div class="top_img"><img :src="url"></div>
            <div>
                <carousel :carImgs='make_top'></carousel>
            </div>
            <div class="top_assets">
                <div class="member"><p>会员等级</p></div>
                <p class="text">立即登录，马上赚钱！</p>
                <div class="btn">签到</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import carousel from '../home/carousel.vue'

export default {
    components:{
        carousel
    },
    data() {
        return{
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t21946/193/1465725809/15772/5f47e465/5b2a3b82N6a3aec1d.png?width=750&height=120',
            make_top:{
                height:'12.5rem',
                url:[
                    {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t22582/337/2344752801/26381/2890a393/5b7d361cNadfac8c9.jpg?width=750&height=400'},
                    {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t24922/169/843975904/22984/669e09a3/5b7d363dN02901a43.jpg?width=750&height=400'},
                    {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t24958/160/845325199/40092/9771d117/5b7d3642N0d714fc8.jpg?width=750&height=400'},
                    {id:4, url:'https://img12.360buyimg.com/jrpmobile/jfs/t20407/326/1923370131/25194/67077d40/5b7d364fNc1d3355c.png?width=750&height=400'}
                ]
            },
            
        }
    }
}
</script>

<style scoped>
    .top_div{
        width: 100%;
    }
    .top_img{
        width: 100%;
        z-index: 999;
        position: absolute;
        top: 0;
    }
    .top_img img{
        width: 100%;
    }
    .top_assets{
        width: 90%;
        height: 4.0625rem;
        margin: 0 auto;
        border-radius: .1875rem;
        position: relative;
        background: white;
        margin-top: -.625rem;
        box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
        z-index: 10;
    }
    .member{
        display: inline-block;
        position: absolute;
        top:24%;
        left: .625rem;
        height: 50%;
        font-size: 12px;
        color: white;
        border-radius: .125rem;
        background: #c6a76f;
        box-shadow: 0 0.1875rem 0.25rem 0 hsla(41,44%,63%,.51);
    }
    .member p{
        padding-top: 16%;
    }
    .text{
        color: #c6a76f;
        display: inline-block;
        font-size: 14px;
        position: absolute;
        top: 35%;
        left: 20%;
    }
    .btn{
        height: 2.0625rem;
        line-height: 2.0625rem;
        text-align: center;
        width: 4.375rem;
        font-size: 12px;
        color: white;   
        display: inline-block;
        position: absolute;
        right: .625rem;
        top:24%;
        background: #c6a76f;
        border-radius: 20px;
        box-shadow: 0 0.1875rem 0.25rem 0 hsla(41,44%,63%,.51);
    }
</style>
