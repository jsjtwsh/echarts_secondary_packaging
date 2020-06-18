<template>
  <div>
    <div
     ref='linechart'
     class='echartbox'
    >
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    etype:String,
    linedata: Object,
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
        default: function(){
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
      if(this.linedata){

          var type = this.etype
          var formatter = null
           this.drawLine(type,formatter)
      }
        },
  methods: {
    drawLine (type,formatter=null) {
        if(formatter == null || typeof (formatter) == 'undefined'){
            formatter = null
        }
      let myChart = echarts.init(this.$refs.linechart)
      var that = this

    var option = {
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
        tooltip: {
            show: this.istooltip,
            trigger: 'item',
             formatter: formatter,
            confine: true
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
        // grid: {
        // 	left: '10%',
        // 	right: '10%',
        // 	bottom: 30,
        // 	top: '20%',
        // 	containLabel: true
        // },
        grid:this.grid,
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
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:this.linedata.xAxisData,
            axisLine: {
                lineStyle: {
                    color: this.colorDef.axisColor,
                }
            }
        },
        yAxis: [],
        series: []
    };
    if (type === 'lines') {
        var seriesData = [];
        var colors = this.colorDef.color;
        for (var i = 0; i < this.linedata.legendData.length; i++) {
            seriesData.push({
                name: this.linedata.legendData[i],
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
                data: this.linedata.seriesData[i]
            });
        }
        option.yAxis = {
            type: 'value',
            name: this.linedata.yAxisName,
            axisLine: {
                lineStyle: {
                    color: this.colorDef.axisColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: this.colorDef.splitLineColor
                }
            }
        }
        option.series = seriesData;
    } else if (type === 'doubleYLines') {
        //yAxis
        var yAxisLoop = []
        //series
        var seriesData = [];
        var colors = this.colorDef.doubleYLinesColorList;
        for (var i = 0; i < this.linedata.legendData.length; i++) {
            seriesData.push({
                name: this.linedata.legendData[i],
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
                data: this.linedata.seriesData[i]
            })
            yAxisLoop.push({
                type: 'value',
                name: this.linedata.yAxisName[i],
                nameLocation: "end",
                nameGap: 15,
                nameRotate: 0,
                axisLine: {
                    lineStyle: {
                        color: this.colorDef.axisColor
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color:this. colorDef.splitLineColor
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
    }else if(type === 'line'){
        option.series.push(
            {
                name: this.linedata.seriesName,
                data: this.linedata.seriesData,
                type: 'line',
                symbol: 'circle',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [
                            { offset: 0, color: this.colorDef.lineColorList[0] },
                            { offset: 1, color: this.colorDef.lineColorList[1] }
                        ]
                    ),
                    opacity: '0.4'
                },
                lineStyle: {
                    color: '#5AC2E5'
                },
                itemStyle: {
                    normal: {
                        color: this.colorDef.lineColorList[1],
                        label: {
                            show: false,
                            position: 'insideBottomLeft',
                            textStyle: {
                                color: this.colorDef.labelTextStyle,
                            }
                        }
                    }
                },
                
            }
        )
        option.yAxis = {
            type: 'value',
            name: this.linedata.yAxisName,
            axisLine: {
                lineStyle: {
                    color: this.colorDef.axisColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: this.colorDef.splitLineColor
                }
            }
        }
    }
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