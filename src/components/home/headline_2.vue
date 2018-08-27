<template>
    <div>
        <div class="headline-color"></div>
        <div class="div">
            <div class="headline_title">- {{ headlineTwo.title }} -</div>
            <div class="add">更多尖货 ></div>
            <!-- <div v-for="item in headlineTwo.url" :key="item.id" class="img">
                <img :src="item.url" alt="">
            </div> -->

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in headlineTwo.url" :key="item.id">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'; 
export default {
    props: {
        headlineTwo: Object
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          freeMode : true,
        })
    }
}
</script>

<style scoped>
    .div{
        position: relative;
        width: 100%;
        float: left;
    }
    .add{
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: .875rem;
        position: absolute;
        top: 0;
        right: 5%;
        color: grey;
    }
    .swiper-container{
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .swiper-wrapper{
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        width: 7.8125rem!important;
        height: auto!important;
        margin-left: .5rem;
    }
    .swiper-slide img{
        width: 100%;
    }

</style>
