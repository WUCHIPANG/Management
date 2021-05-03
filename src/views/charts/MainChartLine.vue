<template>
  <div id="fullDashLine" class="bgColor_w ">
    <CChartLine :datasets="defaultDatasets" :labels="chartLineDay" :options="defaultOptions" />
  </div>
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs';
import { getStyle, hexToRgba } from '@coreui/utils/src';
// import Bus from '../../bus.js';
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  name: 'MainChartLine',
  data() {
    return {
      // datas: '',
      chartLineDay: '',
      isFull: false,
    };
  },

  components: { CChartLine },
  computed: {
    defaultDatasets() {
      const brandSuccess = getStyle('success2') || '#4dbd74';
      const brandInfo = getStyle('info') || '#20a8d8';
      const brandDanger = getStyle('danger') || '#f86c6b';
      let elements = 31;
      // const data1 = [];
      // const data2 = [];
      const data3 = [];
      for (let i = 0; i <= elements; i++) {
        // data1.push(random(50, 200));
        // data2.push(random(80, 100));
        data3.push(80);
      }
      return [
        {
          label: '派單',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: [30, 39, 20, 36, 42, 48, 20, 29, 37, 40, 35, 25, 22, 22, 35, 37, 35, 40, 20, 45, 25, 37, 40, 35, 25, 42, 48, 40, 35, 38, 42],
        },
        // {
        //   label: '服務',
        //   backgroundColor: 'transparent',
        //   borderColor: brandSuccess,
        //   pointHoverBackgroundColor: brandSuccess,
        //   borderWidth: 2,
        //   data: [40, 23, 48, 52, 55, 34, 45, 40, 40, 48, 39, 37, 38, 51, 48, 45, 45, 39, 40, 42, 40, 48, 52, 55, 34, 45, 40, 40, 45, 38, 45],
        // },
        // {
        //   label: 'Alert',
        //   backgroundColor: 'transparent',
        //   borderColor: brandDanger,
        //   pointHoverBackgroundColor: brandDanger,
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: data3,
        // },
      ];
    },
    defaultOptions() {
      return {
        responsive: true,
        maintainAspectRatio: true,
        maxTicksLimit: 100,

        // 畫布縱橫比
        // aspectRatio: 2,
        // 標題
        legend: {
          display: false,
        },

        scales: {
          xAxes: [
            {
              // 直線
              gridLines: {
                drawOnChartArea: true,
              },
              ticks: {},
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 11,
                stepSize: 0.5,
                max: 100,
                min: 0,
              },
              // 橫線
              gridLines: {
                display: true,
              },
            },
          ],
        },
        elements: {
          point: {
            radius: 1,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
          line: {
            tension: 0, // 禁用贝貝茲曲線
          },
        },
      };
    },
  },
  mounted() {
    this.chartLineDay = this.common.getChartDate();

    //   let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    //   isFullscreen = !!isFullscreen;
    //   let that = this;
    //   document.addEventListener('fullscreenchange', () => {
    //     that.isFull = !that.isFull;
    //   });
    //   document.addEventListener('mozfullscreenchange', () => {
    //     that.isFull = !that.isFull;
    //   });
    //   document.addEventListener('webkitfullscreenchange', () => {
    //     that.isFull = !that.isFull;
    //   });
    //   document.addEventListener('msfullscreenchange', () => {
    //     that.isFull = !that.isFull;
    //   });
  },
  methods: {
    fullScreenEvent(type) {
      this.$emit('type', type);
      this.isFull = !this.isFull;
    },
  },
};
</script>
