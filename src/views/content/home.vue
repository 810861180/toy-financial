<template>
    <div class="home">
        <herdss></herdss>
        <!-- <footers></footers> -->
        <carousel :carImgs='carImg'></carousel>
        <list1 :rowmos='rowmo'></list1>
        <headline1 :headlineOne="headline_1"></headline1>
        <headline2 :headlineTwo="headline_2"></headline2>
        <headline3></headline3>
        <headline4 :headlineFour="headline_4"></headline4>
        <customer></customer>
    </div>
</template>

<script>
import herdss from '../layout/herdss.vue'
import footers from '../layout/footers.vue'
import carousel from '../../components/home/carousel.vue'
import list1 from '../../components/home/list_1.vue'
import headline1 from '../../components/home/headline_1.vue'
import headline2 from '../../components/home/headline_2.vue'
import headline3 from '../../components/home/headline_3.vue'
import headline4 from '../../components/home/headline_4.vue'
import customer from '../../components/home/customer.vue'

export default {
    components: {
        herdss,
        footers,
        carousel,
        list1,
        headline1,
        headline2,
        headline3,
        headline4,
        customer
    },
    data() {
        return {
            carImg:{
                height:'11rem',
                url:[
                    {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t22663/237/2194255428/34052/d6b0becc/5b76c65aNbe7ff324.jpg?width=750&height=320'},
                    {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t25492/85/642955199/63906/1b479ef7/5b76c663N50852751.jpg?width=750&height=320'},
                    {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t25168/132/666519589/42798/4d66e0d3/5b76c666N516b4c54.jpg?width=750&height=320'},
                    {id:4, url:'https://img12.360buyimg.com/jrpmobile/jfs/t23326/10/2196252723/43329/bb5475d8/5b76c66bNb0d81855.jpg?width=750&height=320'}
                ]
            },
            rowmo:[
                {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132', span1:'优惠券', span2:'100-99券', color1:'', color2:'red', siez:''},
                {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132', span1:'领福利', span2:'', color1:'', color2:'', siez:''},
                {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132', span1:'抢钢镚', span2:'', color1:'red', color2:'', siez:''},
                {id:4, url:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135', span1:'白条提额', span2:'', color1:'', color2:'', siez:''}
            ],
            headline_1:{
                headline_title:'理财精选',
                details:[
                    {id:1, span1:'长乐盈', span2:'180天可质押', p1:'5.80%', p2:'近一年历史年化投资回报率'},
                    {id:2, span1:'京智0号', span2:'大数据赋能', p1:'6.00%', p2:'近1月历史年化投资回报率'},
                    {id:3, span1:'建信养老飞益鑫', span2:'1000起投', p1:'4.57%', p2:'近7日年化收益'},
                    {id:4, span1:'小白基金', span2:'超短期', p1:'4.50%', p2:'7日年化收益率'}
                ]
            },
            headline_2:{
                title:'众筹新品',
                url:[
                    {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t21691/233/2361780032/59932/8cb4ce42/5b5066e3Nb460c234.jpg?width=335&height=421'},
                    {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t24547/3/1113130809/37409/3e7d5038/5b5066f2N360c723a.jpg?width=335&height=421'},
                    {id:3, url:'https://img12.360buyimg.com/jrpmobile/jfs/t22696/182/1419336545/44627/3e46409d/5b5fcdb3N4c31020e.jpg?width=335&height=421'}
                ]
            },
            headline_4:{
                headline_title:'有车有钱',
                url:[
                    {id:1, url:'https://img12.360buyimg.com/jrpmobile/jfs/t22774/46/1735806175/76049/3a394283/5b690b9aN054ad12e.png?width=375&height=233'},
                    {id:2, url:'https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233'}
                ],
                listUrl:[
                    {id:1, span:'旅游', url:'https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90'},
                    {id:2, span:'医美', url:'https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90'},
                    {id:3, span:'房抵贷', url:'https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88'},
                    {id:4, span:'驾校', url:'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90'},
                    {id:5, span:'分期用', url:'https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88'}
                ]
            }
        }
    }

}
</script>

<style scoped>
    .home{
        width: 100%;
        margin-top: 3.125rem;
        position: relative;
    }
</style>
