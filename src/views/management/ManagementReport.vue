<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <div class="positionButton">
          <Input type="date" class="inputType" horizontal style="width:230px" /> ~ <Input type="date" horizontal style="width:230px" class="inputType" />
          <CButton block variant="outline" color="dark" class="dash_downloadButton">
            <CIcon name="cil-cloud-download" />
          </CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCardGroup columns class="card-columns cols-2">
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="7">
              <span class="titleFont">每日派單數量</span>
              <div class="small text-muted  ">{{ getMonth }}</div>
            </CCol>
            <CCol sm="5"> </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <MainChartLine />
        </CCardBody>
        <CCardFooter style="border:none;" class="pcDisplay">
          <!-- <div style="visibility:hidden;  height:15px;">111</div> -->
        </CCardFooter>
      </CCard>

      <CCard>
        <CCardHeader>
          <span class="titleFont">各類型派單統計(月)</span>
          <div class="small text-muted  ">{{ getMonth }}</div>
        </CCardHeader>
        <CCardBody>
          <div style="visibility:hidden" class="mobileDisplay"></div>
          <MainChartDoughnut v-if="doughnut5" @type="fullScreenEvent" />
          <MainChartDoughnut10 v-if="doughnut10" @type="fullScreenEvent" />
          <!-- <div style="visibility:hidden; height:5px;">111</div> -->
        </CCardBody>
        <CCardFooter style="height:25px; border:none;"></CCardFooter>
      </CCard>
    </CCardGroup>
    <CCard>
      <CCardHeader>
        <span class="titleFont ">每月派件數量比較(過去六個月)</span>
      </CCardHeader>
      <CCardBody>
        <MainChartBar />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import MainChartLine from '../charts/MainChartLine';
import MainChartDoughnut from '../charts/MainChartDoughnut';
import MainChartBar from '../charts/MainChartBar';

export default {
  name: 'Dashboard',
  components: {
    MainChartLine,

    MainChartDoughnut,
    MainChartBar,
  },
  // delimiters: ['${', '}'],
  data() {
    return {
      selected: 'Month',
      status: 'not_accepted',
      Total: '12',
      checked: '',
      datas: [],
      radioSelected: 1,
      doughnut5: true,
      doughnut10: false,
      pieDate: '',
      getMonth: '',
      getYearMonth: '',
    };
  },

  mounted() {
    // 日期區間 utils/common.js共用
    this.pieDate = this.common.getDateRange();
    this.getMonth = this.common.getChartMonth();
    this.getYearMonth = this.common.getMonth();
    // console.log(this.getMonth);

    // 圖表全螢幕縮放
    // console.log('run');
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    isFullscreen = !!isFullscreen;
    let that = this;
    document.addEventListener('fullscreenchange', () => {
      that.isFull = !that.isFull;
    });
    document.addEventListener('mozfullscreenchange', () => {
      that.isFull = !that.isFull;
    });
    document.addEventListener('webkitfullscreenchange', () => {
      that.isFull = !that.isFull;
    });
    document.addEventListener('msfullscreenchange', () => {
      that.isFull = !that.isFull;
    });
  },
  methods: {
    fullScreenEvent(type) {
      // console.log(type);
      if (type == 'chartLine') {
        // console.log('我是chartLine');
        var el = document.getElementById('fullDashLine');
      } else if (type == 'chartDoughnut') {
        // console.log('我是chartDoughnut');
        var el = document.getElementById('fullDashDoughunt');
      } else if (type == 'chartDoughnut10') {
        var el = document.getElementById('fullDashDoughunt10');
      }

      if (this.isFull) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      }
    },
    appear(data) {
      // console.log('data:', data);
    },
  },
  watch: {
    // 傳值到MainChart
    // datas() {
    //   Bus.$emit('datas', this.datas);
    // },
    radioSelected() {
      if (this.radioSelected == '1') {
        this.doughnut5 = true;
        this.doughnut10 = false;
      } else if (this.radioSelected == '2') {
        this.doughnut5 = false;
        this.doughnut10 = true;
      }
    },
  },
};
</script>
