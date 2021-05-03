<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CForm>
          <CSelect label="公告" horizontal :options="['日常公告', '訊息通知']" placeholder="" />
          <CRow class="radio">
            <CCol sm="3"> </CCol>
            <CCol>
              <input id="A1" name="radioA" type="radio" value="10" v-model="radioTypeA" checked />
              <label for="A1" class="radio-label">全部</label>
            </CCol>
            <CCol>
              <input id="A2" name="radioA" type="radio" v-model="radioTypeA" value="20" />
              <label for="A2" class="radio-label">個人</label>
            </CCol>
            <CCol> </CCol>
          </CRow>
          <CSelect label=" " horizontal :options="['曾哲嘉']" placeholder="Please select" v-model="levelType" />
          <CTextarea label="公告內容" placeholder="" horizontal rows="9" />
          <div class="form-group form-actions positionR">
            <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>
