<template>
  <CCard style="font-size:28px;">
    <CCardBody>
      <CForm>
        <CInput label="護理站編號" placeholder="請輸入編號" horizontal />
        <CInput label="護理站範圍" placeholder="請輸入範圍 ex:A棟7樓B區" horizontal />
        <CInput label="帳號" placeholder="請輸入帳號" horizontal />
        <CInput label="密碼" placeholder="請輸入密碼" type="password" horizontal />
        <CInput label="認證電話" placeholder="請輸入認證電話" description="提供忘記密碼時使用" horizontal />
        <CInput label="負責人" placeholder="請輸入負責人" horizontal />
        <div style="height:30px;">設定範圍:</div>
        <CSelect label="第一層" horizontal :options="optionsType" placeholder="" />
        <CSelect label="第二層" horizontal :options="optionsType1" placeholder="" />

        <div class="form-group form-actions positionR">
          <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
        </div>
      </CForm>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
  name: 'AddStation',
  data() {
    return {
      radioType: 1,
      selected: [], // Must be an array reference!
      optionsType: ['A棟5樓B區', 'Option 2', 'Option 3'],
      optionsType1: ['A棟7樓A區', 'Option 2', 'Option 3'],
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
<style>
input::placeholder {
  font-size: 20px;
}
</style>
