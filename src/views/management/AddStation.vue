<template>
  <CCard>
    <CCardBody>
      <CForm>
        <CRow>
          <CCol sm="3">員工編號</CCol>
          <CCol sm="9" class="contentFont"> {{ this.$route.params.id }}</CCol>
        </CRow>
        <CInput label="姓名" :placeholder="name" horizontal disabled />
        <div id="level">
          <CSelect label="優先等級" horizontal :options="options" placeholder="Please select" />
        </div>
        <div id="reservation">
          <CInput label="預約時間" type="date" horizontal />
          <!-- <CSelect  horizontal :options="options" placeholder="Please select" />
          <CSelect horizontal :options="options" placeholder="Please select" /> -->
        </div>
        <CSelect label="起始地點" horizontal :options="options" placeholder="Please select" />
        <CSelect label="目的地" horizontal :options="options" placeholder="Please select" />
        <CTextarea label="備註" placeholder="Content..." horizontal rows="9" />
        <div class="form-group form-actions positionR">
          <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
        </div>
      </CForm>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
  name: 'AddTask',
  data() {
    return {
      radioType: 1,
      selected: [], // Must be an array reference!
      options: ['Option 1', 'Option 2', 'Option 3'],
      name: this.$route.params.name,
    };
  },
  watch: {
    radioType() {
      console.log('hihi', this.radioType);
      if (this.radioType == '1') {
        console.log(1);
        $('#reservation').hide();
        $('#level').show();
      } else if (this.radioType == '2') {
        console.log(2);
        $('#level').hide();
        $('#reservation').show();
      }
    },
  },
};
</script>
