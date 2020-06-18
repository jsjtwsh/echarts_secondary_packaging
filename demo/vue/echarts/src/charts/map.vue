<template>
  <div>
    <div
     ref='mapchart'
     class='echartbox'
    >
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import'../../static/map/js/china.js'
export default {
  props: {
    etype:String,
    mapdata: Object,
    titletext:{
        type:String,
        default: ''
    },
    subtitletext:{
        type:String,
        default: ''
    },
    showDataRange:{
        type:Boolean,
        default: true
    },
    showProvinceNmae:{
        type:Boolean,
        default: true
    },
      colorDef:{
        type:Object,
        default:function(){
            return {
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
            }
        }
    }


  },
  data () {
    return {
        provinces:['china', 'shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'],
        provincesText:['全国', '上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门']
    }
  },
  mounted () {
     this.getEchartsMap()
  },
  methods: {
    getMapTitle:function(name){
        var that = this
        var currentIdx = that.provincesText.indexOf(name);
        return that.provinces[currentIdx];
    },
    getEchartsMap:function(cityName = 'china', wait = 3000, callback = null) {
    var that = this
    var map3Data = that.mapdata.data_val
    var m3Data = []
    var mainChartMap = echarts.init(this.$refs.mapchart)
    for (var i = 0; i < map3Data.length; i++) {
        m3Data.push({ 'name': map3Data[i].name, 'value': map3Data[i].apNum })
    }
    var colorList = that.colorDef.mapColorList
    var series_list = m3Data;
    var arr = [];
    var hourIndex1;
    var fhourTime1;
    for (var i = 0; i < series_list.length; i++) {
        arr.push(Number(series_list[i].value));
    }
    var max = Math.max.apply(null, arr) / 3;
    var min = Math.min.apply(null, arr);
    var option = {
        title: {
            text: that.titletext,
            subtext: that.subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 10,
            backgroundColor: that.colorDef.titleBgColor,
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: that.colorDef.titleColor
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: that.colorDef.subTitleColor
            }
        },
        tooltip: {
            // trigger: 'item',
            // formatter: function (params, ticket, callback) {
            //     var returnStr = params.name + '<br>e-Link设备数：' + params.value;
            //     return returnStr;
            // },
            formatter: callback,
        },
        dataRange: {
            show: that.showDataRange,
            min: 0,
            max: max,
            calculable: true,
            color: colorList,
            orient: 'vertical',
            bottom: 10,
            textStyle: {
                color: that.colorDef.mapDataRangeTextColor
            }
        },
        series: [
            {
                zoom: 1.1,
                type: 'map',
                mapType: 'china',
                roam: false,
                //显示地图省名
                label: {
                    show: that.showProvinceNmae,
                    formatter: '{b}',
                    color: '#fff',
                    fontSize: '70%'
                },
                itemStyle: {
                    normal: {
                        color: that.colorDef.mapTextColor,
                        areaColor: that.colorDef.mapTextColor
                    },
                    emphasis: {
                        areaColor: that.colorDef.mapCityColor,
                        shadowColor: that.colorDef.mapCityShadowColor,
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

    var isChina = true;
    mainChartMap.on('click', function (param) {
        clearInterval(fhourTime)
        if (isChina) {
            var cityData = []
            var mapTitle = that.getMapTitle(param.name);
            if (mapTitle != "beijing" && mapTitle != "shanghai" && mapTitle != "chongqing") {
                //$.getJSON("map/" + mapTitle + ".json", function (data) {
                that.$axios.get('static/map/'+mapTitle+'.json').then((data) => {
                    var cityValue1 = data.data.features
                    for (var i = 0; i < series_list.length; i++) {
                        for (var j = 0; j < cityValue1.length; j++) {
                            if (cityValue1[j].properties.name == series_list[i].name) {
                                cityData.push(series_list[i])
                            }
                        }
                    }
                    echarts.registerMap(mapTitle, data.data);
                    option.series[0].mapType = mapTitle;
                    option.series[0].data = cityData;
                    option.series[0].zoom = 0.9;
                    option.dataRange.max = Number(param.value) / 3;
                    option.title.text = that.mapdata.title;
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
            option.title.text = that.mapdata.title;
            mainChartMap.setOption(option);
            isChina = true;
        }
    });

}
  }
}

</script>

<style scoped>
.echartbox{
    width: 1000px;
    height: 1000px;
}
</style>K