<template>
  <CCard>
    <CCardBody>
      <CRow>
        <CCol sm="2" style="line-height:30px;">標題</CCol>
        <CCol> <CInput label="" id="title" placeholder="請輸入標題" horizontal/></CCol>
        <!-- <CCol></CCol> -->
      </CRow>
      <CRow>
        <CCol sm="2" style="line-height:30px;">內容</CCol>
        <CCol> <CInput label="" id="content" placeholder="請輸入內容" horizontal/></CCol>
        <!-- <CCol></CCol> -->
      </CRow>
      <CRow>
        <CCol sm="2" style="line-height:30px;">幾秒後發送</CCol>
        <CCol>
          <CSelect label="" horizontal :options="['0', '1', '2', '3']" placeholder="" />
        </CCol>
        <!-- <CCol></CCol> -->
      </CRow>
      <CRow>
        <CCol sm="2" style="line-height:30px;">接收名稱</CCol>
        <CCol>
          <CSelect label="" horizontal :options="['0', '1', '2', '3']" placeholder="" />
        </CCol>
        <!-- <CCol></CCol> -->
      </CRow>
    </CCardBody>
  </CCard>
</template>
<script>
import axios from 'axios';
export default {
  name: 'PushTest',
  data() {
    return {};
  },
  mounted() {
    // axios
    //   .post(
    //     'https://porter-alpha.dynacloud.co/ConnectDB.php',
    //     {},
    //     {
    //       headers: {},
    //     }
    //   )
    //   .then((res) => {
    //     console.table(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    $.post(
      'https://porter-alpha.dynacloud.co/ConnectDB.php',
      {},
      function(result) {
        if (result.status == true) {
          // window.location.reload();
          console.log('hi');
        } else {
          alert(result.message);
        }
      },
      'json'
    );
  },
};
</script>
