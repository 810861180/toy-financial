<template>
    <div>
        <div class="headline_title">- {{ headlineOne.headline_title }} -</div>
        <div class="details">
            <div class="detailsDiv" v-for="item in headlineOne.details" :key="item.id">
                <div class="detailsDiv2">
                    <p class="spanP">
                        <span class="span1">{{ item.span1 }}</span>
                        <span class="span2">{{ item.span2 }}</span>
                    </p>
                    <p class="p1">{{ item.p1 }}</p>
                    <p class="p2">{{ item.p2 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headlineOne: Object
    }
}
</script>

<style scoped>
    .details{
        width: 100%;
        margin: 0 auto;
    }
    .detailsDiv{
        width: 50%;
        height: 6.8125rem;
        float: left;
    }
    .detailsDiv2{
        margin-left: 10%;
    }
    .spanP{
        margin: 1.0625rem 0 .5rem 0;
    }
    .span1{
        font-size: .875rem;
        font-weight: bold;
    }
    .span2{
        font-size: .75rem;
        font-weight: 100;
        border: 1px solid #FF6A6A;
        color: #FF6A6A;
        padding: 0 .125rem 0 .125rem ;
    }
    .p1{
        font-size: 1.375rem;
        color: #FF6A6A;
        font-weight: bold;
    }
    .p2{
        font-size: .75rem;
        color: grey;
    }
</style>
