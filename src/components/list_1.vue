<template>
    <div>
        <div class="rowmo">
            <div class="rowmoDiv" v-for="item in rowmos" :key="item.id">
                <div><img :src="item.url" alt="" class="rowmoImg"></div>
                <span class="span1" :style="{color: item.color1}">{{ item.span1 }}</span>
                <span class="span2" :style="{color: item.color2}">{{ item.span2 }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rowmos:Array
    }
}
</script>

<style scoped>
    .rowmo{
        height: 5.5rem;
        display: flex;
        text-align: center;
        padding-top: 1.25rem;
        background: white;
    }
    .rowmoDiv{
        width: 25%;
        float: left;
        flex: 1;
    }
    .rowmoImg{
        height: 2.8125rem;
        width: 2.8125rem;
    }
    .span1{
        font-size: 14px;
        display: block;
        color: gray;
    }
    .span2{
        font-size: 12px;
    }
</style>