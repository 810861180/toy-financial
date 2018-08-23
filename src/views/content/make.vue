<template>
    <div class="make">
        <top></top>
        <makeList1></makeList1>
    </div>
</template>

<script>
import top from '../../components/make/top.vue'
import makeList1 from '../../components/make/makeList_1.vue'
export default {
    components:{
        top,
        makeList1
    }
}
</script>

<style scoped>
    .make{
        width: 100%;
        position: relative;
    }
</style>
