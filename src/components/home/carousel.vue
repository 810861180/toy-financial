<template>
    <div>
        <div class="carousel">
            <el-carousel :height="carImgs.height">
                <el-carousel-item v-for="item in carImgs.url" :key="item.id">
                    <img :src="item.url" style="height:100%;width:100%;">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carImgs:Object
    }
}
</script>

<style scoped>

</style>
