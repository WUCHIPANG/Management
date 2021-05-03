<template>
  <CCard style="font-size:28px;">
    <CCardBody>
      <CForm>
        <CRow class="radio">
          <CCol sm="3">
            派單類型
          </CCol>
          <CCol>
            <input id="1" name="radio" type="radio" value="1" v-model="radioType" checked />
            <label for="1" class="radio-label">立即派單</label>
          </CCol>
          <CCol>
            <input id="2" name="radio" type="radio" v-model="radioType" value="2" />
            <label for="2" class="radio-label">預約派單</label>
          </CCol>
          <CCol> </CCol>
        </CRow>
        <CRow class="radio">
          <CCol sm="3">
            任務內容
          </CCol>
          <CCol>
            <input id="A1" name="radioA" type="radio" value="10" v-model="radioTypeA" checked />
            <label for="A1" class="radio-label">清床</label>
          </CCol>
          <CCol>
            <input id="A2" name="radioA" type="radio" v-model="radioTypeA" value="20" />
            <label for="A2" class="radio-label">傳送</label>
          </CCol>
          <CCol> </CCol>
        </CRow>
        <!-- <CSelect label=" " horizontal :options="options" placeholder="Please select" v-model="optionsType" /> -->
        <CRow>
          <CCol sm="3"></CCol>
          <CCol>
            <CSelect placeholder="01病房" horizontal />
          </CCol>
          <CCol>
            <CSelect placeholder="A床" horizontal />
          </CCol>
          <CCol>
            <div class="positionBtn">
              <CButton color="primary" variant="outline" square size="lg" class="buttonAdd">
                新增
              </CButton>
            </div>
          </CCol>
        </CRow>
        <!-- <CRow>
          <CCol sm="3"></CCol>
          <CCol>
            <div class="py-2 checkboxType authority">
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">藥物名稱A</label>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">藥物名稱B</label>
              <input type="checkbox" id="item.projectNumber + '1'" value="first_checkbox" />
              <label for="cbox1">藥物名稱C</label>
            </div>
          </CCol>
        </CRow> -->
        <!-- <div id="reservation">
          <CRow class="radio">
            <CCol sm="3"> </CCol>
            <CCol>
              <input id="3" name="radioB" type="radio" value="3" v-model="radioType1" checked />
              <label for="3" class="radio-label">單一</label>
            </CCol>
            <CCol>
              <input id="4" name="radioB" type="radio" v-model="radioType1" value="4" />
              <label for="4" class="radio-label">批次</label>
            </CCol>
            <CCol></CCol>
          </CRow>
        </div> -->

        <div id="level">
          <CSelect label="優先等級" horizontal :options="level" placeholder="Please select" v-model="levelType" />
        </div>
        <div>
          <!-- <CRow>
            <CCol sm="3">預約時間</CCol>
            <CCol> <CInput type="date" horizontal/></CCol>
            <CCol><input type="time" name="usr_time" class="inputType" style="width:300px"/></CCol>
            <CCol></CCol>
          </CRow> -->
          <!--
          <CSelect  horizontal :options="options" placeholder="Please select" />
          <CSelect horizontal :options="options" placeholder="Please select" /> -->
        </div>
        <!-- <div>
          <CRow>
            <CCol sm="3">預約週期</CCol>
            <CCol> <CSelect type="date" :options="['連續三天', '連續四天', '連續五天', '每周']" horizontal/></CCol>
            <CCol><CSelect type="date" :options="['星期一']" horizontal/></CCol>
            <CCol></CCol>
            <CCol></CCol>
          </CRow>
        </div> -->
        <CSelect label="地點" horizontal :options="['A08 - B護理站']" placeholder="Please select" />
        <!-- <CSelect label="目的地" horizontal :options="['A08 - B護理站']" placeholder="Please select" /> -->
        <CTextarea label="備註" placeholder="" horizontal rows="9" />
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
      radioType1: 3,
      radioTypeA: 'A1',
      selected: [], // Must be an array reference!
      options: ['領藥', '推床', '血庫', '檢體'],
      optionsType: '清床',
      level: ['一般', '緊急'],
      levelType: '一般',
    };
  },
  watch: {
    radioType() {
      console.log('hihi', this.radioType);
      if (this.radioType == '1') {
        console.log(1);
        $('#reservation').hide();
        $('#level').show();
        $('#time1').hide();
        $('#time').hide();
      } else if (this.radioType == '2') {
        console.log(2);
        $('#level').hide();
        $('#reservation').show();
      }
    },
    radioType1() {
      // console.log('hihi', this.radioType);
      if (this.radioType == '3') {
        console.log(1);
        $('#time1').hide();
        $('#time').show();
      } else if (this.radioType == '4') {
        console.log(2);
        $('#time1').hide();
        $('#time').show();
      }
    },
  },
};
</script>
