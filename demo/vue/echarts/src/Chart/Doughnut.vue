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
      let chartSeriesData = []
      let i = 0
      for (let key in this.data) {
        let s = {
          name: key,
          value: this.data[key]
        }
        if (i == 0) {
          s.label = {
            show: true,
            position: 'center',
            formatter: '{d}%',
            fontSize: 20
          }
        }
        chartSeriesData.push(s)
        i++
      }
      let chartOpt = {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        tooltip: {
          formatter: '{b}: {c} ({d}%)',
          trigger: 'item'
        },
        series: [{
          type: 'pie',
          name: 'pie',
          hoverOffset: 5,
          avoidLabelOverlap: false,
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowOffsetX: 0
            }
          },
          radius : ['60%', '90%'],
          data: chartSeriesData
        }],
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
