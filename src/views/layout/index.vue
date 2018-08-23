<template>
    <div style="width:100%;">
        <div class="footer">
            <div v-for="item in paths" :key="item.id" @click="goto(item.path)">
                <img :src="item.urlA">
                <p :style="{color:item.color}">{{ item.name }}</p>
            </div>
            <!-- <div @click="goto('/make')"><img :src="url2"><p :style="{color:color2}">赚钱</p></div>
            <div><img src="../../assets/a3.png" alt=""><p>借钱</p></div>
            <div><img src="../../assets/a4.png" alt=""><p>省钱</p></div>
            <div><img src="../../assets/a5.png" alt=""><p>金融会员</p></div> -->
        </div>

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            paths:[
                {   
                    id: 1,
                    path: '/', 
                    name: '首页',
                    color: 'gray',
                    urlA:'https://img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60',
                    urlB:'https://img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&height=60'
                    
                },
                {   
                    id: 2,
                    path: '/make', 
                    name: '赚钱',
                    color: 'gray',
                    urlA:'https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60',
                    urlB:'https://img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60'
                },
                {   
                    id: 3,
                    path: '/borrow', 
                    name: '借钱',
                    color: 'gray',
                    urlA:'https://img12.360buyimg.com/jrpmobile/jfs/t18640/141/744623906/1296/82809719/5aa79389N46ec948f.png?width=40&height=40',
                    urlB:'https://img12.360buyimg.com/jrpmobile/jfs/t10717/7/1897882784/3005/9f66e191/59e9d826Nadb4e6db.png?width=60&height=60'
                },
                {   
                    id: 4,
                    path: '/save', 
                    name: '省钱',
                    color: 'gray',
                    urlA:'https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56',
                    urlB:'https://img12.360buyimg.com/jrpmobile/jfs/t19663/262/787103169/1654/ffffd4b/5aaa44adN4d5e3560.png?width=56&height=56'
                },
                {   
                    id: 5,
                    path: '/banking', 
                    name: '金融会员',
                    color: 'gray',
                    urlA:'https://img12.360buyimg.com/jrpmobile/jfs/t11797/326/212754817/2046/ad0e8dc1/59e9d830N1383ce43.png?width=60&height=60',
                    urlB:'https://img12.360buyimg.com/jrpmobile/jfs/t11191/356/198417818/3320/c18da9bd/59e9d86aN8d1daea3.png?width=60&height=60'
                },
            ],
            
            
        }
    },
    methods: {
        goto(path) {
            this.$router.replace(path)
        }
    }
}
</script>

<style scoped>

</style>