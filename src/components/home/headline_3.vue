<template>
    <div class="div">
        <div class="headline-color"></div>
        <div class="add">
            <div class="headline_title">- {{ headline_3.headline_title }} -</div>
        </div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in headline_3.url" :key="item.id">
                    <img :src="item.url" class="simg">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data() {
        return {
            headline_3:{
                headline_title:'保险保障',
                url:[
                    {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260'},
                    {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260'},
                    {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260'},
                    {id:4, url:'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260'},
                    {id:5, url:'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'}
                ]
            }
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            width: 125,
            slidesPerView :'auto',
            direction:'horizontal',
            grabCursor:true,
            autoplayDisableOnInteraction:false,
            mousewheelControl:true,
            autoHeight:true,
            speed:1000
        })
    }
}
</script>

<style scoped>
    .div{
        text-align: center;
    }
    .add{
        display: block;
    }
    .headline_title{
        float: left;
        display: inline;
    }
    .swiper-container{
        width: 100%;
        /* overflow: hidden; */
    }
    .swiper-slide{
        width: 7.8125rem!important;
        /* height: auto!important; */
        margin-left: 1rem;
        padding-bottom: 2.1rem;
    }
    .simg{
        width: 7.8125rem!important;
    }
</style>
