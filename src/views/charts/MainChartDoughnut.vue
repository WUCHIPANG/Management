<template>
  <div id="fullDashDoughunt" class="bgColor_w">
    <CChartDoughnut :datasets="defaultDatasets" :labels="['檢體運送', '藥物傳送', '病人檢查', '領藥']" :options="defaultOptions" />
  </div>
</template>

<script>
import { CChartDoughnut } from '@coreui/vue-chartjs';

export default {
  name: 'MainChartDoughnut',
  components: { CChartDoughnut },
  data() {
    return {
      data: ['40', '20', '60', '10'],
      isFull: false,
    };
  },
  computed: {
    defaultDatasets() {
      return [
        {
          backgroundColor: ['#36a2eb80', '	#ff638480', '#ffcd5680', '	#4bc0c080', '	#9966ff80', '	#ff9f4080'],
          borderColor: ['#36a2eb', '	#ff6384', '#ffcd56', '	#4bc0c0', '	#9966ff', '	#ff9f40'],
          data: this.data,
        },
      ];
    },
    defaultOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        // 畫布縱橫比
        aspectRatio: 1,
        // 文字右方
        legend: {
          position: 'right',
          align: 'start',
          labels: {
            fontColor: 'black',
            // fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            padding: 30,
          },
        },
        tooltips: {
          // 加上百分比符號
          callbacks: {
            label: function(tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var html = '';
              for (var dataset in data.datasets) {
                html += data.datasets[dataset].data[tooltipItem.index] + '%';
              }
              dataLabel += ' : ' + html;
              return dataLabel;
            },
          },
        },
        // 布局配置
        // layout: {
        //   padding: {
        //     left: 50,
        //     right: 0,
        //     top: 0,
        //     bottom: 0,
        //   },
        // },
      };
    },
  },
  mounted() {
    this.chartLineDay = this.common.getChartDate();

    // let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    // isFullscreen = !!isFullscreen;
    // let that = this;
    // document.addEventListener('fullscreenchange', () => {
    //   that.isFull = !that.isFull;
    // });
    // document.addEventListener('mozfullscreenchange', () => {
    //   that.isFull = !that.isFull;
    // });
    // document.addEventListener('webkitfullscreenchange', () => {
    //   that.isFull = !that.isFull;
    // });
    // document.addEventListener('msfullscreenchange', () => {
    //   that.isFull = !that.isFull;
    // });
  },
  methods: {
    fullScreenEvent(type) {
      this.$emit('type', type);
      this.isFull = !this.isFull;
    },
  },
};
</script>
<style></style>
