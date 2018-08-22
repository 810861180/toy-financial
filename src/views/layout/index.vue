<template>
    <div style="width:100%;">
        <div class="footer">
            <div @click="home"><img src="../../assets/a1.png" alt=""><p>首页</p></div>
            <div @click="make"><img src="../../assets/a2.png" alt=""><p>赚钱</p></div>
            <div><img src="../../assets/a3.png" alt=""><p>借钱</p></div>
            <div><img src="../../assets/a4.png" alt=""><p>省钱</p></div>
            <div><img src="../../assets/a5.png" alt=""><p>金融会员</p></div>
        </div>

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        make() {
            this.$router.push('/make')
        }
    }
}
</script>

<style>

</style>