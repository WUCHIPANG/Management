<template>
  <div style="font-size:28px;">
    <div>
      <CCard>
        <CCardBody>
          <div class="addButton" style="height:50px;">
            <CButton size="lg" variant="outline" color="info" class="ml-1" @click="addStation()">
              新增護理站
            </CButton>
          </div>
          <CDataTable :items="items" :fields="fields" table-filter items-per-page-select :items-per-page="5" hover sorter pagination>
            <template #edit="{item, index}">
              <td class="py-2">
                <CButton size="lg" variant="outline" color="dark" class="ml-1" @click="edit(item, index)">
                  編輯
                </CButton>
              </td>
            </template>
            <template #del="{item, index}">
              <td class="py-2">
                <CButton size="lg" variant="outline" color="danger" class="ml-1" @click="del(item, index)">
                  刪除
                </CButton>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </div>
    <div>
      <CModal :show.sync="dangerModal" :no-close-on-backdrop="true" :centered="true" title="Modal title 2" size="lg" color="dark">
        <p>確定刪除? 請輸入管理密碼</p>

        <CInput placeholder="密碼" type="password" autocomplete="curent-password" v-model="password">
          <template #prepend-content><CIcon name="cil-lock-locked"/></template>
        </CInput>
        <template #header>
          <h5 class="modal-title">刪除資料</h5>
        </template>
        <template #footer>
          <CButton
            @click="
              dangerModal = false;
              hidePassErr();
            "
            size="lg"
            color="dark"
            >取消</CButton
          >
          <CButton @click="confirm(password)" color="success" size="lg">確認</CButton>
        </template>
        <CAlert show color="danger" v-if="get_passwordErr">密碼錯誤!請重新輸入</CAlert>
      </CModal>
    </div>
  </div>
</template>
<script>
import Global from '../../Global';
const CryptoJS = require('crypto-js');
import secret from '../../utils/secret.js';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'NursingStationMgmt',
  data() {
    return {
      items: [
        { id: 'A08-B', range: 'A棟8樓B區' },
        { id: 'A08-A', range: 'A棟8樓A區' },
        { id: 'A07-B', range: 'A棟7樓B區' },
        { id: 'A07-A', range: 'A棟7樓A區' },
      ],
      details: [],
      collapseDuration: 0,
      dangerModal: false,
      password: '',
      passwordErr: false,
    };
  },
  computed: {
    ...mapGetters(['get_passwordErr']),
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'id', label: '護理站編號' },
        { key: 'range', label: '護理站範圍' },

        {
          key: 'edit',
          label: '',
          _style: 'width:7%',
          sorter: false,
          filter: false,
        },
        {
          key: 'del',
          label: '',
          _style: 'width:7%',
          sorter: false,
          filter: false,
        },
      ];
    },
  },
  methods: {
    edit(item) {
      console.log('item:', item.id);
      this.$router.push('/EditStation');
    },
    addStation() {
      this.$router.push('/AddStation');
    },
    del(item) {
      console.log('item:', item.id);
      this.dangerModal = true;
    },
    confirm(password) {
      this.$store.dispatch('checkPW', secret.Encrypt(password));
    },
    hidePassErr() {
      this.$store.commit('HIDE_PASSWORDERR');
    },
  },
};
</script>
