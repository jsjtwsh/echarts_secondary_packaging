/**
 * 这是一个判空的函数，可以单独提出来放到工具类中
 * 
 * @param str
 * @returns {Boolean}
 */
function IsEmptyData(str) {
	var result = false;
	if(str == null || typeof(str) == 'undefined') {
		result = true;
	} else {
		var reg = new RegExp(" ", "g");
		str += "";
		str = str.replace(reg, "");
		if(str.length == 0) {
			result = true;
		}
	}

	return result;
}

/**
 * 柱状图
 * 
 * id
 *            容器ID
 * ajaxdata
 *            JSON数据
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
 */

 /*
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
/*
竖向层叠柱状图 verticalCascade
横向层叠柱状图 transverseCascade
横向柱状图  transverse
竖向柱状图 vertical
*/
 var r_data={'bar':{
	title:'组网潜客数量趋势',
	xAxisData:['千兆双频>=500M','百兆双频>=200M','百兆单频>=100M'],
	legendData:'质量指数',
	yAxisName:'',
	seriesData:[10.0,20.0,30.0]
}}


function echars_new(id,url,type){
	if(IsEmptyData(id) || IsEmptyData(document.getElementById(id))) {
		alert("绑定的容器ID不存在");
		return 
	}
	//e_ajax(id,url)
	EchartsBar(id,type)
	

}


function e_ajax( id , url){
	var new_data = []
	$.ajax({
		type:"GET",
		url:url,
		timeout : 20000, //超时时间设置，单位毫秒
		dataType:"json",
		async:false,
		success:function(data){
			if(data!=null){
				r_data[id] = new_data
			}
		},
		error:function(error){
			alert(error)
		}
	});

}

function EchartsBar(id,type){
	var myChart = echarts.init(document.getElementById(id))
	var xAxisData=r_data[id].xAxisData;
	var legendData = r_data[id].legendData

	var titletext = $('#'+id).attr('titletext')
	var subtitletext = $('#'+id).attr('subtitletext')
	var islegend = $('#'+id).attr('islegend')
	var istoolbox = $('#'+id).attr('istoolbox')
	var istooltip = $('#'+id).attr('istooltip')
	var orienttype = $('#'+id).attr('orienttype')
	if(typeof(titletext)=="undefined"){
		titletext = ''
	}
	if(typeof(subtitletext)=="undefined"){
		subtitletext = ''
	}
	if(typeof(islegend)=="undefined"){
		islegend = true
	}else{
		if(islegend == 'false'){
			islegend = false
		}
	}
	if(typeof(istoolbox)=="undefined"){
		istoolbox = true
	}else if(istoolbox == 'false'){
		istoolbox = false
	}
	if(typeof(istooltip)=="undefined"){
		istooltip = true
	}else if(istooltip == 'false'){
		istooltip = false
	}
	if(typeof(orienttype)=="undefined"){
		orienttype = 'vertical'
	}
	if(type === 'verticalCascade'){
		var option = {
			color: ["#E04F31","#F49C31","#3B87C3","#5AC2E5",'#00405c'],
			tooltip : {
				show:istooltip,
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
				axisPointer : {
					type : 'shadow'	
				},
				confine: true
			},
			grid: {
				left: '1%',
				right: '1%',
				bottom: '30%',
				top:'25%',
				containLabel: true
			},
			xAxis:  {
				type: 'category',
				data: xAxisData,
				axisLine: {
					lineStyle: {
						color: "#a2ebff",
					}
				},
				axisLabel: {  
					interval:0,  
					// rotate:40  
				 }  
				
			},
			yAxis: {
				name: yAxisName,
				type: 'value',
				axisLine: {
					lineStyle: {
						color: "#a2ebff",
					}
				},
				splitLine :{
					lineStyle: {
						type: 'dashed',
						color:'#333'
					}
				}
			},
			series: []
		};
		var seriesData=[];
		for(var i=0;i<legendData.length;i++){
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
				data: opts.seriesData[i]
			});
		}
		option.series=seriesData;
	}else if(type ==='transverseCascade'){
		var option = {
			color: ['#003366','#4876FF','#4cabce'],
			tooltip : {
				show:istooltip,
				trigger: 'axis',
				formatter: function (params,ticket,callback){
					var returnStr=opts.title;
					for(var i=0;i<params.length;i++){
						if(params[i].value!=0){
							returnStr += "<br>"+params[i].seriesName+"："+params[i].value;
						}
					}
					return returnStr;
				},
				axisPointer : {
					type : 'shadow'	
				},
				confine: true
			},
			grid: {
				left: '1%',
				right: '1%',
				bottom: '5%',
				top:'5%',
				containLabel: true
			},
			xAxis:  {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: "#a2ebff",
					}
				},
				splitLine :{
					lineStyle: {
						type: 'dashed',
						color:'#333'
					}
				}
			},
			yAxis: {
				type: 'category',
				data: xAxisData,
				axisLine: {
					lineStyle: {
						color: "#a2ebff",
					}
				}
			},
			series: []
		};
		var seriesData=[];
		for(var i=0;i<legendData.length;i++){
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
				data: opts.seriesData[i]
			});
		}
		option.series=seriesData;

	}else if(type ==='transverse'){
		var option = {
			color: ['#4cabce'],
			tooltip: {
				show:istooltip,
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
				confine: true
			},
			grid: {
				left: '3%',
				bottom: '10%',
				top:'10%',
				containLabel: true
			},
			xAxis:  {
				type: 'value',
				name: opts.yAxisName,
				axisLine: {
				lineStyle: {
					color: "#a2ebff",
				}
				},
				splitLine :{
					lineStyle: {
						type: 'dashed',
						color:'#333'
					}
				}
			},
			yAxis: {
				type: 'category',
				data: xAxisData,
				axisLine: {
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
				name:legendData,
				type: 'bar',
				data: opts.seriesData,
				barWidth : 30,//柱图宽度
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							1, 0, 0, 0,
							[
								{offset: 0, color: '#41d6d4'},
								{offset: 0.5, color: '#1c87f1'},
								{offset: 1, color: '#1c87f1'}
							]
						),
						label:{
							show:true,
							position:'right',//居中显示：inside
							textStyle:{
								color:'#a2ebff'
							}
						}
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							1, 0, 0, 0,
							[
								{offset: 0, color: '#1c87f1'},
								{offset: 0.7, color: '#1c87f1'},
								{offset: 1, color: '#41d6d4'}
							]
						)
					}
				}
			}]
		};
	}else{
		var option = {
			tooltip: {
				show:istooltip,
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '5%',
				right: '4%',
				bottom: '13%',
				top:'18%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data:xAxisData,
				axisLine: {
					lineStyle: {
						color: "#a2ebff",
					}
				},
				axisLabel:{ //X轴文字倾斜显示
					interval:0,
					// rotate:'-1'
				}
			},
			yAxis: {
				type: 'value',
				name: opts.yAxisName,
				axisLine: {
					lineStyle: {
						color: "#a2ebff"
					}
				},
				splitLine :{
					lineStyle: {
						type: 'dashed',
						color:'#333'
					}
				}
			},
			series: []
		};
		var seriesData=[];
		seriesData.push({
			type: 'bar',
			data: opts.seriesData,
			barWidth : 35,//柱图宽度
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
							{offset: 0, color: '#83bff6'},
							{offset: 0.5, color: '#188df0'},
							{offset: 1, color: '#188df0'}
						]
					)
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset: 0, color: '#2378f7'},
							{offset: 0.7, color: '#2378f7'},
							{offset: 1, color: '#83bff6'}
						]
					)
				}
			}
		});
		option.series=seriesData;
	}
	var publicProperties = {
		title: {
            text: titletext,
            subtext:subtitletext,
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y:'top',
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
		// legend: {
		// 	show:islegend,
		// 	data: legendData,  
		// 	top: 'bottom',//图列相对容器的位置 top\bottom\left\right
		// 	textStyle :{color:'#a2ebff'}
		// },
		legend: {
            show:islegend,
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
            orient: orienttype,
            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'left',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'center',
            itemWidth: 24,   // 设置图例图形的宽
            itemHeight: 18,  // 设置图例图形的高
            textStyle: {
              color: '#666'  // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            backgroundColor: '#eee',  // 设置整个图例区域背景颜色
            data: legendData

        },
		toolbox: {
			show:istoolbox,
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
		}
	}
	option = Object.assign(option,publicProperties)
	//option.title.text=opts.title;
	myChart.setOption(option);
}