<template>
  <CChartBar :datasets="defaultDatasets" :labels="month" :options="defaultOptions" />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs';

export default {
  name: 'MainChartBar',
  data() {
    return {
      month: '',
      browser: '',
    };
  },
  components: { CChartBar },

  mounted() {
    //   進入後抓手機還是PC
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
    var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
    var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
    var bIsAndroid = sUserAgent.match(/android/i) == 'android';
    var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
    var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      // console.log('phone');
      this.browser = 'phone';
    } else {
      // console.log('pc');
      this.browser = 'pc';
    }
    this.month = this.common.getSixMonth();
  },
  computed: {
    defaultDatasets() {
      return [
        {
          label: 'Compute Engine',
          backgroundColor: '#36a2eb80',
          borderColor: '#36a2eb',
          borderWidth: 1,
          data: [250, 120, 150, 180, 170, 250],
        },
        {
          label: 'Stackdriver Logging',
          backgroundColor: '#ff638480',
          borderColor: '#ff6384',
          borderWidth: 1,
          data: [220, 260, 250, 200, 280, 310],
        },
        {
          label: 'Load Balancer',
          backgroundColor: '#ffcd5680',
          borderColor: '#ffcd56',
          borderWidth: 1,
          data: [310, 120, 280, 350, 310, 330],
        },
        {
          label: 'BigQuery',
          backgroundColor: '#4bc0c080',
          borderColor: '#4bc0c0',
          borderWidth: 1,
          data: [250, 200, 330, 280, 210, 320],
        },
      ];
    },
    defaultOptions() {
      return {
        reponsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,

        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              // 堆疊條狀圖
              // stacked: true,
              // bar寬度
              barPercentage: 0.1,
              // categoryPercentage: 0.9,
              barThickness: this.browser == 'pc' ? 22 : 5,
              // m < 10 ? '0' + m : m;

              // 直線
              gridLines: {
                // drawOnChartArea: true,
              },
            },
          ],
          yAxes: [
            {
              // 堆疊條狀圖
              // stacked: true,
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 11,
                stepSize: 0.5,
                max: 500,
                min: 0,
                // min:代表Y轴起点 stepSize:代表Y轴上的间隔
                //  min: 10,
                //         stepSize: 10
              },
              // 橫線
              gridLines: {
                display: true,
              },
            },
          ],
        },
      };
    },
  },
};
</script>
