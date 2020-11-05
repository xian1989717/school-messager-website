<template>
  <div
    id="main"
    style="width: auto;height:400px;" />
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      const myChart = this.echarts.init(document.getElementById('main'))

      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['分数', '满分']
        },
        xAxis: {
          data: ["语文", "数学", "英语", "总分"]
        },
        yAxis: {},
        series: [
          {
            name: '分数',
            type: 'bar',
            data: [5, 20, 36, 5 + 20 + 36]
          },
          {
            name: '满分',
            type: 'bar',
            data: [120, 120, 120, 360]
          }
        ]
      }

      myChart.setOption(option)
    }
  }
</script>
