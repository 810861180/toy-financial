<template>
    <div>
        <div class="make">
            <div class="gost_btn">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t23131/214/1894630167/24834/62aa0256/5b6c272eN25b66749.gif?width=100&height=100">
            </div>
            <top></top>
            <makeList1></makeList1>
            <makeCard></makeCard>
            <makeCard2></makeCard2>
        </div>
    </div>
</template>

<script>
import top from '../../components/make/top.vue'
import makeList1 from '../../components/make/makeList_1.vue'
import makeCard from '../../components/make/make_card.vue'
import makeCard2 from '../../components/make/make_card_2.vue'
export default {
    components:{
        top,
        makeList1,
        makeCard,
        makeCard2
    }
}
</script>

<style scoped>
    .make{
        width: 100%;
        position: relative;
    }
    .gost_btn{
        width: 3.125rem;
        height: 3.125rem;
        position: fixed;
        bottom: 8rem;
        right: 1rem;
        z-index: 9999;
    }
    .gost_btn img{
        width: 100%;
    }
</style>
