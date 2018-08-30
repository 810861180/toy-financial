<template>
    <div class="div">
        <div class="headline-color"></div>
        <div class="add">
            <div class="headline_title">- {{ headlineFour.headline_title }} -</div>
            <div class="imgs">
                <img :src="item.url" v-for="item in headlineFour.url" :key="item.id">
            </div>
            <div class="list">
                <div v-for="item in headlineFour.listUrl" :key="item.id"><img :src="item.url" alt=""><p>{{ item.span }}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        headlineFour: Object
    }

}
</script>

<style scoped>
    .div{
        float: left;
        background: white;
    }
    .imgs{
        width: 100%;
        background: white;
        margin-top: .625rem;
    }
    .imgs img{
        width: 50%;
    }
    .list{
        width: 100%;
        display: flex;
        text-align: center;
        margin: 1.875rem 0 .125rem 0;
    }
    .list div{
        flex: 1;
    }
    .list div img{
        width: 50%;
    }
    .list div p {
        font-size: .875rem;
        color: grey;
    }
</style>
