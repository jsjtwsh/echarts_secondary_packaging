<template>
  <div :style="{width:width, height:height}"/>
</template>

<script>
import echarts from 'echarts'

import { debounce } from '@/utils'

//var echarts = require('echarts/lib/echarts')
//require('echarts/lib/chart/tree')
//require('echarts/lib/component/legend')
//require('echarts/lib/component/tooltip')
//require('echarts/theme/light') // echarts theme

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    data: {
      deep: true,
      handler (val) {
        this.setOption(val)
      }
    }
  },
  mounted () {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    }

    // 监听侧边栏的变化
    const sidebarEl = document.getElementsByClassName('sidebar-container')[0]
    sidebarEl.addEventListener('transitionend', this.__resizeHanlder)
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }

    const sidebarEl = document.getElementsByClassName('sidebar-container')[0]
    sidebarEl.removeEventListener('transitionend', this.__resizeHanlder)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOption () {
      const isEmptyObject = (obj) => {
        for (let key in obj) {
          return false
        }
        return true
      }
      if (isEmptyObject(this.data)) {
        return
      }
      let chartSeries = []
      let chartLegendData = []
      for (let key in this.data) {
        let value = this.data[key]
        if (typeof value === 'object') {
          for (let vkey in value) {
            let s = {
              type: 'line',
              name: vkey,
              data: []
            }
            chartSeries.push(s)
            chartLegendData.push(vkey)
          }
        }
        break
      }
      for (let key in this.data) {
        let value = this.data[key]
        let i = 0
        for (let vkey in value) {
          chartSeries[i].data.push(value[vkey])
          i++
        }
      }
      let chartOpt = {
        grid: {
          left: 60,
          right: 60,
          top: 40,
          bottom: 20
        },
        legend: {
          left: 'right',
          data: chartLegendData
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: Object.keys(this.data)
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis'
        },
        series: chartSeries,
        backgroundColor: '#fff',
        animationDuration: 1000
      }
      //console.log(chartOpt)
      this.chart.setOption(chartOpt)
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'light')
      this.setOption()
    }
  }
}
</script>
