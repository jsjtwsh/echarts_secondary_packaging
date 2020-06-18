<template>
  <div>
    <div
     ref='barchart'
     class='echartbox'
    >
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Bar',
  props: {
    etype:String,
    bardata: Object,
    titletext:{
        type:String,
        default: ''
    },
    subtitletext:{
        type:String,
        default: ''
    },
    islegend:{
        type:Boolean,
        default: true
    },
    istoolbox:{
        type:Boolean,
        default: true
    },
    istooltip:{
        type:Boolean,
        default: true
    },
    orienttype:{
        type:String,
        default: 'horizontal'
    },
    barWidth:{
        type:Number,
        default: 20
    },
    showXAxisLine:{
        type:Boolean,
        default: true
    },
    showYAxisLine:{
        type:Boolean,
        default: true
    },
    showSplitLine:{
        type:Boolean,
        default: true
    },
    legendX:{
        type:String,
        default: 'center'
    },
    legendY:{
        type:String,
        default: 'bottom'
    },
    grid:{
        type:Object,
        default:function(){
            return {
            left: '10%',
            right: '10%',
            bottom: '20%',
            top: '20%',
            containLabel: true
        }}
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
    }
  },
  mounted () {
     this.drawBar(this.type)
  },
  methods: {
    drawBar (type,formatter) {
        if(formatter == null || typeof (formatter) == 'undefined'){
            formatter = null
        }
        let myChart = echarts.init(this.$refs.barchart)
        if (type === 'verticalCascade') {
            var option = {
                color: this.colorDef.color,
                tooltip: {
                    show: this.istooltip,
                    trigger: 'axis',
                    formatter:null,
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
                    data: this.bardata.xAxisData,
                    axisLine: {
                        //隐藏x轴线 showXAxisLine
                        show: this.showXAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        // rotate:40  
                    }


                },
                yAxis: {
                    name: this.bardata.yAxisName,
                    type: 'value',
                    axisLine: {
                        //隐藏y轴线 showYAxisLine
                        show: this.showYAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    },
                    splitLine: {
                        show: this.showSplitLine,
                        lineStyle: {
                            type: 'dashed',
                            color: this.colorDef.splitLineColor
                        }
                    }
                },
                series: []
            };
            var seriesData = [];
            for (var i = 0; i < this.bardata.legendData.length; i++) {
                seriesData.push({
                    name: this.bardata.legendData[i],
                    type: 'bar',
                    //显示柱状图中数字
                    // label: {
                    //     normal: {
                    //         show: false,
                    //         position: 'insideRight'
                    //     }
                    // },
                    barWidth: this.barWidth,//柱图宽度
                    stack: '总量',
                    data: this.bardata.seriesData[i]
                });
            }
            option.series = seriesData;
        } else if (type === 'transverseCascade') {
            var option = {
                color: this.colorDef.transverseCascadeColorList,
                tooltip: {
                    show: this.istooltip,
                    trigger: 'axis',
                    formatter:null,
                    // formatter: function (params, ticket, callback) {
                    //     var returnStr = this.bardata.titletext;
                    //     for (var i = 0; i < params.length; i++) {
                    //         if (params[i].value != 0) {
                    //             returnStr += "<br>" + params[i].seriesName + "：" + params[i].value;
                    //         }
                    //     }
                    //     return returnStr;
                    // },
                    axisPointer: {
                        type: 'shadow'
                    },
                    confine: true
                },

                xAxis: {
                    type: 'value',
                    axisLine: {
                        show: this.showXAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: this.colorDef.splitLineColor
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: this.bardata.xAxisData,
                    axisLine: {
                        show: this.showYAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    }
                },
                series: []
            };
            var seriesData = [];
            for (var i = 0; i < this.bardata.legendData.length; i++) {
                seriesData.push({
                    name: this.bardata.legendData[i],
                    type: 'bar',
                    //显示柱状图中数字
                    // label: {
                    //     normal: {
                    //         show: false,
                    //         position: 'insideRight'
                    //     }
                    // },
                    stack: '总量',
                    barWidth:this.barWidth,//柱图宽度
                    data:this.bardata.seriesData[i]
                });
            }
            option.series = seriesData;

        } else if (type === 'transverse') {
            var option = {
                color: ['#4cabce'],
                tooltip: {
                    show: this.istooltip,
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
                    name:this.bardata.yAxisName,
                    axisLine: {
                        //隐藏x轴线 showXAxisLine
                        show: this.showXAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: this.colorDef.splitLineColor
                        }

                    }
                },
                yAxis: {
                    type: 'category',
                    data: this.bardata.xAxisData,
                    axisLine: {
                        //y轴线显示 showYAxisLine
                        show: this.showYAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
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
                    name: this.bardata.legendData,
                    type: 'bar',
                    data:this.bardata.seriesData,
                    barWidth: this.barWidth,//柱图宽度
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                1, 0, 0, 0,
                                [
                                    { offset: 0, color: this.colorDef.barGradient[0] },
                                    { offset: 0.5, color: this.colorDef.barGradient[1] },
                                    { offset: 1, color: this.colorDef.barGradient[2] }
                                ]
                            ),
                            label: {
                                show: true,
                                position: 'right',//居中显示：inside
                                textStyle: {
                                    color: this.colorDef.labelTextStyle
                                }
                            }
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                1, 0, 0, 0,
                                [
                                    { offset: 0, color: this.colorDef.barGradient[1] },
                                    { offset: 0.7, color: this.colorDef.barGradient[2] },
                                    { offset: 1, color: this.colorDef.barGradient[0] }
                                ]
                            )
                        }
                    }
                }]
            };
        } else {
            var option = {
                tooltip: {
                    show: this.istooltip,
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
                    data: this.bardata.xAxisData,
                    axisLine: {
                        show: this.showXAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor,
                        }
                    },
                    axisLabel: { //X轴文字倾斜显示
                        interval: 0,
                        // rotate:'-1'
                    }
                },
                yAxis: {
                    type: 'value',
                    name: this.bardata.yAxisName,
                    axisLine: {
                        show: this.showYAxisLine,
                        lineStyle: {
                            color: this.colorDef.axisColor
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            //隐藏y轴线
                            show: false,
                            type: 'dashed',
                            color: this.colorDef.splitLineColor
                        }
                    }
                },
                series: []
            };
            var seriesData = [];
            seriesData.push({
                type: 'bar',
                data:this.bardata.seriesData,
                barWidth: this.barWidth,//柱图宽度
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "top",
                            textStyle: {
                                fontWeight: "bolder",
                                fontSize: "12",
                                color: this.colorDef.labelTextStyle
                            }
                        },
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: this.colorDef.normalBarColorList[0] },
                                { offset: 0.5, color: this.colorDef.normalBarColorList[1] },
                                { offset: 1, color: this.colorDef.normalBarColorList[2] }
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: this.colorDef.normalBarColorList[3] },
                                { offset: 0.7, color: this.colorDef.normalBarColorList[3] },
                                { offset: 1, color: this.colorDef.normalBarColorList[0] }
                            ]
                        )
                    }
                }
            });
            option.series = seriesData;
        }
        var publicProperties = {
            title: {
                text: this.titletext,
                subtext: this.subtitletext,
                // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                x: 'center',
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                y: 'top',
                // itemGap设置主副标题纵向间隔，单位px，默认为10，
                itemGap: 10,
                backgroundColor: this.colorDef.titleBgColor,
                // 主标题文本样式设置
                textStyle: {
                    fontSize: 26,
                    fontWeight: 'bolder',
                    color: this.colorDef.titleColor
                },
                // 副标题文本样式设置
                subtextStyle: {
                    fontSize: 18,
                    color: this.colorDef.subTitleColor
                }
            },
            legend: {
                show: this.islegend,
                // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                orient: this.orienttype,
                // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                x: this.legendX,
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                y: this.legendY,
                itemWidth: 24,   // 设置图例图形的宽
                itemHeight: 18,  // 设置图例图形的高
                textStyle: {
                    color: this.colorDef.legendColor  // 图例文字颜色
                },
                // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                itemGap: 30,
                // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
                data: this.legendData

            },
            toolbox: {
                show: this.istoolbox,
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
            grid: this.grid
        }
        option = Object.assign(option, publicProperties)
        myChart.setOption(option);

    }
  }
}

</script>

<style>
.echartbox{
    width: 500px;
    height: 500px;
}
</style>