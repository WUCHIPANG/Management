<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CForm>
          <CRow>
            <CCol sm="3" class="textHight">
              派單編號
            </CCol>
            <CCol>
              {{ this.$route.params.num }}
            </CCol>
          </CRow>
          <CRow class="radio">
            <CCol sm="3" class="textHight">
              狀態
            </CCol>
            <CCol>
              <CBadge :color="getBadge(status)">
                {{ this.$route.params.status }}
              </CBadge>
            </CCol>
          </CRow>
          <CInput label="任務內容" placeholder="檢體傳送" horizontal disabled />

          <CInput label="開始時間" horizontal placeholder="2021/04/19 21:06:53" disabled />
          <CInput label="完成時間" v-if="complete" horizontal placeholder="2021/04/19 22:01:23" disabled />
          <CInput label="派遣人員" horizontal placeholder="曾哲嘉" disabled />
          <CInput label="派單護理站" horizontal placeholder="B022" disabled />
          <CInput label="起始地點" horizontal placeholder="3F護理站" disabled />
          <CInput label="目的地" horizontal placeholder="8F檢查室" disabled />
          <CTextarea label="備註" placeholder="" horizontal rows="9" disabled />
          <div class="form-group form-actions positionR">
            <CButton block color="dark" type="submit" variant="outline" class="sendButton" @click="back()">上一頁</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: 'TaskList',
  data() {
    return {
      status: this.$route.params.status,
      complete: false,
    };
  },
  computed: {},
  methods: {
    getBadge(status) {
      switch (status) {
        case '進行中':
          return 'success';
        case '已完成':
          this.complete = true;
          return 'secondary';
        case '異常':
          return 'danger';
        case '已預約':
          return 'info';
        default:
          'primary';
      }
    },
    back() {
      this.$router.push('/taskList');
    },
  },
};
</script>
<style>
input::placeholder {
  font-size: 20px;
}
</style>
