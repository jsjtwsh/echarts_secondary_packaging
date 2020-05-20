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
*  			  
 */

 /*
 ajaxdata格式
[{value:335, name:'北京'},
    {value:310, name:'上海'},
    {value:234, name:'广州'},
    {value:135, name:'深圳'},
    {value:148, name:'郑州'}]
 */ 

 var r_data={}


function echars_new(id,url){
	if(IsEmptyData(id) || IsEmptyData(document.getElementById(id))) {
		alert("绑定的容器ID不存在");
		return 
	}
	// e_ajax(url,id)
	EchartsPieRing(id)
	

}


function e_ajax( url , id){
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
		}
	});

}

function EchartsPieRing(id){
	var myChart = echarts.init(document.getElementById(id));
	// var ajaxdata=r_data[id];
	var ajaxdata=[{value:335, name:'北京'},{value:310, name:'上海'},{value:280, name:'上海1'},{value:300, name:'上1海'}];
    var legendData = []
	if(IsEmptyData(ajaxdata)) {
		alert("值不存在");
		return 
	}
	var titletext = $('#'+id).attr('titletext')
	var subtitletext = $('#'+id).attr('subtitletext')
	var islegend = $('#'+id).attr('islegend')
	var istoolbox = $('#'+id).attr('istoolbox')
	var istooltip = $('#'+id).attr('istooltip')
	var orienttype = $('#'+id).attr('orienttype')
	var roseType = $('#'+id).attr('roseType')
	var radiusType = $('#'+id).attr('radiusType')
	var guideLineLength1 = $('#'+id).attr('guideLineLength1')
	var guideLineLength2 = $('#'+id).attr('guideLineLength2')
	var guideLineSmooth = $('#'+id).attr('guideLineSmooth')
	var showLineAndName = $('#'+id).attr('showLineAndName')
	var radiusData 
	console.log(radiusType)
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
	if(typeof(showLineAndName)=="undefined"){
		showLineAndName = true
	}else{
		if(showLineAndName =='false')
		showLineAndName = false
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
	if(typeof(radiusType)=="undefined"){
		radiusData = '45%'
	}else if(typeof(radiusType)=="string"){
		if(radiusType.toString().split(',')[1]){
			radiusData=[radiusType.toString().split(',')[0],radiusType.toString().split(',')[1]]
		}else{
			radiusData=radiusType.toString()
		}
	}
	if(typeof(roseType)=="undefined"){
		roseType = false
	}
    for(var i=0;i<ajaxdata.length;i++){
        legendData.push(ajaxdata[i].name)
	}
	if(typeof(guideLineLength1)=="undefined"){
		guideLineLength1 = 5
	}else{
		guideLineLength1 = guideLineLength1*1
	}
	if(typeof(guideLineLength2)=="undefined"){
		guideLineLength2 = 5
	}else{
		guideLineLength2 = guideLineLength2*1
	}
	if(typeof(guideLineSmooth)=="undefined"){
		guideLineSmooth = 0.1
	}else{
		if(typeof(guideLineSmooth)=="number"){
			guideLineSmooth = Number(guideLineSmooth)
		}
		if(guideLineSmooth == 'false'){
			guideLineSmooth = false
		}
		if(guideLineSmooth == 'true'){
			guideLineSmooth = true
		}
	}
	option = {
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
		tooltip : {
            show:istooltip,
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)",
			confine: true
        },
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
		},
		series : [
			{
				name: '',
				type: 'pie',
				// radius: ['25%', '40%'],
				radius:radiusData, //radius:设置饼图或是环形图
				center: ['50%', '45%'],
				data:ajaxdata,
				roseType: roseType,
				itemStyle: {
					normal:{
						color:function(params) {
							return getPieColor1(params.dataIndex);
						}
					}
				},
				label: {
					normal: {
					 show: showLineAndName,
						textStyle: {
							color: '#a2ebff',
							fontSize:'70%'
						}
					}
				},
				labelLine: {
					normal: {
						show:showLineAndName,
						smooth: guideLineSmooth,length: guideLineLength1,length2: guideLineLength2}
				}
			}
		]
	};
	myChart.setOption(option);
}
function getPieColor1(dataIndex){
	if(dataIndex==0){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '#5AC2E5'},
				{offset: 1, color: '#5AC2E5'}
				
			]);
	}else if(dataIndex==1){
		return	new echarts.graphic.LinearGradient(
			1, 0, 0, 0,
			[
				{offset: 0, color: '#3B87C3'},
				{offset: 1, color: '#3B87C3'}
				
			]);
	}else if(dataIndex==2){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '#F49C31'},
				{offset: 1, color: '#F49C31'}
			]);
	}else if(dataIndex==3){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '#E04F31'},
				{offset: 1, color: '#E04F31'}
			]);
	}else if(dataIndex==4){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '#FFFFFF'},
				{offset: 1, color: '#FFFFFF'}
			]);
	}else if(dataIndex==5){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '#0E6F8F'},
				{offset: 1, color: '#0E6F8F'}
			]);
	}else if(dataIndex==6){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '##055873'},
				{offset: 1, color: '##055873'}
			]);
	}else if(dataIndex==7){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '##04314D'},
				{offset: 1, color: '##04314D'}
			]);
	}else if(dataIndex==8){
		return	new echarts.graphic.LinearGradient(
			0, 0, 0, 1,
			[
				{offset: 0, color: '##05455A'},
				{offset: 1, color: '##05455A'}
			]);
	}
	
}