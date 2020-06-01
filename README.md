＃echarts_secondary_packaging
```
1.此文件依赖jquery和echarts.min.js。顺序为echarts.js为先，rebuid.js为后。
2.其中各个参数的修改都为直接添加自定义属性来修改。
3.其中定义了预期数据值的格式。不要随意修改。
4.map文件夹为地图省份文件夹，按需加载。
```

### 环形图/饼状图文档


``
函数调用 EchartsPieRing（id,type）
id:divID
type:选择图表类型,饼图type为'pie' 
``
```
后台返回的值格式参照：
 `[{value:335, name:'北京'},
    {value:310, name:'上海'},
    {value:234, name:'广州'},
    {value:135, name:'深圳'},
    {value:148, name:'郑州'}]`
```
#### 各个参数说明

```
1.id
说明：调用函数需要传入的容器ID

```
```
2.roseType = 'radius' （此参数可直接在当前div中当做自定义参数写入）
说明： 将饼图变为3D饼图 
```
```
3.radiusType （此参数可直接在当前div中当做自定义参数写入） 
书写格式： rediusType = "45%,55%"或rediusType = "55%"
说明：1.'45%','55%' 为环形图 
     2.'55%'为饼图
```
```
4.titletext （此参数可直接在当前div中当做自定义参数写入） 
书写格式：titletext = "内容"
说明：主标题
```
```
5.subtitletext  （此参数可直接在当前div中当做自定义参数写入） 
书写格式：subtitletext = "内容"
说明：副标题 
```
```
6.islegend （此参数可直接在当前div中当做自定义参数写入） 
书写格式：islegend = "true"
说明： 是否显示示例，默认值true
```
```
7.istoolbox （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istoolbox = "true"
说明：是否显示右上方的工具栏，默认值true
```
```
8.istooltip （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istooltip = "true"
说明：是否显示提示框，默认值true
```
```
9.orienttype （此参数可直接在当前div中当做自定义参数写入）
书写格式：orienttype = "vertical"
说明： 图例的排序方式，默认为垂直显示(vertical),水平显示属性为horizontal   
```
```
10.guideLineLength1 （此参数可直接在当前div中当做自定义参数写入）
书写格式：guideLineLength1 = "5"
说明：饼图引导线1 默认值为5
```
```
11.guideLineLength2 （此参数可直接在当前div中当做自定义参数写入）
书写格式：guideLineLength1 = "5"
说明：饼图引导线2 默认值为5
```
```
12.guideLineSmooth  （此参数可直接在当前div中当做自定义参数写入）
书写格式：guideLineSmooth = "0.1"
说明：是否平滑视觉引导线，默认0.1，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
```
```
13.showLineAndName  （此参数可直接在当前div中当做自定义参数写入）
书写格式：showLineAndName = "false"
说明：是否显示引导线和名字 默认值为true(显示)

```
```
14.legendX（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendX= "right"
说明：设置水平安放位置，默认'right'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）

```
```
15.legendY（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendY= "center"
说明：设置垂直安放位置，默认'center'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 

```

### 柱状图文档


``
函数调用 EchartsBar（id,type）
id:divID
type:选择图表类型,
type:类型
 竖向层叠柱状图 'verticalCascade'
 横向层叠柱状图 'transverseCascade'
 横向柱状图  'transverse'
 竖向柱状图 'bar'
``
```
后台返回的值格式参照：
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
```
#### 各个参数说明

```
1.id
说明：调用函数需要传入的容器ID

```
```
2.titletext （此参数可直接在当前div中当做自定义参数写入） 
书写格式：titletext = "内容"
说明：主标题
```
```
3.subtitletext  （此参数可直接在当前div中当做自定义参数写入） 
书写格式：subtitletext = "内容"
说明：副标题 
```
```
4.islegend （此参数可直接在当前div中当做自定义参数写入） 
书写格式：islegend = "true"
说明： 是否显示示例，默认值true
```
```
5.istoolbox （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istoolbox = "true"
说明：是否显示右上方的工具栏，默认值true
```
```
6.istooltip （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istooltip = "true"
说明：是否显示提示框，默认值true
```
```
7.orienttype （此参数可直接在当前div中当做自定义参数写入）
书写格式：orienttype = "vertical"
说明： 图例的排序方式，默认为垂直显示(vertical),水平显示属性为horizontal   
```
```
8.barWidth（此参数可直接在当前div中当做自定义参数写入）
书写格式：barWidth= "30"
说明：柱状图柱子宽度  默认30
```
```
9.showXAxisLine（此参数可直接在当前div中当做自定义参数写入）
书写格式：showXAxisLine= "true"
说明：是否显示Y轴轴线,默认为true
```
```
10.showYAxisLine（此参数可直接在当前div中当做自定义参数写入）
书写格式：showYAxisLine= "true"
说明：是否显示Y轴轴线,默认为true
```
```
11.legendX（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendX= "right"
说明：设置水平安放位置，默认'right'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）

```
```
12.legendY（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendY= "center"
说明：设置垂直安放位置，默认'center'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 

```
```
13.grid（此参数可直接在当前div中当做自定义参数写入）
书写格式：grid="10%,10%,20%,30%"
说明：设置grid组件在容器中的位置

```
### 折线图文档


``
函数调用 EchartsLine（id,type）
id:divID
type:选择图表类型,
type:类型
 折线图 'line'
 多条折线图 'lines'
双Y轴折线图  'doubleYLines'
``
```
后台返回的值格式参照：
 折线图：
 	{
		title:'宽带',
		yAxisName:'数量（万）',
		xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		seriesData:['1234','1765','1827','1967','2298','1967','2098','0','0','0','0','0']
	 }
	多条折线图： 
	{
	 		title:'流失用户趋势',
	 		legendData:['WiFi告警的天翼网关数','流失用户数'],
	 		xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	 		seriesData:[
	 			[355,315,248,312,311,346,373,356,0,0,0,0],
	 			[164,165,146,155,154,154,163,172,0,0,0,0]
	 		]
	 	}
	双Y轴折线图： 
	{
	 		title:'流失用户趋势',
	 		legendData:['WiFi告警的天翼网关数','流失用户数'],
			xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			yAxisName:['数量（万）','数量（万）'],
	 		seriesData:[
	 			[355,315,248,312,311,346,373,356,0,0,0,0],
	 			[164,165,146,155,154,154,163,172,0,0,0,0]
	 		]
	 	}
```
#### 各个参数说明

```
1.id
说明：调用函数需要传入的容器ID

```
```
2.titletext （此参数可直接在当前div中当做自定义参数写入） 
书写格式：titletext = "内容"
说明：主标题
```
```
3.subtitletext  （此参数可直接在当前div中当做自定义参数写入） 
书写格式：subtitletext = "内容"
说明：副标题 
```
```
4.islegend （此参数可直接在当前div中当做自定义参数写入） 
书写格式：islegend = "true"
说明： 是否显示示例，默认值true
```
```
5.istoolbox （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istoolbox = "true"
说明：是否显示右上方的工具栏，默认值true
```
```
6.istooltip （此参数可直接在当前div中当做自定义参数写入） 
书写格式：istooltip = "true"
说明：是否显示提示框，默认值true
```
```
7.orienttype （此参数可直接在当前div中当做自定义参数写入）
书写格式：orienttype = "vertical"
说明： 图例的排序方式，默认为垂直显示(vertical),水平显示属性为horizontal   
```
```
8.legendX（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendX= "center"
说明：设置水平安放位置，默认'center'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
```
```
9.legendY（此参数可直接在当前div中当做自定义参数写入）
书写格式：legendY = "bottom"
说明：设置垂直安放位置，默认'bottom'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
```
```
10.grid（此参数可直接在当前div中当做自定义参数写入）
书写格式：grid="10%,10%,20%,30%"
说明：设置grid组件在容器中的位置 默认值： "10%,10%,20%,30%"
```
### 地图
``
函数调用 getEchartsMap（id,cityName,callback）
id:divID
cityName:需要渲染的地图（省份或者全国） 
callback:tooltip的回调函数，用来编写悬浮框的显示内容
``
```
后台返回的值格式参照：
 `
{
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
        //等等
       
    ]
}
`
```
#### 各个参数说明

```
1.id
说明：调用函数需要传入的容器ID

```
```
2.titletext （此参数可直接在当前div中当做自定义参数写入） 
书写格式：titletext = "内容"
说明：主标题
```
```
3.subtitletext  （此参数可直接在当前div中当做自定义参数写入） 
书写格式：subtitletext = "内容"
说明：副标题 
```
```
4.showDataRange（此参数可直接在当前div中当做自定义参数写入） 
书写格式：showDataRange= "true"
说明：  是否显示自定义分档，默认值true
```
```
5.showProvinceNmae（此参数可直接在当前div中当做自定义参数写入） 
书写格式：showProvinceNmae= "true"
说明：是否显示省份名称，默认值true
```
### 颜色主题设置
```
js初始化时候调用js方法 
修改初始化：echars_init(参数)
说明：参数为使用第几套颜色主题（目前参数为 1  2）。
```
```
color1 = {
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
```
```
color2 = {
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
```
