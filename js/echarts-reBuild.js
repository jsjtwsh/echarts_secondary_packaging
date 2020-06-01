/**
 * 这是一个判空的函数，可以单独提出来放到工具类中
 * 
 * @param str
 * @returns {Boolean}
 */
function IsEmptyData(str) {
    var result = false;
    if (str == null || typeof (str) == 'undefined') {
        result = true;
    } else {
        var reg = new RegExp(" ", "g");
        str += "";
        str = str.replace(reg, "");
        if (str.length == 0) {
            result = true;
        }
    }

    return result;
}


var color1 = {
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
};
var color2 = {
    color:[ '#00405c','#00405c',"#5AC2E5", "#3B87C3", "#F49C31","#E04F31"],
    titleColor: '#8B2323', //主标题颜色
    subTitleColor: '#000080',  //副标题颜色
    titleBgColor: '#fff', //主标题背景色
    legendColor: '#666', //图例文字颜色
    labelTextStyle: '#009c9f',//图中文字颜色  
    pieColorList:  [ '#04314D', '#055873', '#0E6F8F', '#05455A', '#E04F31', '#F49C31', '#3B87C3','#5AC2E5'], //饼图色块取值
    axisColor: "#009c9f", //轴线色值
    splitLineColor: '#333',  //分隔线颜色
    transverseCascadeColorList:['#4cabce','#0E6F8F', '#4876FF','#003366'], //横向层叠柱状图色块取值 
    barGradient: ['#1c87f1','#1c87f1','#41d6d4','#05455A'],//横向柱状图色块渐变色取值
    normalBarColorList: ['#2378f7', '#188df0', '#188df0','#83bff6'], 
    lineColorList: ['rgb(0,0,0,0)', '#a2ebff'], //折线图颜色取值
    doubleYLinesColorList: ['#005d85', "#8decff","#56eff7","#F49C31","#3B87C3"], //双Y轴折线图颜色取值
    mapDataRangeTextColor: '#96989e', //图例文字颜色
    mapTextColor: '#00405c',  //地图中显示的省份文字颜色
    mapCityColor: '#F49C31',  //地图省份选中时颜色
    mapCityShadowColor: 'rgba(0, 0, 0, 0.7)',//地图省份选中时周围阴影 };
    mapColorList:[ '#00405c', '#005d85', '#009c9f','#56eff7'] // 地图dataRange颜色
}
var colorDef = {};

    function echars_init(color){
        //初始化皮肤
        setColor(color)
}

function setColor(i) {
    if (i == 1) {
        colorDef = color1
    } else if (i == 2) {
        colorDef = color2
    } else {
        colorDef = color1
    }
}

//默认初始化
echars_init(2)


var r_data = {
    'lines': {
        title: '流失用户趋势',
        legendData: ['WiFi告警的天翼网关数', '流失用户数'],
        xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        yAxisName: ['数量（万）', '数量（万）'],
        seriesData: [
            [355, 315, 248, 312, 311, 346, 373, 356, 0, 0, 0, 0],
            [164, 165, 146, 155, 154, 154, 163, 172, 0, 0, 0, 0]
        ]
    },
    'pie': [{ value: 335, name: '北京' },
    { value: 310, name: '上海' },
    { value: 234, name: '广州' },
    { value: 135, name: '深圳' },
    { value: 148, name: '郑州' }],
    'pie1': [{ value: 335, name: '北京' },
    { value: 310, name: '上海' },
    { value: 234, name: '广州' },
    { value: 135, name: '深圳' },
    { value: 148, name: '郑州' }],
    map: {
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
    },
    'bar': {
        title: '组网潜客数量趋势',
        xAxisData: ['千兆双频>=500M', '百兆双频>=200M', '百兆单频>=100M'],
        legendData: '质量指数',
        yAxisName: '',
        seriesData: [10.0, 20.0, 30.0]
    },
    'bar1': {
        title: '分类能力开放调用趋势',
        seriesName: '网关新增',
        yAxisName: '数量（万）',
        xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        legendData: ['终端稽核能力', '可视化能力', '网关能力', '智慧营维工具'],
        seriesData: [['01', '02', '03', '04', '05', '0', '0', '0', '0', '0', '0', '0'],
        ['01', '02', '03', '04', '05', '0', '0', '0', '0', '0', '0', '0'],
        ['01', '02', '03', '04', '05', '0', '0', '0', '0', '0', '0', '0'],
        ['01', '02', '03', '04', '05', '0', '0', '0', '0', '0', '0', '0']]
    },
    'bar2': {
        yAxisName: '数量（万）',
        xAxisData: ['网口接错', 'WiFi覆盖差'],
        seriesData: ['1789', '1765'],
        legendData: '质量指数'
    }
}

function e_ajax(url, id) {
    $.ajax({
        type: "GET",
        url: url,
        timeout: 20000, //超时时间设置，单位毫秒
        dataType: "json",
        async: false,
        success: function (data) {
            if (data != null) {
                r_data[id] = data
            }
        },
        error: function (error) {
            console.log(error)
        }
    });

}

function echars_new(id, url, type) {
    if (IsEmptyData(id) || IsEmptyData(document.getElementById(id))) {
        alert("绑定的容器ID不存在");
        return
    }
    e_ajax(url, id)
    if (type === 'pie') {
        EchartsPieRing(id)
    } else if (type === 'bar' || type === 'verticalCascade' || type === 'transverseCascade' || type === 'transverse') { }
    EchartsBar(id, type)

}




/**
 * 环形图/饼状图构建辅助方法
 * 
 * id
 *            容器ID
 * ajaxdata
 *            JSON数据
 * roseType: 'radius',
 *            将饼图变为3D饼图
 * radiusType
 *            ['25%', '40%'] 为环形图
 * 			  '55%'为饼图
 * titletext
 *            主标题
 * subtitletext
 *            副标题
 * islegend
 *            是否显示示例，默认值true
 * istoolbox
 *            是否显示右上方的工具栏，默认值true
 * istooltip
 *            是否显示提示框，默认值true
 * orienttype
 *            图例的排序方式，默认为垂直显示(vertical),水平显示属性为horizontal   
 * guideLineLength1 
 * 		  	  饼图引导线1 
 * guideLineLength2 
 * 			  饼图引导线2
 * guideLineSmooth 
 * 			  饼图折角
 * showLineAndName 
 *            显示引导线和名字
 * legendX  
 *            设置水平安放位置，默认'right'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
 * legendY  
 *            设置垂直安放位置，默认'center'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 
 */

/*
ajaxdata格式
[{value:335, name:'北京'},
   {value:310, name:'上海'},
   {value:234, name:'广州'},
   {value:135, name:'深圳'},
   {value:148, name:'郑州'}]
*/




function EchartsPieRing(id) {
    var myChart = echarts.init(document.getElementById(id));
    var ajaxdata = r_data[id];
    var legendData = []
    if (IsEmptyData(ajaxdata)) {
        alert("data值不存在");
        return
    }
    var titletext = $('#' + id).attr('titletext')
    var subtitletext = $('#' + id).attr('subtitletext')
    var islegend = $('#' + id).attr('islegend')
    var istoolbox = $('#' + id).attr('istoolbox')
    var istooltip = $('#' + id).attr('istooltip')
    var orienttype = $('#' + id).attr('orienttype')
    var roseType = $('#' + id).attr('roseType')
    var radiusType = $('#' + id).attr('radiusType')
    var guideLineLength1 = $('#' + id).attr('guideLineLength1')
    var guideLineLength2 = $('#' + id).attr('guideLineLength2')
    var guideLineSmooth = $('#' + id).attr('guideLineSmooth')
    var showLineAndName = $('#' + id).attr('showLineAndName')
    var legendX = $('#' + id).attr('legendX')
    var legendY = $('#' + id).attr('legendY')

    if (typeof (legendX) == "undefined") {
        legendX = 'right'
    }
    if (typeof (legendY) == "undefined") {
        legendY = 'bottom'
    }
    var radiusData
    if (typeof (titletext) == "undefined") {
        titletext = ''
    }
    if (typeof (subtitletext) == "undefined") {
        subtitletext = ''
    }
    if (typeof (islegend) == "undefined") {
        islegend = true
    } else {
        if (islegend == 'false') {
            islegend = false
        }
    }
    if (typeof (showLineAndName) == "undefined") {
        showLineAndName = true
    } else {
        if (showLineAndName == 'false')
            showLineAndName = false
    }
    if (typeof (istoolbox) == "undefined") {
        istoolbox = true
    } else if (istoolbox == 'false') {
        istoolbox = false
    }
    if (typeof (istooltip) == "undefined") {
        istooltip = true
    } else if (istooltip == 'false') {
        istooltip = false
    }
    if (typeof (orienttype) == "undefined") {
        orienttype = 'vertical'
    }
    if (typeof (radiusType) == "undefined") {
        radiusData = '45%'
    } else if (typeof (radiusType) == "string") {
        if (radiusType.toString().split(',')[1]) {
            radiusData = [radiusType.toString().split(',')[0], radiusType.toString().split(',')[1]]
        } else {
            radiusData = radiusType.toString()
        }
    }
    if (typeof (roseType) == "undefined") {
        roseType = false
    }
    for (var i = 0; i < ajaxdata.length; i++) {
        legendData.push(ajaxdata[i].name)
    }
    if (typeof (guideLineLength1) == "undefined") {
        guideLineLength1 = 5
    } else {
        guideLineLength1 = guideLineLength1 * 1
    }
    if (typeof (guideLineLength2) == "undefined") {
        guideLineLength2 = 5
    } else {
        guideLineLength2 = guideLineLength2 * 1
    }
    if (typeof (guideLineSmooth) == "undefined") {
        guideLineSmooth = 0.1
    } else {
        if (typeof (guideLineSmooth) == "number") {
            guideLineSmooth = Number(guideLineSmooth)
        }
        if (guideLineSmooth == 'false') {
            guideLineSmooth = false
        }
        if (guideLineSmooth == 'true') {
            guideLineSmooth = true
        }
    }
    option = {
        title: {
            text: titletext,
            subtext: subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 10,
            backgroundColor: colorDef.titleBgColor,
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: colorDef.titleColor
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: colorDef.subTitleColor
            }
        },
        tooltip: {
            show: istooltip,
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
            confine: true
        },
        legend: {
            show: islegend,
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
            orient: orienttype,
            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: legendX,
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: legendY,
            itemWidth: 24,   // 设置图例图形的宽
            itemHeight: 18,  // 设置图例图形的高
            textStyle: {
                color: colorDef.legendColor  // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
            data: legendData

        },
        toolbox: {
            show: istoolbox,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                // radius: ['25%', '40%'],
                radius: radiusData, //radius:设置饼图或是环形图
                center: ['50%', '45%'],
                data: ajaxdata,
                roseType: roseType,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return getPieColor1(params.dataIndex);
                        }
                    }
                },
                label: {
                    normal: {
                        show: showLineAndName,
                        textStyle: {
                            color: colorDef.labelTextStyle,
                            fontSize: '70%'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: showLineAndName,
                        smooth: guideLineSmooth, length: guideLineLength1, length2: guideLineLength2
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}
function getPieColor1(dataIndex) {
    if (dataIndex == 0) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[0] },
                { offset: 1, color: colorDef.pieColorList[0] }

            ]);
    } else if (dataIndex == 1) {
        return new echarts.graphic.LinearGradient(
            1, 0, 0, 0,
            [
                { offset: 0, color: colorDef.pieColorList[1] },
                { offset: 1, color: colorDef.pieColorList[1] }

            ]);
    } else if (dataIndex == 2) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[2] },
                { offset: 1, color: colorDef.pieColorList[2] }
            ]);
    } else if (dataIndex == 3) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[3] },
                { offset: 1, color: colorDef.pieColorList[3] }
            ]);
    } else if (dataIndex == 4) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[4] },
                { offset: 1, color: colorDef.pieColorList[4] }
            ]);
    } else if (dataIndex == 5) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[5] },
                { offset: 1, color: colorDef.pieColorList[5] }
            ]);
    } else if (dataIndex == 6) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[6] },
                { offset: 1, color: colorDef.pieColorList[6] }
            ]);
    } else if (dataIndex == 7) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[7] },
                { offset: 1, color: colorDef.pieColorList[7] }
            ]);
    } else if (dataIndex == 8) {
        return new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: colorDef.pieColorList[8] },
                { offset: 1, color: colorDef.pieColorList[8] }
            ]);
    }

}



//柱状图

/*
竖向层叠柱状图 verticalCascade
横向层叠柱状图 transverseCascade
横向柱状图  transverse
竖向柱状图 bar
*/
/*
 * id
 *            容器ID
 * titletext
 *            主标题
 * subtitletext
 *            副标题
 * islegend
 *            是否显示示例，默认值true
 * istoolbox
 *            是否显示右上方的工具栏，默认值true
 * istooltip
 *            是否显示提示框，默认值true
 * orienttype
 *            图例的排序方式，垂直显示(vertical),默认为水平显示属性为horizontal   
 *  barWidth
 *            柱状图柱子宽度  默认30
 *  showXAxisLine
 *           是否显示X轴轴线
 *  showYAxisLine
 *           是否显示Y轴轴线
 * legendX  设置水平安放位置，默认'center'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
 * legendY  设置垂直安放位置，默认'bottom'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 
 * grid     设置grid组件在容器中的位置  默认值： grid="10%,10%,20%,30%"

 
 ajaxdata格式
 	普通柱状图：
 	{
		yAxisName:'数量（万）',
		xAxisData:['网口接错','WiFi覆盖差'],
		seriesData:['1789','1765'],
		legendData:'质量指数'
	}
	横向单条柱状图： 
	{
		title:'组网潜客数量趋势',
		xAxisData:['千兆双频>=500M','百兆双频>=200M','百兆单频>=100M'],
		legendData:'质量指数',
		yAxisName:'',
		seriesData:[0.0,0.0,0.0]
	}
	层叠柱状图： 
	{
		title:'分类能力开放调用趋势',
		seriesName:'网关新增',
		yAxisName:'数量（万）',
		xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		legendData:['终端稽核能力','可视化能力','网关能力','智慧营维工具'],
		seriesData:[['0','0','0','0','0','0','0','0','0','0','0','0'],
					['0','0','0','0','0','0','0','0','0','0','0','0'],
					['0','0','0','0','0','0','0','0','0','0','0','0'],
					['0','0','0','0','0','0','0','0','0','0','0','0']]
	}
 */

function EchartsBar(id, type) {
    var myChart = echarts.init(document.getElementById(id))
    var xAxisData = r_data[id].xAxisData;
    var legendData = r_data[id].legendData
    var yAxisName = r_data[id].yAxisName
    var titletext = $('#' + id).attr('titletext')
    var subtitletext = $('#' + id).attr('subtitletext')
    var islegend = $('#' + id).attr('islegend')
    var istoolbox = $('#' + id).attr('istoolbox')
    var istooltip = $('#' + id).attr('istooltip')
    var orienttype = $('#' + id).attr('orienttype')
    var barWidth = $('#' + id).attr('barWidth')
    var showXAxisLine = $('#' + id).attr('showXAxisLine')
    var showYAxisLine = $('#' + id).attr('showYAxisLine')
    var legendX = $('#' + id).attr('legendX')
    var legendY = $('#' + id).attr('legendY')
    var grid = $('#' + id).attr('grid')
    var showSplitLine = $('#' + id).attr('showSplitLine')

    if (typeof (grid) == "undefined") {
        grid = {
            left: '10%',
            right: '10%',
            bottom: '20%',
            top: '30%',
            containLabel: true
        }
    } else {
        var arr = grid.split(',')
        if (arr[0] && arr[1] && arr[2] && arr[3]) {
            grid = {
                left: arr[0],
                right: arr[1],
                bottom: arr[2],
                top: arr[3],
                containLabel: true
            }
        } else {
            alert('grid数据格式有误')
        }
    }
    if (typeof (legendX) == "undefined") {
        legendX = 'center'
    }
    if (typeof (legendY) == "undefined") {
        legendY = 'bottom'
    }

    if (typeof (showSplitLine) == "undefined") {
        showSplitLine = true
    } else if (showSplitLine === 'false') {
        showSplitLine = false
    }
    if (typeof (showXAxisLine) == "undefined") {
        showXAxisLine = true
    } else if (showXAxisLine === 'false') {
        showXAxisLine = false
    }
    if (typeof (showYAxisLine) == "undefined") {
        showYAxisLine = true
    } else if (showYAxisLine === 'false') {
        showYAxisLine = false
    }
    if (typeof (titletext) == "undefined") {
        titletext = ''
    }
    if (typeof (subtitletext) == "undefined") {
        subtitletext = ''
    }
    if (typeof (barWidth) == "undefined") {
        barWidth = 30
    } else {
        barWidth = barWidth * 1
    }
    if (typeof (islegend) == "undefined") {
        islegend = true
    } else {
        if (islegend == 'false') {
            islegend = false
        } else {
            alert('数据格式有误')
        }
    }
    if (typeof (istoolbox) == "undefined") {
        istoolbox = true
    } else if (istoolbox == 'false') {
        istoolbox = false
    }
    if (typeof (istooltip) == "undefined") {
        istooltip = true
    } else if (istooltip == 'false') {
        istooltip = false
    }
    if (typeof (orienttype) == "undefined") {
        orienttype = 'horizontal'
    }
    if (type === 'verticalCascade') {
        var option = {
            color: colorDef.color,
            tooltip: {
                show: istooltip,
                trigger: 'axis',
                // formatter: function (params,ticket,callback){
                // 	console.log(params)
                // 	// returnStr = params[i].axisValue
                // 	returnStr =''
                // 	for(var i=0;i<params.length;i++){
                // 		// if(params[i].value!=0){
                // 			returnStr +=params[i].seriesName+"："+params[i].value+ "<br>";
                // 		// }
                // 	}
                // 	return returnStr;
                // },
                axisPointer: {
                    type: 'shadow'
                },
                confine: true
            },
            // grid: {
            // 	left: '1%',
            // 	right: '1%',
            // 	bottom: '30%',
            // 	top:'10%',
            // 	containLabel: true
            // },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisLine: {
                    //隐藏x轴线 showXAxisLine
                    show: showXAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                axisLabel: {
                    interval: 0,
                    // rotate:40  
                }


            },
            yAxis: {
                name: yAxisName,
                type: 'value',
                axisLine: {
                    //隐藏y轴线 showYAxisLine
                    show: showYAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                splitLine: {
                    show: showSplitLine,
                    lineStyle: {
                        type: 'dashed',
                        color: colorDef.splitLineColor
                    }
                }
            },
            series: []
        };
        var seriesData = [];
        for (var i = 0; i < legendData.length; i++) {
            seriesData.push({
                name: legendData[i],
                type: 'bar',
                //显示柱状图中数字
                // label: {
                //     normal: {
                //         show: false,
                //         position: 'insideRight'
                //     }
                // },
                barWidth: barWidth,//柱图宽度
                stack: '总量',
                data: r_data[id].seriesData[i]
            });
        }
        option.series = seriesData;
    } else if (type === 'transverseCascade') {
        var option = {
            color: colorDef.transverseCascadeColorList,
            tooltip: {
                show: istooltip,
                trigger: 'axis',
                formatter: function (params, ticket, callback) {
                    var returnStr = r_data[id].title;
                    for (var i = 0; i < params.length; i++) {
                        if (params[i].value != 0) {
                            returnStr += "<br>" + params[i].seriesName + "：" + params[i].value;
                        }
                    }
                    return returnStr;
                },
                axisPointer: {
                    type: 'shadow'
                },
                confine: true
            },

            xAxis: {
                type: 'value',
                axisLine: {
                    show: showXAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: colorDef.splitLineColor
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: xAxisData,
                axisLine: {
                    show: showYAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                }
            },
            series: []
        };
        var seriesData = [];
        for (var i = 0; i < legendData.length; i++) {
            seriesData.push({
                name: legendData[i],
                type: 'bar',
                //显示柱状图中数字
                // label: {
                //     normal: {
                //         show: false,
                //         position: 'insideRight'
                //     }
                // },
                stack: '总量',
                barWidth: barWidth,//柱图宽度
                data: r_data[id].seriesData[i]
            });
        }
        option.series = seriesData;

    } else if (type === 'transverse') {
        var option = {
            color: ['#4cabce'],
            tooltip: {
                show: istooltip,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                confine: true
            },
            // grid: {
            // 	left: '3%',
            // 	bottom: '10%',
            // 	top:'10%',
            // 	containLabel: true
            // },
            xAxis: {
                type: 'value',
                name: r_data[id].yAxisName,
                axisLine: {
                    //隐藏x轴线 showXAxisLine
                    show: showXAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: colorDef.splitLineColor
                    }

                }
            },
            yAxis: {
                type: 'category',
                data: xAxisData,
                axisLine: {
                    //y轴线显示 showYAxisLine
                    show: showYAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                // axisLabel:{
                // 	formatter:function(params){ 
                // 		　　var newParamsName = "";// 最终拼接成的字符串 
                // 		　　var paramsNameNumber = params.length;// 实际标签的个数 
                // 		　　var provideNumber = 6;// 每行能显示的字的个数 
                // 		　　var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 计算行数，向上取整 
                // 		　　//判断是否需要换行
                // 		　　if (paramsNameNumber > provideNumber) { 
                // 		　　　　//循环得到每行的显示内容，p代表行 
                // 		　　　　for (var p = 0; p < rowNumber; p++) { 
                // 		　　　　　　var tempStr = "";// 表示每一次截取的字符串 
                // 		　　　　　　var start = p * provideNumber;// 开始截取的位置 
                // 		　　　　　　var end = start + provideNumber;// 结束截取的位置
                // 		　　　　　　if (p == rowNumber - 1) { 
                // 		　　　　　　　　// 最后一次不换行 
                // 		　　　　　　　　tempStr = params.substring(start, paramsNameNumber); 
                // 		　　　　　　} else { 
                // 		　　　　　　　　// 每一次拼接字符串并换行 
                // 		　　　　　　　　tempStr = params.substring(start, end) + "\n"; 
                // 		　　　　　　} 
                // 		　　　　　　newParamsName += tempStr;// 最终拼成的字符串 
                // 		　　　　} 
                // 		　　} else { 
                // 		　　　　// 将旧标签的值赋给新标签 
                // 		　　　　newParamsName = params; 
                // 		　　} 
                // 		　　return newParamsName 
                // 		}
                // }
            },
            series: [{
                name: legendData,
                type: 'bar',
                data: r_data[id].seriesData,
                barWidth: barWidth,//柱图宽度
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                { offset: 0, color: colorDef.barGradient[0] },
                                { offset: 0.5, color: colorDef.barGradient[1] },
                                { offset: 1, color: colorDef.barGradient[2] }
                            ]
                        ),
                        label: {
                            show: true,
                            position: 'right',//居中显示：inside
                            textStyle: {
                                color: colorDef.labelTextStyle
                            }
                        }
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                { offset: 0, color: colorDef.barGradient[1] },
                                { offset: 0.7, color: colorDef.barGradient[2] },
                                { offset: 1, color: colorDef.barGradient[0] }
                            ]
                        )
                    }
                }
            }]
        };
    } else {
        var option = {
            tooltip: {
                show: istooltip,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // grid: {
            // 	left: '5%',
            // 	right: '4%',
            // 	bottom: '1%',
            // 	top:'10%',
            // 	containLabel: true
            // },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisLine: {
                    show: showXAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor,
                    }
                },
                axisLabel: { //X轴文字倾斜显示
                    interval: 0,
                    // rotate:'-1'
                }
            },
            yAxis: {
                type: 'value',
                name: r_data[id].yAxisName,
                axisLine: {
                    show: showYAxisLine,
                    lineStyle: {
                        color: colorDef.axisColor
                    }
                },
                splitLine: {
                    lineStyle: {
                        //隐藏y轴线
                        show: false,
                        type: 'dashed',
                        color: colorDef.splitLineColor
                    }
                }
            },
            series: []
        };
        var seriesData = [];
        seriesData.push({
            type: 'bar',
            data: r_data[id].seriesData,
            barWidth: barWidth,//柱图宽度
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                        textStyle: {
                            fontWeight: "bolder",
                            fontSize: "12",
                            color: colorDef.labelTextStyle
                        }
                    },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: colorDef.normalBarColorList[0] },
                            { offset: 0.5, color: colorDef.normalBarColorList[1] },
                            { offset: 1, color: colorDef.normalBarColorList[2] }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: colorDef.normalBarColorList[3] },
                            { offset: 0.7, color: colorDef.normalBarColorList[3] },
                            { offset: 1, color: colorDef.normalBarColorList[0] }
                        ]
                    )
                }
            }
        });
        option.series = seriesData;
    }
    var publicProperties = {
        title: {
            text: titletext,
            subtext: subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 10,
            backgroundColor: colorDef.titleBgColor,
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: colorDef.titleColor
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: colorDef.subTitleColor
            }
        },
        legend: {
            show: islegend,
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
            orient: orienttype,
            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: legendX,
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: legendY,
            itemWidth: 24,   // 设置图例图形的宽
            itemHeight: 18,  // 设置图例图形的高
            textStyle: {
                color: colorDef.legendColor  // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
            data: legendData

        },
        toolbox: {
            show: istoolbox,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        // grid: {
        // 	left: '10%',
        // 	right: '10%',
        // 	bottom: '15%',
        // 	top: '15%',
        // 	containLabel: true
        // },
        grid: grid
    }
    option = Object.assign(option, publicProperties)
    myChart.setOption(option);
}


//折线图
/*
line 折线图
lines 多条折线图
doubleYLines 双Y轴折线图
*/

/*
 * id
 *            容器ID
 * titletext
 *            主标题
 * subtitletext
 *            副标题
 * islegend
 *            是否显示示例，默认值true
 * istoolbox
 *            是否显示右上方的工具栏，默认值true
 * istooltip
 *            是否显示提示框，默认值true
 * orienttype
 *            图例的排序方式，垂直显示(vertical),默认为水平显示属性为horizontal   
 * legendX  设置水平安放位置，默认'center'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
 * legendY  设置垂直安放位置，默认'bottom'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 
 * grid     设置grid组件在容器中的位置  默认值：  ['10%','10%','20%','30%'] 

 
 ajaxdata格式
 	line{
		title:'宽带',
		yAxisName:'数量（万）',
		xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		seriesData:['1234','1765','1827','1967','2298','1967','2098','0','0','0','0','0']
	 }

	lines:{
	 		title:'流失用户趋势',
	 		legendData:['WiFi告警的天翼网关数','流失用户数'],
	 		xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	 		seriesData:[
	 			[355,315,248,312,311,346,373,356,0,0,0,0],
	 			[164,165,146,155,154,154,163,172,0,0,0,0]
	 		]
	 	}

	doubleYLines:{
	 		title:'流失用户趋势',
	 		legendData:['WiFi告警的天翼网关数','流失用户数'],
			xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			yAxisName:['数量（万）','数量（万）'],
	 		seriesData:[
	 			[355,315,248,312,311,346,373,356,0,0,0,0],
	 			[164,165,146,155,154,154,163,172,0,0,0,0]
	 		]
	 	}
 */

function EchartsLine(id, type) {
    var myChart = echarts.init(document.getElementById(id));
    var legendData = r_data[id].legendData;
    var xAxisData = r_data[id].xAxisData;
    var titletext = $('#' + id).attr('titletext')
    var subtitletext = $('#' + id).attr('subtitletext')
    var islegend = $('#' + id).attr('islegend')
    var istoolbox = $('#' + id).attr('istoolbox')
    var istooltip = $('#' + id).attr('istooltip')
    var orienttype = $('#' + id).attr('orienttype')
    var legendX = $('#' + id).attr('legendX')
    var legendY = $('#' + id).attr('legendY')
    var grid = $('#' + id).attr('grid')

    if (typeof (grid) == "undefined") {
        grid = {
            left: '10%',
            right: '10%',
            bottom: '20%',
            top: '30%',
            containLabel: true
        }
    } else {
        var arr = grid.split(',')
        grid = {
            left: arr[0],
            right: arr[1],
            bottom: arr[2],
            top: arr[3],
            containLabel: true
        }
    }
    if (typeof (legendX) == "undefined") {
        legendX = 'center'
    }
    if (typeof (legendY) == "undefined") {
        legendY = 'bottom'
    }
    if (typeof (titletext) == "undefined") {
        titletext = ''
    }
    if (typeof (subtitletext) == "undefined") {
        subtitletext = ''
    }
    if (typeof (islegend) == "undefined") {
        islegend = true
    } else {
        if (islegend == 'false') {
            islegend = false
        } else {
            alert('数据格式有误')
        }
    }
    if (typeof (istoolbox) == "undefined") {
        istoolbox = true
    } else if (istoolbox == 'false') {
        istoolbox = false
    }
    if (typeof (istooltip) == "undefined") {
        istooltip = true
    } else if (istooltip == 'false') {
        istooltip = false
    }
    if (typeof (orienttype) == "undefined") {
        orienttype = 'horizontal'
    }
    option = {
        title: {
            text: titletext,
            subtext: subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 10,
            backgroundColor: colorDef.titleBgColor,
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: colorDef.titleColor
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: colorDef.subTitleColor
            }
        },
        tooltip: {
            show: istooltip,
            trigger: 'item',
            // formatter: "{b} : {c} ({d}%)",
            confine: true
        },
        legend: {
            show: islegend,
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
            orient: orienttype,
            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: legendX,
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: legendY,
            itemWidth: 24,   // 设置图例图形的宽
            itemHeight: 18,  // 设置图例图形的高
            textStyle: {
                color: colorDef.legendColor  // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
            data: legendData

        },
        // grid: {
        // 	left: '10%',
        // 	right: '10%',
        // 	bottom: 30,
        // 	top: '20%',
        // 	containLabel: true
        // },
        grid: grid,
        toolbox: {
            show: istoolbox,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisLine: {
                lineStyle: {
                    color: colorDef.axisColor,
                }
            }
        },
        yAxis: [],
        series: []
    };
    if (type === 'line') {
        option.series.push(
            {
                name: r_data[id].seriesName,
                data: seriesData,
                type: 'line',
                symbol: 'circle',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [
                            { offset: 0, color: colorDef.lineColorList[0] },
                            { offset: 1, color: colorDef.lineColorList[1] }
                        ]
                    ),
                    opacity: '0.4'
                },
                lineStyle: {
                    color: '#5AC2E5'
                },
                itemStyle: {
                    normal: {
                        color: colorDef.lineColorList[1],
                        label: {
                            show: false,
                            position: 'insideBottomLeft',
                            textStyle: {
                                color: colorDef.labelTextStyle,
                            }
                        }
                    }
                },
                // markPoint: {
                // 	// symbol:'circle',
                // 	symbolSize: 60,
                // 	// opacity:0.5,
                // 	data: [
                // 		// {type: 'max', name: '最大值'},
                // 		// {type: 'average', name: '平均值'},
                // 		{ name: '第二值', xAxis: 1, yAxis: r_data[id].seriesData[1], value: r_data[id].seriesData[1] },
                // 		{ name: '倒数第二值', xAxis: (xAxisData.length - 2), yAxis: r_data[id].seriesData[(xAxisData.length - 2)], value: r_data[id].seriesData[(xAxisData.length - 2)] },
                // 	],
                // 	itemStyle: {
                // 		normal: {
                // 			label: {
                // 				show: true,
                // 				// position:['50%', '-150%']
                // 				// position:'topright'
                // 				fontSize: '80%',
                // 				// color:'#ccc',
                // 			}
                // 		}
                // 	}
                // },
            }
        )
        option.yAxis = {
            type: 'value',
            name: r_data[id].yAxisName,
            axisLine: {
                lineStyle: {
                    color: colorDef.axisColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: colorDef.splitLineColor
                }
            }
        }
    } else if (type === 'lines') {
        var seriesData = [];
        var colors = colorDef.color;
        for (var i = 0; i < legendData.length; i++) {
            seriesData.push({
                name: legendData[i],
                type: 'line',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [
                            { offset: 0, color: 'rgba(0, 0, 0, 0)' },
                            { offset: 1, color: colors[i] }
                        ]
                    ),
                    opacity: '0.4'
                },
                lineStyle: {
                    color: colors[i]
                },
                // markPoint: {
                // 	symbol:'circle',
                // 	symbolSize:7,
                // 	opacity:0.5,
                //     data: [
                //         {type: 'max', name: '最大值'},
                // 		{type: 'min', name: '最小值'},
                // 	],
                // 	itemStyle:{
                // 		normal:{
                // 			label:{
                // 				show:true,
                // 				// position:['50%', '-150%']
                // 				position:'right'
                // 			}
                // 		}
                // 	}
                // },
                itemStyle: {
                    color: colors[i],
                    //每条折线图数值显示
                    // normal:{
                    // 	label:{
                    // 		show:true,
                    // 		position:'top',
                    // 		textStyle:{
                    // 			color:'#a2ebff',
                    // 		}
                    // 	}
                    // }
                },
                symbol: 'circle',
                data: r_data[id].seriesData[i]
            });
        }
        option.yAxis = {
            type: 'value',
            name: r_data[id].yAxisName,
            axisLine: {
                lineStyle: {
                    color: colorDef.axisColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: colorDef.splitLineColor
                }
            }
        }
        option.series = seriesData;
    } else if (type === 'doubleYLines') {
        //yAxis
        var yAxisLoop = []
        //series
        var seriesData = [];
        var colors = colorDef.doubleYLinesColorList;
        for (var i = 0; i < legendData.length; i++) {
            seriesData.push({
                name: legendData[i],
                type: 'line',
                smooth: false,
                yAxisIndex: [i],
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [
                            { offset: 0, color: 'rgba(0, 0, 0, 0)' },
                            { offset: 1, color: colors[i] }
                        ]
                    ),
                    opacity: '0.4'
                },
                lineStyle: {
                    color: colors[i]
                },
                // markPoint: {
                // 	symbol:'circle',
                // 	symbolSize:7,
                // 	opacity:0.5,
                //     data: [
                //         {type: 'max', name: '最大值'},
                // 		{type: 'min', name: '最小值'},
                // 	],
                // 	itemStyle:{
                // 		normal:{
                // 			label:{
                // 				show:true,
                // 				// position:['50%', '-150%']
                // 				position:'right'
                // 			}
                // 		}
                // 	}
                // },
                itemStyle: {
                    color: colors[i],
                    //每条折线图数值显示
                    // normal:{
                    // 	label:{
                    // 		show:true,
                    // 		position:'top',
                    // 		textStyle:{
                    // 			color:'#a2ebff',
                    // 		}
                    // 	}
                    // }
                },
                symbol: 'circle',
                data: r_data[id].seriesData[i]
            })
            yAxisLoop.push({
                type: 'value',
                name: r_data[id].yAxisName[i],
                nameLocation: "end",
                nameGap: 15,
                nameRotate: 0,
                axisLine: {
                    lineStyle: {
                        color: colorDef.axisColor
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: colorDef.splitLineColor
                    }
                },
                //默认以千分位显示，不想用的可以在这加一段
                axisLabel: {   //调整左侧Y轴刻度， 直接按对应数据显示
                    show: true,
                    showMinLabel: true,
                    showMaxLabel: true,
                    formatter: function (value) {
                        return value;
                    }
                }
            })

        }
        option.series = seriesData;
        option.yAxis = yAxisLoop;
    }
    myChart.setOption(option);
}

// 地图
/*
 * id
 *            容器ID
 * titletext
 *            主标题
 * subtitletext
 *            副标题
 * showDataRange
 *            是否显示自定义分档，默认值true
 * showProvinceNmae
 *            是否显示省份名称，默认值true

 
 //ajaxdata格式
    map: {
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
 */
var provinces = ['china', 'shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
var provincesText = ['全国', '上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
var mainChartMap;

function getMapTitle(name) {
    var currentIdx = provincesText.indexOf(name);
    return provinces[currentIdx];
}
function getEchartsMap(id, cityName = 'china', wait = 3000000000000, callback = null) {
    var map3Data = r_data[id].data_val
    var m3Data = []
    for (var i = 0; i < map3Data.length; i++) {
        m3Data.push({ 'name': map3Data[i].name, 'value': map3Data[i].apNum })
    }
    var colorList = colorDef.mapColorList
    var series_list = m3Data;
    var arr = [];
    var hourIndex1;
    var fhourTime1;
    for (var i = 0; i < series_list.length; i++) {
        arr.push(Number(series_list[i].value));
    }
    var max = Math.max.apply(null, arr) / 3;
    var min = Math.min.apply(null, arr);
    if (mainChartMap && !mainChartMap.isDisposed()) {
        mainChartMap.clear();
        mainChartMap.dispose();
    }
    mainChartMap = echarts.init(document.getElementById(id));
    var titletext = $('#' + id).attr('titletext')
    var subtitletext = $('#' + id).attr('subtitletext')
    var showDataRange = $('#' + id).attr('showDataRange')
    var showProvinceNmae = $('#' + id).attr('showProvinceNmae')
    if (typeof (titletext) == "undefined") {
        titletext = ''
    }
    if (typeof (subtitletext) == "undefined") {
        subtitletext = ''
    }
    if (typeof (showDataRange) == "undefined") {
        showDataRange = true
    } else if (showDataRange == 'false') {
        showDataRange = false
    }
    if (typeof (showProvinceNmae) == "undefined") {
        showProvinceNmae = true
    } else if (showProvinceNmae == 'false') {
        showProvinceNmae = false
    }
    var option = {
        title: {
            text: titletext,
            subtext: subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 10,
            backgroundColor: colorDef.titleBgColor,
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: colorDef.titleColor
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: colorDef.subTitleColor
            }
        },
        tooltip: {
            trigger: 'item',
            // formatter: function (params, ticket, callback) {
            //     var returnStr = params.name + '<br>e-Link设备数：' + params.value;
            //     return returnStr;
            // },
            formatter: callback,
        },
        dataRange: {
            show: showDataRange,
            min: 0,
            max: max,
            calculable: true,
            color: colorList,
            orient: 'vertical',
            bottom: 10,
            textStyle: {
                color: colorDef.mapDataRangeTextColor
            }
        },
        series: [
            {
                // name: 'e-Link设备',
                zoom: 1.1,
                type: 'map',
                mapType: 'china',
                roam: false,
                //显示地图省名
                label: {
                    show: showProvinceNmae,
                    formatter: '{b}',
                    color: '#fff',
                    fontSize: '70%'
                },
                itemStyle: {
                    normal: {
                        color: colorDef.mapTextColor,
                        areaColor: colorDef.mapTextColor
                    },
                    emphasis: {
                        areaColor: colorDef.mapCityColor,
                        shadowColor: colorDef.mapCityShadowColor,
                        shadowBlur: 10,
                        shadowOffsetX: 10,
                        shadowOffsetY: 10,
                    }
                },
                data: series_list
            }
        ]
    }
    if (cityName !== 'china') {
        var cityData = []
        clearInterval(fhourTime)
        $.getJSON("map/" + cityName + ".json", function (data) {
            var cityValue1 = data.features
            for (var i = 0; i < series_list.length; i++) {
                for (var j = 0; j < cityValue1.length; j++) {
                    if (cityValue1[j].properties.name == series_list[i].name) {
                        cityData.push(series_list[i])
                    }
                }
            }
            var arr = []
            for (var a of cityData) {
                arr.push(Number(a.value))
            }
            var x = Math.max(...arr)
            echarts.registerMap(cityName, data);
            option.series[0].mapType = cityName;
            option.series[0].data = cityData;
            option.series[0].zoom = 0.9;
            option.dataRange.max = Number(x);
            mainChartMap.setOption(option);
            isChina = false;
            hourIndex1 = 0;
            fhourTime1 = null;
            fhourTime1 = setInterval(function () {
                mainChartMap.dispatchAction({
                    type: "downplay",
                    seriesIndex: 0,

                });
                mainChartMap.dispatchAction({
                    type: "highlight",
                    seriesIndex: 0,
                    dataIndex: hourIndex1
                });
                mainChartMap.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: hourIndex1
                });
                hourIndex1++;
                if (hourIndex1 > cityData.length) {
                    hourIndex1 = 0;
                }
            }, wait);
            mainChartMap.on("mousemove", function (e) {
                clearInterval(fhourTime1)
                mainChartMap.dispatchAction({
                    type: "downplay",
                    seriesIndex: 0,
                });
                mainChartMap.dispatchAction({
                    type: "highlight",
                    seriesIndex: 0,
                    dataIndex: e.dataIndex
                });
                mainChartMap.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: e.dataIndex
                });
            })
            mainChartMap.on("mouseout", function () {
                clearInterval(fhourTime1)
                fhourTime1 = setInterval(function () {
                    mainChartMap.dispatchAction({
                        type: "downplay",
                        seriesIndex: 0,

                    });
                    mainChartMap.dispatchAction({
                        type: "highlight",
                        seriesIndex: 0,
                        dataIndex: hourIndex1
                    });
                    mainChartMap.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: hourIndex1
                    });
                    hourIndex1++;
                    if (hourIndex1 > cityData.length) {
                        hourIndex1 = 0;
                    }
                }, wait);
            })
        });
    } else {
        mainChartMap.setOption(option);

    }
    var hourIndex = 0;
    var fhourTime = null;
    fhourTime = setInterval(function () {
        mainChartMap.dispatchAction({
            type: "downplay",
            seriesIndex: 0,

        });
        mainChartMap.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: hourIndex
        });
        mainChartMap.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: hourIndex
        });
        hourIndex++;
        if (hourIndex > 32) {
            hourIndex = 0;
        }
    }, wait);
    mainChartMap.on("mousemove", function (e) {
        clearInterval(fhourTime)
        mainChartMap.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
        });
        mainChartMap.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: e.dataIndex
        });
        mainChartMap.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: e.dataIndex
        });
    })
    mainChartMap.on("mouseout", function () {
        clearInterval(fhourTime)
        fhourTime = setInterval(function () {
            mainChartMap.dispatchAction({
                type: "downplay",
                seriesIndex: 0,

            });
            mainChartMap.dispatchAction({
                type: "highlight",
                seriesIndex: 0,
                dataIndex: hourIndex
            });
            mainChartMap.dispatchAction({
                type: "showTip",
                seriesIndex: 0,
                dataIndex: hourIndex
            });
            hourIndex++;
            if (hourIndex > 32) {
                hourIndex = 0;
            }
        }, wait);
    })
    // option.title.text = r_data[id].title;

    var isChina = true;
    mainChartMap.on('click', function (param) {
        clearInterval(fhourTime)
        if (isChina) {
            var cityData = []
            var mapTitle = getMapTitle(param.name);
            if (mapTitle != "beijing" && mapTitle != "shanghai" && mapTitle != "chongqing") {
                $.getJSON("map/" + mapTitle + ".json", function (data) {
                    var cityValue1 = data.features
                    for (var i = 0; i < series_list.length; i++) {
                        for (var j = 0; j < cityValue1.length; j++) {
                            if (cityValue1[j].properties.name == series_list[i].name) {
                                cityData.push(series_list[i])
                            }
                        }
                    }
                    echarts.registerMap(mapTitle, data);
                    option.series[0].mapType = mapTitle;
                    option.series[0].data = cityData;
                    option.series[0].zoom = 0.9;
                    option.dataRange.max = Number(param.value) / 3;
                    option.title.text = r_data[id].title;
                    mainChartMap.setOption(option);
                    isChina = false;
                    hourIndex1 = 0;
                    fhourTime1 = null;
                    fhourTime1 = setInterval(function () {
                        mainChartMap.dispatchAction({
                            type: "downplay",
                            seriesIndex: 0,

                        });
                        mainChartMap.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: hourIndex1
                        });
                        mainChartMap.dispatchAction({
                            type: "showTip",
                            seriesIndex: 0,
                            dataIndex: hourIndex1
                        });
                        hourIndex1++;
                        if (hourIndex1 > cityData.length) {
                            hourIndex1 = 0;
                        }
                    }, wait);
                    mainChartMap.on("mousemove", function (e) {
                        clearInterval(fhourTime1)
                        mainChartMap.dispatchAction({
                            type: "downplay",
                            seriesIndex: 0,
                        });
                        mainChartMap.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: e.dataIndex
                        });
                        mainChartMap.dispatchAction({
                            type: "showTip",
                            seriesIndex: 0,
                            dataIndex: e.dataIndex
                        });
                    })
                    mainChartMap.on("mouseout", function () {
                        clearInterval(fhourTime1)
                        fhourTime1 = setInterval(function () {
                            mainChartMap.dispatchAction({
                                type: "downplay",
                                seriesIndex: 0,

                            });
                            mainChartMap.dispatchAction({
                                type: "highlight",
                                seriesIndex: 0,
                                dataIndex: hourIndex1
                            });
                            mainChartMap.dispatchAction({
                                type: "showTip",
                                seriesIndex: 0,
                                dataIndex: hourIndex1
                            });
                            hourIndex1++;
                            if (hourIndex1 > cityData.length) {
                                hourIndex1 = 0;
                            }
                        }, wait);
                    })
                });
            }
        } else {
            option.series[0].mapType = 'china';
            option.series[0].zoom = 1.1;
            option.series[0].data = series_list;
            option.dataRange.max = max;
            option.title.text = r_data[id].title;
            mainChartMap.setOption(option);
            isChina = true;
        }
    });

}