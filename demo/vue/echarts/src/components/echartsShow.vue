<template>
<div>
    <bar
        :etype = bartype
        :bardata = bardata
        :titletext = titletext
        :subtitletext = subtitletext
        :islegend = islegend
        :istoolbox = istoolbox
        :istooltip = istooltip
        :orienttype = orienttype
        :barWidth = barWidth
        :showXAxisLine = showXAxisLine
        :showYAxisLine = showYAxisLine
        :legendX = legendX
        :legendY = legendY
        :grid = grid
        :showSplitLine = showSplitLine
        :colorDef = colorDef
        style="height:500px;"
        ></bar>
        <bar
        :etype = bartype
        :bardata = bardata
        :colorDef = colorDef
        style="height:500px;"
    ></bar>
    <lines
        :etype = linetype
        :linedata = linedata
        :titletext = titletext
        :subtitletext = subtitletext
        :islegend = islegend
        :istoolbox = istoolbox
        :istooltip = istooltip
        :orienttype = orienttype
        :legendX = legendX
        :legendY = legendY
        :grid = grid
        :showSplitLine = showSplitLine
        :colorDef = colorDef
        style="height:500px;"
    >
    </lines>
    <lines
        :etype = linetype
        :linedata = linedata
        style="height:500px;"
    ></lines>
    <pie
        :piedata = piedata
        style="height:500px;"></pie>
    <mapcharts
        :mapdata = mapdata
        style="height:2000px;width:2000px"></mapcharts>
</div>
    
</template>

<script>
import bar from '../charts/bar'
import lines from '../charts/line'
import pie from '../charts/pie'
import mapcharts from '../charts/map'
export default {
    data(){
        return {
            bartype:'',
            linetype:'lines',
            linedata:{
                //line
                // title:'宽带',
                // yAxisName:'数量（万）',
                // xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                // seriesData:['1234','1765','1827','1967','2298','1967','2098','0','0','0','0','0']
               
               //lines
                title:'流失用户趋势',
                legendData:['WiFi告警的天翼网关数','流失用户数'],
                xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                seriesData:[
                    [355,315,248,312,311,346,373,356,0,0,0,0],
                    [164,165,146,155,154,154,163,172,0,0,0,0]
                ]
            },
            bardata:{
                // title:'组网潜客数量趋势',
                // xAxisData:['千兆双频>=500M','百兆双频>=200M','百兆单频>=100M'],
                // legendData:['质量指数'],
                // yAxisName:'',
                // seriesData:[10.0,20.0,30.0]

                /*verticalCascade*/
                // title:'分类能力开放调用趋势',
                // seriesName:'网关新增',
                // yAxisName:'数量（万）',
                // xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                // legendData:['终端稽核能力','可视化能力','网关能力','智慧营维工具'],
                // seriesData:[['10','20','30','40','50','60','30','0','0','0','0','0'],
                //             ['10','20','30','40','50','60','30','0','0','0','0','0'],
                //             ['10','20','30','40','50','60','30','0','0','0','0','0'],
                //             ['10','20','30','40','50','60','30','0','0','0','0','0']]
                title:'组网潜客数量趋势',
                xAxisData:['千兆双频>=500M','百兆双频>=200M','百兆单频>=100M'],
                legendData:['质量指数'],
                yAxisName:'',
                seriesData:[10.0,20.0,30.0]
            },
            titletext:'',
            subtitletext:'',
            islegend:true,
            istoolbox:true,
            istooltip:true,
            showXAxisLine:true,
            showYAxisLine:true,
            orienttype:'horizontal',
            barWidth:20,
            legendX:'center',
            legendY:'bottom',
            grid:{
                left: '10%',
                right: '10%',
                bottom: '20%',
                top: '20%',
                containLabel: true
            },
            showSplitLine:true,
            colorDef:{
                color: ["#E04F31", "#F49C31", "#3B87C3", "#5AC2E5", '#00405c'],
                titleColor: '#000080', //主标题颜色
                subTitleColor: '#8B2323',  //副标题颜色
                titleBgColor: '#fff', //主标题背景色
                legendColor: '#666', //图例文字颜色
                labelTextStyle: '#a2ebff',//图中文字颜色
                pieColorList: ['#5AC2E5', '#3B87C3', '#F49C31', '#E04F31', '#05455A', '#0E6F8F', '#055873', '#04314D', '#FFFFFF'], //饼图色块取值
                axisColor: "#a2ebff", //轴线色值
                splitLineColor: '#333',  //分隔线颜色
                transverseCascadeColorList: ['#003366', '#4876FF', '#4cabce'], //横向层叠柱状图色块取值
                barGradient: ['#41d6d4', '#1c87f1', '#1c87f1'],//横向柱状图色块渐变色取值
                normalBarColorList: ['#83bff6', '#188df0', '#188df0', '#2378f7'],
                lineColorList: ['rgb(0,0,0,0)', '#8decff'], //折线图颜色取值
                doubleYLinesColorList: ["#3B87C3", "#F49C31", "#56eff7", "#009c9f", '#005d85'], //双Y轴折线图颜色取值
                mapDataRangeTextColor: '#96989e', //图例文字颜色
                mapTextColor: '#00405c',  //地图中显示的省份文字颜色
                mapCityColor: '#F49C31',  //地图省份选中时颜色
                mapCityShadowColor: 'rgba(0, 0, 0, 0.7)',//地图省份选中时周围阴影 
                mapColorList:['#56eff7', '#009c9f', '#005d85', '#00405c'] // 地图dataRange颜色
            },
            piedata:[
                    {value:335, name:'北京'},
                    {value:310, name:'上海'},
                    {value:234, name:'广州'},
                    {value:135, name:'深圳'},
                    {value:148, name:'郑州'}
                ],

                mapdata: {
                    title: '网关分布热力图',
                    data_val: [
                        {
                            "apNum": "9472",
                            "name": "北京"
                        },
                        {
                            "apNum": "41",
                            "name": "香港"
                        },
                        {
                            "apNum": "12",
                            "name": "澳门"
                        },
                        {
                            "apNum": "6731",
                            "name": "天津"
                        },
                        {
                            "apNum": "178987",
                            "name": "山东"
                        },
                        {
                            "apNum": "22042",
                            "name": "辽宁"
                        },
                        {
                            "apNum": "118060",
                            "name": "山西"
                        },
                        {
                            "apNum": "22905",
                            "name": "吉林"
                        },
                        {
                            "apNum": "109188",
                            "name": "新疆"
                        },
                        {
                            "apNum": "72910",
                            "name": "海南"
                        },
                        {
                            "apNum": "219162",
                            "name": "云南"
                        },
                        {
                            "apNum": "146132",
                            "name": "河南"
                        },
                        {
                            "apNum": "871480",
                            "name": "安徽"
                        },
                        {
                            "apNum": "419356",
                            "name": "河北"
                        },
                        {
                            "apNum": "437282",
                            "name": "广西"
                        },
                        {
                            "apNum": "30770",
                            "name": "黑龙江"
                        },
                        {
                            "apNum": "239212",
                            "name": "重庆"
                        },
                        {
                            "apNum": "291424",
                            "name": "江西"
                        },
                        {
                            "apNum": "92533",
                            "name": "甘肃"
                        },
                        {
                            "apNum": "167824",
                            "name": "贵州"
                        },
                        {
                            "apNum": "71249",
                            "name": "内蒙古"
                        },
                        {
                            "apNum": "62948",
                            "name": "宁夏"
                        },
                        {
                            "apNum": "1683987",
                            "name": "广东"
                        },
                        {
                            "apNum": "51482",
                            "name": "上海"
                        },
                        {
                            "apNum": "913050",
                            "name": "江苏"
                        },
                        {
                            "apNum": "867535",
                            "name": "浙江"
                        },
                        {
                            "apNum": "325619",
                            "name": "福建"
                        },
                        {
                            "apNum": "328603",
                            "name": "四川"
                        },
                        {
                            "apNum": "387687",
                            "name": "湖北"
                        },
                        {
                            "apNum": "250655",
                            "name": "湖南"
                        },
                        {
                            "apNum": "65392",
                            "name": "陕西"
                        },
                        {
                            "apNum": "34883",
                            "name": "青海"
                        },
                        {
                            "apNum": "2732",
                            "name": "西藏"
                        },
                        {
                            "apNum": "5853",
                            "name": "萍乡市"
                        },
                        {
                            "apNum": "556",
                            "name": "阿拉善盟"
                        },
                        {
                            "apNum": "488",
                            "name": "辽阳市"
                        },
                        {
                            "apNum": "10610",
                            "name": "榆林市"
                        },
                        {
                            "apNum": "4905",
                            "name": "汉中市"
                        },
                        {
                            "apNum": "175",
                            "name": "临沧市"
                        },
                        {
                            "apNum": "9753",
                            "name": "菏泽市"
                        },
                        {
                            "apNum": "3949",
                            "name": "万宁市"
                        },
                        {
                            "apNum": "2314",
                            "name": "大理白族自治州"
                        },
                        {
                            "apNum": "1055",
                            "name": "铜川市"
                        },
                        {
                            "apNum": "18496",
                            "name": "西安市"
                        },
                        {
                            "apNum": "4083",
                            "name": "淄博市"
                        },
                        {
                            "apNum": "2404",
                            "name": "儋州市"
                        },
                        {
                            "apNum": "675",
                            "name": "保山市"
                        },
                        {
                            "apNum": "10245",
                            "name": "临沂市"
                        },
                        {
                            "apNum": "3407",
                            "name": "大同市"
                        },
                        {
                            "apNum": "155",
                            "name": "怒江傈僳族自治州"
                        },
                        {
                            "apNum": "9277",
                            "name": "滨州市"
                        },
                        {
                            "apNum": "4578",
                            "name": "长治市"
                        },
                        {
                            "apNum": "646",
                            "name": "丽江市"
                        },
                        {
                            "apNum": "20915",
                            "name": "青岛市"
                        },
                        {
                            "apNum": "5552",
                            "name": "阳泉市"
                        },
                        {
                            "apNum": "18",
                            "name": "迪庆藏族自治州"
                        },
                        {
                            "apNum": "34476",
                            "name": "马鞍山市"
                        },
                        {
                            "apNum": "1693",
                            "name": "朔州市"
                        },
                        {
                            "apNum": "1376",
                            "name": "德宏傣族景颇族自治州"
                        },
                        {
                            "apNum": "14770",
                            "name": "张掖市"
                        },
                        {
                            "apNum": "8524",
                            "name": "晋中市"
                        },
                        {
                            "apNum": "2302",
                            "name": "平凉市"
                        },
                        {
                            "apNum": "7282",
                            "name": "巴中市"
                        },
                        {
                            "apNum": "6737",
                            "name": "武威市"
                        },
                        {
                            "apNum": "127517",
                            "name": "东莞市"
                        },
                        {
                            "apNum": "39085",
                            "name": "银川市"
                        },
                        {
                            "apNum": "78784",
                            "name": "玉林市"
                        },
                        {
                            "apNum": "29858",
                            "name": "绵阳市"
                        },
                        {
                            "apNum": "14377",
                            "name": "咸宁市"
                        },
                        {
                            "apNum": "8403",
                            "name": "广安市"
                        },
                        {
                            "apNum": "14851",
                            "name": "怀化市"
                        },
                        {
                            "apNum": "12593",
                            "name": "三亚市"
                        },
                        {
                            "apNum": "9539",
                            "name": "资阳市"
                        },
                        {
                            "apNum": "41309",
                            "name": "上饶市"
                        },
                        {
                            "apNum": "22224",
                            "name": "衢州市"
                        },
                        {
                            "apNum": "2652",
                            "name": "鄂州市"
                        },
                        {
                            "apNum": "79875",
                            "name": "台州市"
                        },
                        {
                            "apNum": "45489",
                            "name": "赣州市"
                        },
                        {
                            "apNum": "2081",
                            "name": "乌海市"
                        },
                        {
                            "apNum": "7079",
                            "name": "聊城市"
                        },
                        {
                            "apNum": "6133",
                            "name": "舟山市"
                        },
                        {
                            "apNum": "206",
                            "name": "莱芜市"
                        },
                        {
                            "apNum": "25994",
                            "name": "海口市"
                        },
                        {
                            "apNum": "2617",
                            "name": "固原市"
                        },
                        {
                            "apNum": "2483",
                            "name": "忻州市"
                        },
                        {
                            "apNum": "15284",
                            "name": "蚌埠市"
                        },
                        {
                            "apNum": "13161",
                            "name": "临汾市"
                        },
                        {
                            "apNum": "513",
                            "name": "甘南藏族自治州"
                        },
                        {
                            "apNum": "138906",
                            "name": "合肥市"
                        },
                        {
                            "apNum": "15237",
                            "name": "达州市"
                        },
                        {
                            "apNum": "8491",
                            "name": "内江市"
                        },
                        {
                            "apNum": "104390",
                            "name": "阜阳市"
                        },
                        {
                            "apNum": "1807",
                            "name": "曲靖市"
                        },
                        {
                            "apNum": "70639",
                            "name": "芜湖市"
                        },
                        {
                            "apNum": "56092",
                            "name": "宿州市"
                        },
                        {
                            "apNum": "58611",
                            "name": "淮南市"
                        },
                        {
                            "apNum": "8444",
                            "name": "随州市"
                        },
                        {
                            "apNum": "47141",
                            "name": "安庆市"
                        },
                        {
                            "apNum": "8000",
                            "name": "德州市"
                        },
                        {
                            "apNum": "22583",
                            "name": "黄山市"
                        },
                        {
                            "apNum": "9472",
                            "name": "北京市"
                        },
                        {
                            "apNum": "8326",
                            "name": "恩施土家族苗族自治州"
                        },
                        {
                            "apNum": "239212",
                            "name": "重庆市"
                        },
                        {
                            "apNum": "45403",
                            "name": "淮北市"
                        },
                        {
                            "apNum": "8720",
                            "name": "三明市"
                        },
                        {
                            "apNum": "7139",
                            "name": "南平市"
                        },
                        {
                            "apNum": "96178",
                            "name": "泉州市"
                        },
                        {
                            "apNum": "23654",
                            "name": "漳州市"
                        },
                        {
                            "apNum": "3221",
                            "name": "庆阳市"
                        },
                        {
                            "apNum": "2463",
                            "name": "陇南市"
                        },
                        {
                            "apNum": "296920",
                            "name": "广州市"
                        },
                        {
                            "apNum": "9234",
                            "name": "定西市"
                        },
                        {
                            "apNum": "23382",
                            "name": "云浮市"
                        },
                        {
                            "apNum": "21238",
                            "name": "韶关市"
                        },
                        {
                            "apNum": "212941",
                            "name": "佛山市"
                        },
                        {
                            "apNum": "46989",
                            "name": "揭阳市"
                        },
                        {
                            "apNum": "74956",
                            "name": "茂名市"
                        },
                        {
                            "apNum": "12661",
                            "name": "嘉峪关市"
                        },
                        {
                            "apNum": "3136",
                            "name": "金昌市"
                        },
                        {
                            "apNum": "14609",
                            "name": "白银市"
                        },
                        {
                            "apNum": "19961",
                            "name": "兰州市"
                        },
                        {
                            "apNum": "4257",
                            "name": "酒泉市"
                        },
                        {
                            "apNum": "364",
                            "name": "大兴安岭地区"
                        },
                        {
                            "apNum": "740",
                            "name": "黑河市"
                        },
                        {
                            "apNum": "7072",
                            "name": "贺州市"
                        },
                        {
                            "apNum": "71512",
                            "name": "南宁市"
                        },
                        {
                            "apNum": "34203",
                            "name": "珠海市"
                        },
                        {
                            "apNum": "21335",
                            "name": "遵义市"
                        },
                        {
                            "apNum": "13629",
                            "name": "梅州市"
                        },
                        {
                            "apNum": "53546",
                            "name": "桂林市"
                        },
                        {
                            "apNum": "13242",
                            "name": "安顺市"
                        },
                        {
                            "apNum": "27668",
                            "name": "河池市"
                        },
                        {
                            "apNum": "11818",
                            "name": "张家口市"
                        },
                        {
                            "apNum": "57420",
                            "name": "崇左市"
                        },
                        {
                            "apNum": "53142",
                            "name": "唐山市"
                        },
                        {
                            "apNum": "36715",
                            "name": "钦州市"
                        },
                        {
                            "apNum": "14735",
                            "name": "邢台市"
                        },
                        {
                            "apNum": "52619",
                            "name": "贵阳市"
                        },
                        {
                            "apNum": "6794",
                            "name": "安阳市"
                        },
                        {
                            "apNum": "73782",
                            "name": "郑州市"
                        },
                        {
                            "apNum": "7069",
                            "name": "六盘水市"
                        },
                        {
                            "apNum": "7317",
                            "name": "秦皇岛市"
                        },
                        {
                            "apNum": "4964",
                            "name": "驻马店市"
                        },
                        {
                            "apNum": "24934",
                            "name": "沧州市"
                        },
                        {
                            "apNum": "612",
                            "name": "伊春市"
                        },
                        {
                            "apNum": "5366",
                            "name": "齐齐哈尔市"
                        },
                        {
                            "apNum": "3824",
                            "name": "佳木斯市"
                        },
                        {
                            "apNum": "705",
                            "name": "鹤岗市"
                        },
                        {
                            "apNum": "1886",
                            "name": "绥化市"
                        },
                        {
                            "apNum": "1129",
                            "name": "双鸭山市"
                        },
                        {
                            "apNum": "509",
                            "name": "鸡西市"
                        },
                        {
                            "apNum": "498",
                            "name": "七台河市"
                        },
                        {
                            "apNum": "8436",
                            "name": "哈尔滨市"
                        },
                        {
                            "apNum": "1608",
                            "name": "牡丹江市"
                        },
                        {
                            "apNum": "31108",
                            "name": "宜昌市"
                        },
                        {
                            "apNum": "88146",
                            "name": "石家庄市"
                        },
                        {
                            "apNum": "18543",
                            "name": "黄冈市"
                        },
                        {
                            "apNum": "32934",
                            "name": "邯郸市"
                        },
                        {
                            "apNum": "7615",
                            "name": "益阳市"
                        },
                        {
                            "apNum": "17629",
                            "name": "邵阳市"
                        },
                        {
                            "apNum": "4155",
                            "name": "新乡市"
                        },
                        {
                            "apNum": "12433",
                            "name": "湘西土家族苗族自治州"
                        },
                        {
                            "apNum": "9628",
                            "name": "洛阳市"
                        },
                        {
                            "apNum": "12716",
                            "name": "郴州市"
                        },
                        {
                            "apNum": "7754",
                            "name": "商丘市"
                        },
                        {
                            "apNum": "62151",
                            "name": "泰州市"
                        },
                        {
                            "apNum": "3158",
                            "name": "许昌市"
                        },
                        {
                            "apNum": "32453",
                            "name": "宿迁市"
                        },
                        {
                            "apNum": "32058",
                            "name": "襄阳市"
                        },
                        {
                            "apNum": "22075",
                            "name": "宜春市"
                        },
                        {
                            "apNum": "21282",
                            "name": "荆州市"
                        },
                        {
                            "apNum": "60830",
                            "name": "长沙市"
                        },
                        {
                            "apNum": "7948",
                            "name": "鹰潭市"
                        },
                        {
                            "apNum": "19988",
                            "name": "衡阳市"
                        },
                        {
                            "apNum": "5089",
                            "name": "大庆市"
                        },
                        {
                            "apNum": "594",
                            "name": "白城市"
                        },
                        {
                            "apNum": "1984",
                            "name": "松原市"
                        },
                        {
                            "apNum": "9306",
                            "name": "长春市"
                        },
                        {
                            "apNum": "1929",
                            "name": "延边朝鲜族自治州"
                        },
                        {
                            "apNum": "4798",
                            "name": "吉林市"
                        },
                        {
                            "apNum": "1085",
                            "name": "四平市"
                        },
                        {
                            "apNum": "708",
                            "name": "白山市"
                        },
                        {
                            "apNum": "2736",
                            "name": "沈阳市"
                        },
                        {
                            "apNum": "1122",
                            "name": "阜新市"
                        },
                        {
                            "apNum": "1000",
                            "name": "朝阳市"
                        },
                        {
                            "apNum": "31838",
                            "name": "镇江市"
                        },
                        {
                            "apNum": "1133",
                            "name": "营口市"
                        },
                        {
                            "apNum": "102796",
                            "name": "南通市"
                        },
                        {
                            "apNum": "1175",
                            "name": "丹东市"
                        },
                        {
                            "apNum": "68697",
                            "name": "淮安市"
                        },
                        {
                            "apNum": "12536",
                            "name": "鄂尔多斯市"
                        },
                        {
                            "apNum": "76701",
                            "name": "南昌市"
                        },
                        {
                            "apNum": "595",
                            "name": "延安市"
                        },
                        {
                            "apNum": "8687",
                            "name": "新余市"
                        },
                        {
                            "apNum": "349",
                            "name": "商洛市"
                        },
                        {
                            "apNum": "4170",
                            "name": "济宁市"
                        },
                        {
                            "apNum": "2088",
                            "name": "通化市"
                        },
                        {
                            "apNum": "14668",
                            "name": "潍坊市"
                        },
                        {
                            "apNum": "1093",
                            "name": "锦州市"
                        },
                        {
                            "apNum": "13790",
                            "name": "济南市"
                        },
                        {
                            "apNum": "4107",
                            "name": "大连市"
                        },
                        {
                            "apNum": "51482",
                            "name": "上海市"
                        },
                        {
                            "apNum": "4214",
                            "name": "琼海市"
                        },
                        {
                            "apNum": "3662",
                            "name": "乌兰察布市"
                        },
                        {
                            "apNum": "3842",
                            "name": "巴彦淖尔市"
                        },
                        {
                            "apNum": "1142",
                            "name": "铁岭市"
                        },
                        {
                            "apNum": "4275",
                            "name": "呼伦贝尔市"
                        },
                        {
                            "apNum": "2604",
                            "name": "兴安盟"
                        },
                        {
                            "apNum": "2945",
                            "name": "锡林郭勒盟"
                        },
                        {
                            "apNum": "4570",
                            "name": "通辽市"
                        },
                        {
                            "apNum": "2933",
                            "name": "海西蒙古族藏族自治州"
                        },
                        {
                            "apNum": "21685",
                            "name": "西宁市"
                        },
                        {
                            "apNum": "474",
                            "name": "海北藏族自治州"
                        },
                        {
                            "apNum": "783",
                            "name": "海南藏族自治州"
                        },
                        {
                            "apNum": "8090",
                            "name": "海东地区"
                        },
                        {
                            "apNum": "4477",
                            "name": "晋城市"
                        },
                        {
                            "apNum": "10697",
                            "name": "渭南市"
                        },
                        {
                            "apNum": "9611",
                            "name": "南充市"
                        },
                        {
                            "apNum": "23248",
                            "name": "丽水市"
                        },
                        {
                            "apNum": "3549",
                            "name": "宝鸡市"
                        },
                        {
                            "apNum": "59722",
                            "name": "绍兴市"
                        },
                        {
                            "apNum": "12291",
                            "name": "枣庄市"
                        },
                        {
                            "apNum": "32877",
                            "name": "湖州市"
                        },
                        {
                            "apNum": "14283",
                            "name": "日照市"
                        },
                        {
                            "apNum": "5044",
                            "name": "东营市"
                        },
                        {
                            "apNum": "4962",
                            "name": "北海市"
                        },
                        {
                            "apNum": "11370",
                            "name": "威海市"
                        },
                        {
                            "apNum": "55544",
                            "name": "太原市"
                        },
                        {
                            "apNum": "7541",
                            "name": "赤峰市"
                        },
                        {
                            "apNum": "61410",
                            "name": "六安市"
                        },
                        {
                            "apNum": "541",
                            "name": "文山壮族苗族自治州"
                        },
                        {
                            "apNum": "144438",
                            "name": "温州市"
                        },
                        {
                            "apNum": "22184",
                            "name": "池州市"
                        },
                        {
                            "apNum": "236787",
                            "name": "杭州市"
                        },
                        {
                            "apNum": "1266",
                            "name": "阿拉尔市"
                        },
                        {
                            "apNum": "774",
                            "name": "济源市"
                        },
                        {
                            "apNum": "129",
                            "name": "黄南藏族自治州"
                        },
                        {
                            "apNum": "238",
                            "name": "玉树藏族自治州"
                        },
                        {
                            "apNum": "550",
                            "name": "果洛藏族自治州"
                        },
                        {
                            "apNum": "806",
                            "name": "甘孜藏族自治州"
                        },
                        {
                            "apNum": "11822",
                            "name": "德阳市"
                        },
                        {
                            "apNum": "120449",
                            "name": "成都市"
                        },
                        {
                            "apNum": "3756",
                            "name": "雅安市"
                        },
                        {
                            "apNum": "2273",
                            "name": "仙桃市"
                        },
                        {
                            "apNum": "11412",
                            "name": "眉山市"
                        },
                        {
                            "apNum": "13703",
                            "name": "自贡市"
                        },
                        {
                            "apNum": "12488",
                            "name": "乐山市"
                        },
                        {
                            "apNum": "109206",
                            "name": "宁波市"
                        },
                        {
                            "apNum": "6843",
                            "name": "中卫市"
                        },
                        {
                            "apNum": "1804",
                            "name": "临夏回族自治州"
                        },
                        {
                            "apNum": "7767",
                            "name": "潜江市"
                        },
                        {
                            "apNum": "412",
                            "name": "辽源市"
                        },
                        {
                            "apNum": "2783",
                            "name": "抚顺市"
                        },
                        {
                            "apNum": "2794",
                            "name": "阿坝藏族羌族自治州"
                        },
                        {
                            "apNum": "10300",
                            "name": "宜宾市"
                        },
                        {
                            "apNum": "28009",
                            "name": "中山市"
                        },
                        {
                            "apNum": "66580",
                            "name": "亳州市"
                        },
                        {
                            "apNum": "47755",
                            "name": "滁州市"
                        },
                        {
                            "apNum": "10993",
                            "name": "凉山彝族自治州"
                        },
                        {
                            "apNum": "2160",
                            "name": "攀枝花市"
                        },
                        {
                            "apNum": "2989",
                            "name": "和田地区"
                        },
                        {
                            "apNum": "5943",
                            "name": "喀什地区"
                        },
                        {
                            "apNum": "96",
                            "name": "克孜勒苏柯尔克孜自治州"
                        },
                        {
                            "apNum": "5883",
                            "name": "阿克苏地区"
                        },
                        {
                            "apNum": "11438",
                            "name": "巴音郭楞蒙古自治州"
                        },
                        {
                            "apNum": "2632",
                            "name": "博尔塔拉蒙古自治州"
                        },
                        {
                            "apNum": "1637",
                            "name": "吐鲁番地区"
                        },
                        {
                            "apNum": "62423",
                            "name": "宣城市"
                        },
                        {
                            "apNum": "84756",
                            "name": "廊坊市"
                        },
                        {
                            "apNum": "14180",
                            "name": "宁德市"
                        },
                        {
                            "apNum": "3591",
                            "name": "龙岩市"
                        },
                        {
                            "apNum": "53396",
                            "name": "厦门市"
                        },
                        {
                            "apNum": "19477",
                            "name": "莆田市"
                        },
                        {
                            "apNum": "6696",
                            "name": "天水市"
                        },
                        {
                            "apNum": "39455",
                            "name": "清远市"
                        },
                        {
                            "apNum": "93817",
                            "name": "湛江市"
                        },
                        {
                            "apNum": "18569",
                            "name": "阳江市"
                        },
                        {
                            "apNum": "6540",
                            "name": "伊犁哈萨克自治州"
                        },
                        {
                            "apNum": "4429",
                            "name": "哈密地区"
                        },
                        {
                            "apNum": "38898",
                            "name": "乌鲁木齐市"
                        },
                        {
                            "apNum": "7682",
                            "name": "昌吉回族自治州"
                        },
                        {
                            "apNum": "7773",
                            "name": "塔城地区"
                        },
                        {
                            "apNum": "763",
                            "name": "克拉玛依市"
                        },
                        {
                            "apNum": "1643",
                            "name": "阿勒泰地区"
                        },
                        {
                            "apNum": "350",
                            "name": "山南地区"
                        },
                        {
                            "apNum": "296",
                            "name": "林芝地区"
                        },
                        {
                            "apNum": "496",
                            "name": "昌都地区"
                        },
                        {
                            "apNum": "5695",
                            "name": "石河子市"
                        },
                        {
                            "apNum": "403",
                            "name": "神农架林区"
                        },
                        {
                            "apNum": "368",
                            "name": "五指山市"
                        },
                        {
                            "apNum": "99240",
                            "name": "福州市"
                        },
                        {
                            "apNum": "80882",
                            "name": "惠州市"
                        },
                        {
                            "apNum": "50211",
                            "name": "江门市"
                        },
                        {
                            "apNum": "31129",
                            "name": "汕头市"
                        },
                        {
                            "apNum": "5954",
                            "name": "梧州市"
                        },
                        {
                            "apNum": "23882",
                            "name": "柳州市"
                        },
                        {
                            "apNum": "1752",
                            "name": "五家渠市"
                        },
                        {
                            "apNum": "27826",
                            "name": "黔南布依族苗族自治州"
                        },
                        {
                            "apNum": "76080",
                            "name": "保定市"
                        },
                        {
                            "apNum": "5924",
                            "name": "周口市"
                        },
                        {
                            "apNum": "4789",
                            "name": "南阳市"
                        },
                        {
                            "apNum": "429",
                            "name": "图木舒克市"
                        },
                        {
                            "apNum": "20302",
                            "name": "孝感市"
                        },
                        {
                            "apNum": "17565",
                            "name": "黄石市"
                        },
                        {
                            "apNum": "2396",
                            "name": "天门市"
                        },
                        {
                            "apNum": "4216",
                            "name": "张家界市"
                        },
                        {
                            "apNum": "13502",
                            "name": "湘潭市"
                        },
                        {
                            "apNum": "25623",
                            "name": "永州市"
                        },
                        {
                            "apNum": "118156",
                            "name": "南京市"
                        },
                        {
                            "apNum": "30479",
                            "name": "徐州市"
                        },
                        {
                            "apNum": "109916",
                            "name": "无锡市"
                        },
                        {
                            "apNum": "14087",
                            "name": "吉安市"
                        },
                        {
                            "apNum": "775",
                            "name": "葫芦岛市"
                        },
                        {
                            "apNum": "548",
                            "name": "鞍山市"
                        },
                        {
                            "apNum": "30333",
                            "name": "河源市"
                        },
                        {
                            "apNum": "18257",
                            "name": "呼和浩特市"
                        },
                        {
                            "apNum": "2149",
                            "name": "东方市"
                        },
                        {
                            "apNum": "18589",
                            "name": "潮州市"
                        },
                        {
                            "apNum": "8087",
                            "name": "吴忠市"
                        },
                        {
                            "apNum": "12506",
                            "name": "咸阳市"
                        },
                        {
                            "apNum": "10033",
                            "name": "来宾市"
                        },
                        {
                            "apNum": "5355",
                            "name": "百色市"
                        },
                        {
                            "apNum": "2630",
                            "name": "安康市"
                        },
                        {
                            "apNum": "4879",
                            "name": "泰安市"
                        },
                        {
                            "apNum": "3436",
                            "name": "防城港市"
                        },
                        {
                            "apNum": "28932",
                            "name": "烟台市"
                        },
                        {
                            "apNum": "23077",
                            "name": "铜仁市"
                        },
                        {
                            "apNum": "7379",
                            "name": "吕梁市"
                        },
                        {
                            "apNum": "1171",
                            "name": "毕节市"
                        },
                        {
                            "apNum": "18923",
                            "name": "承德市"
                        },
                        {
                            "apNum": "11260",
                            "name": "运城市"
                        },
                        {
                            "apNum": "10659",
                            "name": "广元市"
                        },
                        {
                            "apNum": "6570",
                            "name": "衡水市"
                        },
                        {
                            "apNum": "4126",
                            "name": "濮阳市"
                        },
                        {
                            "apNum": "4665",
                            "name": "文昌市"
                        },
                        {
                            "apNum": "12138",
                            "name": "遂宁市"
                        },
                        {
                            "apNum": "16700",
                            "name": "泸州市"
                        },
                        {
                            "apNum": "2796",
                            "name": "开封市"
                        },
                        {
                            "apNum": "6731",
                            "name": "天津市"
                        },
                        {
                            "apNum": "3462",
                            "name": "焦作市"
                        },
                        {
                            "apNum": "89805",
                            "name": "金华市"
                        },
                        {
                            "apNum": "2422",
                            "name": "三门峡市"
                        },
                        {
                            "apNum": "63155",
                            "name": "嘉兴市"
                        },
                        {
                            "apNum": "5812",
                            "name": "平顶山市"
                        },
                        {
                            "apNum": "6315",
                            "name": "石嘴山市"
                        },
                        {
                            "apNum": "2591",
                            "name": "信阳市"
                        },
                        {
                            "apNum": "1297",
                            "name": "昭通市"
                        },
                        {
                            "apNum": "1169",
                            "name": "鹤壁市"
                        },
                        {
                            "apNum": "17569",
                            "name": "铜陵市"
                        },
                        {
                            "apNum": "13060",
                            "name": "十堰市"
                        },
                        {
                            "apNum": "49382",
                            "name": "肇庆市"
                        },
                        {
                            "apNum": "6857",
                            "name": "荆门市"
                        },
                        {
                            "apNum": "180274",
                            "name": "武汉市"
                        },
                        {
                            "apNum": "23541",
                            "name": "汕尾市"
                        },
                        {
                            "apNum": "18384",
                            "name": "常德市"
                        },
                        {
                            "apNum": "358368",
                            "name": "深圳市"
                        },
                        {
                            "apNum": "50929",
                            "name": "贵港市"
                        },
                        {
                            "apNum": "13618",
                            "name": "岳阳市"
                        },
                        {
                            "apNum": "16400",
                            "name": "娄底市"
                        },
                        {
                            "apNum": "11709",
                            "name": "黔东南苗族侗族自治州"
                        },
                        {
                            "apNum": "1106",
                            "name": "拉萨市"
                        },
                        {
                            "apNum": "12752",
                            "name": "株洲市"
                        },
                        {
                            "apNum": "9771",
                            "name": "黔西南布依族苗族自治州"
                        },
                        {
                            "apNum": "137",
                            "name": "那曲地区"
                        },
                        {
                            "apNum": "73335",
                            "name": "盐城市"
                        },
                        {
                            "apNum": "2029",
                            "name": "漯河市"
                        },
                        {
                            "apNum": "184",
                            "name": "日喀则地区"
                        },
                        {
                            "apNum": "180552",
                            "name": "苏州市"
                        },
                        {
                            "apNum": "122",
                            "name": "阿里地区"
                        },
                        {
                            "apNum": "193073",
                            "name": "昆明市"
                        },
                        {
                            "apNum": "43594",
                            "name": "扬州市"
                        },
                        {
                            "apNum": "17688",
                            "name": "景德镇市"
                        },
                        {
                            "apNum": "18234",
                            "name": "连云港市"
                        },
                        {
                            "apNum": "17103",
                            "name": "抚州市"
                        },
                        {
                            "apNum": "2246",
                            "name": "楚雄彝族自治州"
                        },
                        {
                            "apNum": "40835",
                            "name": "常州市"
                        },
                        {
                            "apNum": "1462",
                            "name": "玉溪市"
                        },
                        {
                            "apNum": "1434",
                            "name": "本溪市"
                        },
                        {
                            "apNum": "34477",
                            "name": "九江市"
                        },
                        {
                            "apNum": "6483",
                            "name": "红河哈尼族彝族自治州"
                        },
                        {
                            "apNum": "2495",
                            "name": "盘锦市"
                        },
                        {
                            "apNum": "8370",
                            "name": "包头市"
                        },
                        {
                            "apNum": "1578",
                            "name": "普洱市"
                        },
                        {
                            "apNum": "5315",
                            "name": "西双版纳傣族自治州"
                        }
                    ]
                }
            }
        
    },
    components:{
        bar,
        lines,
        pie,
        mapcharts
    }

}
</script>

<style>

</style>