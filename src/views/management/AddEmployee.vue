<template>
  <CCard>
    <CCardBody>
      <CForm>
        <CInput label="姓名" placeholder="請輸入姓名" horizontal />
        <CInput label="出生年月日" type="date" horizontal />
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
};
</script>
