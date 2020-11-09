<template>
  <div class="echarts-kuang">
    <div :id="lineData.id" class="echarts-id"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Eline",
  props: {
    lineData: Object
  },
  computed: {
    fatherData() {
      return this.lineData.data;
    },
    ...mapState({
      green: state => state.color.green,
      blue: state => state.color.blue,
      yellow: state => state.color.yellow,
      red: state => state.color.red,
      white: state => state.color.white
    })
  },
  watch: {
    fatherData() {
      this.drawLine(this.lineData);
    }
  },
  methods: {
    drawLine(lineData) {
      let bodyWidth = document.body.offsetWidth;
      let series = [];
      let seriesLength = lineData.legendData.length
      let fontTitle = bodyWidth <= 1920 ? 14 : 16;
      let fontXy = bodyWidth <= 1920 ? 9 : 12;
      let lineWidth = 1.5;
      for (let i = 0; i < seriesLength; i++) {
        let areaStyle = null;
        let dotted = "solid";
        if (lineData.areaColor) {
          areaStyle = {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: lineData.color[i]
              },
              {
                offset: 1,
                color: "transparent"
              }
            ])
          };
        } else {
          areaStyle = null;
        }
        if (lineData.dotted) {
          if (lineData.data.length === 1) {
            dotted = "dotted";
          } else {
            if (i % 2 === 1) {
              dotted = "dotted";
              areaStyle = null;
            } else {
              dotted = "solid";
            }
          }
        } else {
          dotted = "solid";
        }
        series.push({
          name: lineData.legendData[i],
          data: lineData.data[i],
          symbol: "circle",
          symbolSize: 2,
          smooth: lineData.smooth,
          type: "line",
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              areaStyle: areaStyle,
              lineStyle: {
                width: lineWidth,
                type: dotted,
                color: lineData.color[i]
              }
            },
            emphasis: {}
          }
        });
      }
      let yAxis = [
        {
          type: "value",
          name: lineData.yName || "",
          nameLocation: "end",
          nameTextStyle: {
            color: "#fff",
            fontSize: fontXy,
            align: "right",
            verticalAlign: "bottom"
            // paddingBottom: -5
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: fontXy,
              color: this.white
            }
          },
          axisLine: {
            lineStyle: {
              color: "#636D6C"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#636D6C"
            }
          }
        }
      ];
      let legend = [
        {
          show: lineData.legendShow,
          textStyle: {
            fontSize: fontXy,
            color: this.white
          },
          itemWidth: 15,
          right: "0",
          top: "0",
          icon: "line",
          data: lineData.legendData
        }
      ];
      let myChart = this.$echarts.init(document.getElementById(lineData.id));
      let option = {
        title: {
          text: lineData.title,
          textStyle: {
            color: "#fff",
            fontSize: fontTitle
          },
          top: lineData.titleTop,
          left: lineData.titleLeft,
          right: lineData.titleRight,
          bottom: lineData.titleBottom
        },
        tooltip: {
          trigger: "axis"
        },
        legend: legend,
        color: lineData.color,
        grid: {
          top: "25%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisLabel: {
            show: true,
            // showMixLabel: true,
            // showMaxLabel: true,
            // interval: 0, // x轴文字显示完全
            textStyle: {
              fontSize: fontXy,
              color: this.white
            }
          },
          axisLine: {
            lineStyle: {
              color: "#636D6C"
            }
          },
          data: lineData.xData
        },
        yAxis: yAxis,
        series: series
      };
      myChart.setOption(option, true);
      // 只有页面最后一个echarts图会改变尺寸
      // window.onresize = function () {
      //   myChart.resize()
      // }
      // 多个echarts图都可以改变尺寸
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  mounted() {
    if (this.lineData.id) {
      this.drawLine(this.lineData);
    }
  }
};
</script>

<style scoped lang="stylus">
.echarts-kuang
  width: 100%
  height: 100%
  .echarts-id
    width: 100%
    height: 100%
</style>
