<template>
  <CCard style="font-size:28px;">
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

        <CInput label="手機號碼" placeholder="" horizontal />
        <CRow>
          <CCol sm="3">負責範圍(可複選)</CCol>
          <CCol>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟2FA區(A02-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟2FB區(A02-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟3FA區(A03-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟3FB區(A03-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟4FA區(A04-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟4FB區(A04-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟5FA區(A05-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟5FB區(A05-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟6FA區(A06-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟6FB區(A06-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟7FA區(A07-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟7FB區(A07-B)</label>
            </div>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟8FA區(A08-A)</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">A棟8FB區(A08-B)</label>
            </div>
          </CCol>
        </CRow>
        <div style="border:dashed 1px rgb(197, 197, 197);margin:25px;margin-left:50px; margin-right:50px;"></div>
        <CRow>
          <CCol sm="3">負責內容</CCol>
          <CCol>
            <CRow class="radio">
              <CCol>
                <input id="1" name="radio" type="radio" value="1" v-model="radioType" checked />
                <label for="1" class="radio-label">清床</label>
              </CCol>
              <CCol>
                <input id="2" name="radio" type="radio" v-model="radioType" value="2" />
                <label for="2" class="radio-label">傳送</label>
              </CCol>
              <CCol></CCol>
              <CCol></CCol>
            </CRow>
            <!-- <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">領藥</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">推床</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">血庫</label>
              <span style="visibility:hidden;">1231</span>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">檢體</label>
            </div> -->
            <!-- '領藥', '推床', '血庫', '檢體' -->
          </CCol>
        </CRow>
        <div class="form-group form-actions positionR">
          <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
        </div>
      </CForm>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
  name: 'AddEmployee',
  data() {
    return {
      radioType: 1,
      selected: [], // Must be an array reference!
      options: ['清床', '領藥', '推床', '血庫', '檢體'],
      name: this.$route.params.name,
    };
  },
};
</script>
