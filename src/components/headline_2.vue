<template>
    <div>
        <div class="headline-color"></div>
        <div class="div">
            <div class="headline_title">- {{ headlineTwo.title }} -</div>
            <div class="add">更多尖货 ></div>
            <div v-for="item in headlineTwo.url" :key="item.id" class="img">
                <img :src="item.url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    props: {
        headlineTwo: Object
    },
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
    .img{
        width: 30%;
        float: left;
        margin-left: 3%;
    }
    .img img{
        width: 100%;
    }

</style>
