<template>
    <div class="card">
        <div class="title">
            <span class="h3">{{ make_card_2.title_h3 }}</span>
            <span class="title_span">{{ make_card_2.title_span }}<i class="el-icon-arrow-right"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            make_card_2:{
                title_h3:'银行精选',
                title_span:'更多银行服务',
            }
        }
    }
}
</script>

<style scoped>
    .title{
        width: 92%;
        margin: 0 auto;
    }
    .h3{
        font-size: 1.125rem;
        font-weight: bold;
        display: inline-block;
        line-height: 3.75rem;
        height: 3.75rem;
    }
    .title_span{
        font-size: .875rem;
        color: grey;
        float: right;
        height: 3.75rem;
        line-height: 3.75rem;
        display: inline-block;
    }
</style>
