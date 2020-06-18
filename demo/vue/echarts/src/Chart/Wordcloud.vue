<template>
  <div :style="{width:width, height:height}"/>
</template>

<script>
import echarts from 'echarts'

//var echarts = require('echarts/lib/echarts')
//require('echarts/lib/chart/tree')
//require('echarts/lib/component/legend')
//require('echarts/lib/component/tooltip')
// require('echarts/theme/light') // echarts theme

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
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }

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
      let series = []
      for (let key in this.data) {
        let s = {
          name: key,
          value: this.data[key]
        }
        series.push(s)
      }
      let self = this
      let chartOpt = {
        tooltip: {
          show: true
        },
        series: [{
          type: 'wordCloud',
          shape: 'circle',
          width: '80%',
          height: '80%',
          sizeRange: [10, 40],
          rotationRange: [-45, 90],
          drawOutOfBound: true,
          textPadding: 0,
          textStyle: {
            normal: {
              color: function (params) {
                return self.GLOBAL.COLOR_LIST[params.dataIndex]
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: series
        }],
        backgroundColor: '#fff',
        animationDuration: 1000
      }
      this.chart.setOption(chartOpt)
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'light')
      this.setOption()
    }
  }
}
</script>
