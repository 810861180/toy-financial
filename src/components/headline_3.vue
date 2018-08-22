<template>
    <div class="div">
        <div class="headline-color"></div>
        <div class="add">
            <div class="headline_title">- {{ headline_3.headline_title }} -</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headline_3:{
                headline_title:'保险保障',
            }
        }
    }
}
</script>

<style scoped>
    .div{
        text-align: center;
    }
    .add{
        display: block;
    }
    .headline_title{
        float: left;
        display: inline;
    }
</style>
