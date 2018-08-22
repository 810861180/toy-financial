<template>
    <div>
        <div class="carousel">
            <el-carousel height="176px">
                <el-carousel-item v-for="item in carImgs" :key="item.id">
                    <img :src="item.url" style="height:100%;width:100%;">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carImgs:Array
    }
}
</script>

<style scoped>

</style>
