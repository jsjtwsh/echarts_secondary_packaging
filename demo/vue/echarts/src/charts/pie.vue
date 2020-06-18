<template>
  <div>
    <div
     ref='piechart'
     class='echartbox'
    >
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    piedata: Array,
    position:{
        type:Array,
        default:function(){
            return ['50%', '45%']
        }
    },
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
    roseType:{
        type:String,
        default:''
    },
    radiusData:{
        // default:'45%'
        default:function(){
            return ['25%', '40%']
        }
            
    },
    legendX:{
        type:String,
        default: 'center'
    },
    legendY:{
        type:String,
        default: 'bottom'
    },
    guideLineLength1:{
        type:Number,
        default:5
    },
    guideLineLength2:{
        type:Number,
        default:5
    },
    guideLineSmooth:{
        type:Number,
        default:0.1
    },
    showLineAndName:{
        type:Boolean,
        default:true
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
     this.drawPie()
  },
  methods: {
    getPieColor1(dataIndex){
        var that = this
        if (dataIndex == 0) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[0] },
                    { offset: 1, color: that.colorDef.pieColorList[0] }

                ]);
        } else if (dataIndex == 1) {
            return new echarts.graphic.LinearGradient(
                1, 0, 0, 0,
                [
                    { offset: 0, color: that.colorDef.pieColorList[1] },
                    { offset: 1, color: that.colorDef.pieColorList[1] }

                ]);
        } else if (dataIndex == 2) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[2] },
                    { offset: 1, color: that.colorDef.pieColorList[2] }
                ]);
        } else if (dataIndex == 3) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[3] },
                    { offset: 1, color: that.colorDef.pieColorList[3] }
                ]);
        } else if (dataIndex == 4) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[4] },
                    { offset: 1, color: that.colorDef.pieColorList[4] }
                ]);
        } else if (dataIndex == 5) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[5] },
                    { offset: 1, color: that.colorDef.pieColorList[5] }
                ]);
        } else if (dataIndex == 6) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[6] },
                    { offset: 1, color: that.colorDef.pieColorList[6] }
                ]);
        } else if (dataIndex == 7) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[7] },
                    { offset: 1, color: that.colorDef.pieColorList[7] }
                ]);
        } else if (dataIndex == 8) {
            return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: that.colorDef.pieColorList[8] },
                    { offset: 1, color: that.colorDef.pieColorList[8] }
                ]);
        }

    },
    drawPie (formatter) {
        var that = this
        if(formatter == null || typeof (formatter) == 'undefined'){
            formatter = null
        }
        let myChart = echarts.init(that.$refs.piechart)
        var option = {
            title: {
                text:that. titletext,
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
                show: that.istooltip,
                trigger: 'item',
                formatter: formatter,
                confine: true
            },
            legend: {
                show: that.islegend,
                // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                orient: that.orienttype,
                // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                x: that.legendX,
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                y: that.legendY,
                itemWidth: 24,   // 设置图例图形的宽
                itemHeight: 18,  // 设置图例图形的高
                textStyle: {
                    color: that.colorDef.legendColor  // 图例文字颜色
                },
                // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                itemGap: 30,
                // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
                data: that.legendData

            },
            toolbox: {
                show: that.istoolbox,
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
                     radius: that.radiusData, //radius:设置饼图或是环形图
                    center: that.position,
                    data:that.piedata,
                    roseType:that.roseType,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return that.getPieColor1(params.dataIndex);
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: that.showLineAndName,
                            textStyle: {
                                color: that.colorDef.labelTextStyle,
                                fontSize: '70%'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: that.showLineAndName,
                            smooth: that.guideLineSmooth, 
                            length: that.guideLineLength1, 
                            length2: that.guideLineLength2
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);

    },

  }
}

</script>

<style>
.echartbox{
    width: 500px;
    height: 500px;
}
</style>