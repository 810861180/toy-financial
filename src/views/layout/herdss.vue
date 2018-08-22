<template>
    <div style="width:100%;">
        <div class="herders">
            <div class="top">
                <el-button @click="login" type="text" style="margin-right:10px;color: grey;">注册</el-button>|<el-button  @click="login" type="text" style="color: grey;">登录</el-button>
            </div>
            <div class="logo">
                <img src="../../assets/jr-logo.png" alt="" class="logo">
            </div>
            <div class="appDload">
                <el-button type="danger" size="mini">APP下载</el-button>
            </div>
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
        login() {
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>
