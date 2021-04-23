<template>
  <CCard>
    <CCardBody>
      <CForm>
        <CRow>
          <CCol sm="3">員工編號</CCol>
          <CCol sm="9" class="contentFont"> {{ this.$route.params.id }}</CCol>
        </CRow>
        <CInput label="姓名" :placeholder="name" horizontal disabled />
        <CInput label="出生年月日" placeholder="1984/06/16" horizontal disabled />
        <!-- <CInput label="出生年月日" :placeholder="name" horizontal disabled /> -->
        <CRow class="radio">
          <CCol sm="3">
            性別
          </CCol>
          <CCol>
            <input id="1" name="radio" type="radio" value="1" v-model="radioType" checked />
            <label for="1" class="radio-label">男</label>
          </CCol>
          <CCol>
            <input id="2" name="radio" type="radio" v-model="radioType" value="2" />
            <label for="2" class="radio-label">女</label>
          </CCol>
          <CCol></CCol>
          <CCol></CCol>
        </CRow>
        <CInput label="身分證字號/護照號碼" placeholder="" horizontal />
        <CInput label="手機號碼" placeholder="" horizontal />
        <CInput label="居住地" placeholder="" horizontal />

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
