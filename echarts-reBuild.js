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
var r_data = {
	// lines: {
	// 	title:'流失用户趋势',
	// 	legendData:['WiFi告警的天翼网关数','流失用户数'],
	// 	xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	// 	yAxisName:['数量（万）','数量（万）'],
	// 	seriesData:[
	// 		[355,315,248,312,311,346,373,356,0,0,0,0],
	// 		[164,165,146,155,154,154,163,172,0,0,0,0]
	// 	]
	// },
	// pie:[{value:335, name:'北京'},
	// {value:310, name:'上海'},
	// {value:234, name:'广州'},
	// {value:135, name:'深圳'},
	// {value:148, name:'郑州'}]
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
 * showLineAndName 显示引导线和名字
 * legendX  设置水平安放位置，默认'right'，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
 * legendY  设置垂直安放位置，默认'center'，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px） 
 */

/*
ajaxdata格式
[{value:335, name:'北京'},
   {value:310, name:'上海'},
   {value:234, name:'广州'},
   {value:135, name:'深圳'},
   {value:148, name:'郑州'}]
*/


//  var r_data={'bar':{
// 	title:'组网潜客数量趋势',
// 	xAxisData:['千兆双频>=500M','百兆双频>=200M','百兆单频>=100M'],
// 	legendData:'质量指数',
// 	yAxisName:'',
// 	seriesData:[10.0,20.0,30.0]
// }}




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
		legendY = 'center'
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
			backgroundColor: '#fff',
			// 主标题文本样式设置
			textStyle: {
				fontSize: 26,
				fontWeight: 'bolder',
				color: '#000080'
			},
			// 副标题文本样式设置
			subtextStyle: {
				fontSize: 18,
				color: '#8B2323'
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
				color: '#666'  // 图例文字颜色
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
							color: '#a2ebff',
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
				{ offset: 0, color: '#5AC2E5' },
				{ offset: 1, color: '#5AC2E5' }

			]);
	} else if (dataIndex == 1) {
		return new echarts.graphic.LinearGradient(
			1, 0, 0, 0,
			[
				{ offset: 0, color: '#3B87C3' },
				{ offset: 1, color: '#3B87C3' }

			]);
	} else if (dataIndex == 2) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#F49C31' },
				{ offset: 1, color: '#F49C31' }
			]);
	} else if (dataIndex == 3) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#E04F31' },
				{ offset: 1, color: '#E04F31' }
			]);
	} else if (dataIndex == 4) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#05455A' },
				{ offset: 1, color: '#05455A' }
			]);
	} else if (dataIndex == 5) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#0E6F8F' },
				{ offset: 1, color: '#0E6F8F' }
			]);
	} else if (dataIndex == 6) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#055873' },
				{ offset: 1, color: '#055873' }
			]);
	} else if (dataIndex == 7) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#04314D' },
				{ offset: 1, color: '#04314D' }
			]);
	} else if (dataIndex == 8) {
		return new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{ offset: 0, color: '#FFFFFF' },
				{ offset: 1, color: '#FFFFFF' }
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
 * grid     设置grid组件在容器中的位置  默认值：  ['10%','10%','20%','30%'] 

 
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

	if (typeof (grid) == "undefined") {
		grid = {
			left: '10%',
			right: '10%',
			bottom: '20%',
			top:'30%',
			containLabel: true
		}
	}else{
		var arr = grid.split(',')
		if(arr[0]&&arr[1]&&arr[2]&&arr[3]){
			grid={
				left: arr[0],
				right: arr[1],
				bottom: arr[2],
				top:arr[3],
				containLabel: true
			}
		}else{
			alert('grid数据格式有误')
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
		}else{
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
			color: ["#E04F31", "#F49C31", "#3B87C3", "#5AC2E5", '#00405c'],
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
						color: "#a2ebff",
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
						color: "#a2ebff",
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#333'
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
			color: ['#003366', '#4876FF', '#4cabce'],
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
						color: "#a2ebff",
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#333'
					}
				}
			},
			yAxis: {
				type: 'category',
				data: xAxisData,
				axisLine: {
					show: showYAxisLine,
					lineStyle: {
						color: "#a2ebff",
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
						color: "#a2ebff",
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#333'
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
						color: "#a2ebff",
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
								{ offset: 0, color: '#41d6d4' },
								{ offset: 0.5, color: '#1c87f1' },
								{ offset: 1, color: '#1c87f1' }
							]
						),
						label: {
							show: true,
							position: 'right',//居中显示：inside
							textStyle: {
								color: '#a2ebff'
							}
						}
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							1, 0, 0, 0,
							[
								{ offset: 0, color: '#1c87f1' },
								{ offset: 0.7, color: '#1c87f1' },
								{ offset: 1, color: '#41d6d4' }
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
						color: "#a2ebff",
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
						color: "#a2ebff"
					}
				},
				splitLine: {
					lineStyle: {
						//隐藏y轴线
						show: false,
						type: 'dashed',
						color: '#333'
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
							color: "#a2ebff"
						}
					},
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{ offset: 0, color: '#83bff6' },
							{ offset: 0.5, color: '#188df0' },
							{ offset: 1, color: '#188df0' }
						]
					)
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{ offset: 0, color: '#2378f7' },
							{ offset: 0.7, color: '#2378f7' },
							{ offset: 1, color: '#83bff6' }
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
			backgroundColor: '#fff',
			// 主标题文本样式设置
			textStyle: {
				fontSize: 26,
				fontWeight: 'bolder',
				color: '#000080'
			},
			// 副标题文本样式设置
			subtextStyle: {
				fontSize: 18,
				color: '#8B2323'
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
				color: '#666'  // 图例文字颜色
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
		grid : grid
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
			top:'30%',
			containLabel: true
		}
	}else{
		var arr = grid.split(',')
		grid={
			left: arr[0],
			right: arr[1],
			bottom: arr[2],
			top:arr[3],
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
		}else{
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
			backgroundColor: '#fff',
			// 主标题文本样式设置
			textStyle: {
				fontSize: 26,
				fontWeight: 'bolder',
				color: '#000080'
			},
			// 副标题文本样式设置
			subtextStyle: {
				fontSize: 18,
				color: '#8B2323'
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
				color: '#666'  // 图例文字颜色
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
		grid : grid,
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
					color: "#a2ebff",
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
							{ offset: 0, color: 'rgba(0, 0, 0, 0)' },
							{ offset: 1, color: '#8decff' }
						]
					),
					opacity: '0.4'
				},
				lineStyle: {
					color: '#5AC2E5'
				},
				itemStyle: {
					normal: {
						color: '#8decff',
						label: {
							show: false,
							position: 'insideBottomLeft',
							textStyle: {
								color: '#a2ebff',
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
					color: "#a2ebff"
				}
			},
			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#333'
				}
			}
		}
	} else if (type === 'lines') {
		var seriesData = [];
		var colors = ["#E04F31", "#F49C31", "#3B87C3", "#5AC2E5", '#00405c'];
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
					color: "#a2ebff"
				}
			},
			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#333'
				}
			}
		}
		option.series = seriesData;
	} else if (type === 'doubleYLines') {
		//yAxis
		var yAxisLoop = []
		//series
		var seriesData = [];
		var colors = ["#3B87C3", "#F49C31", "#56eff7", "#009c9f", '#005d85'];
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
						color: "#a2ebff"
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#333'
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
