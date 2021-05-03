<template>
  <div style="font-size:28px;">
    <div>
      <CCard>
        <CCardBody>
          <div class="addButton" style="height:50px;">
            <select v-model="selected" class="select">
              <option>上班</option>
              <option>休假</option>
            </select>

            <CButton size="lg" variant="outline" color="info" class="ml-1" @click="addEmployee()">
              新增人員
            </CButton>
          </div>

          <!-- 上班 -->
          <CDataTable :items="items" :fields="fields" column-filter table-filter items-per-page-select :items-per-page="5" hover sorter pagination v-if="work">
            <template #status="{item}">
              <td>
                <CBadge :color="getBadge(item.status)">
                  {{ item.status }}
                </CBadge>
              </td>
            </template>
            <template #edit="{item, index}">
              <td class="py-2">
                <CButton color="dark" variant="outline" square size="lg" @click="edit(item, index)">
                  編輯
                </CButton>
                <CButton size="lg" variant="outline" color="danger" class="ml-1" @click="del(item, index)">
                  刪除
                </CButton>
              </td>
            </template>
          </CDataTable>
          <!-- 休假 -->
          <CDataTable :items="Vacation_items" :fields="fields" table-filter items-per-page-select :items-per-page="5" hover sorter pagination v-if="vacation">
            <template #status="{item}">
              <td>
                <CBadge :color="getBadge(item.status)">
                  {{ item.status }}
                </CBadge>
              </td>
            </template>
            <template #edit="{item, index}">
              <td class="py-2">
                <CButton color="dark" variant="outline" square size="sm" @click="edit(item, index)">
                  編輯
                </CButton>
                <CButton size="sm" variant="outline" color="danger" class="ml-1" @click="del(item, index)">
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

        <CInput placeholder="Password" type="password" autocomplete="curent-password" v-model="password">
          <template #prepend-content><CIcon name="cil-lock-locked"/></template>
        </CInput>
        <template #header>
          <h6 class="modal-title">刪除資料</h6>
        </template>
        <template #footer>
          <CButton
            @click="
              dangerModal = false;
              hidePassErr();
            "
            color="dark"
            >取消</CButton
          >
          <CButton @click="confirm(password)" color="success">確認</CButton>
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
  name: 'TaskList',
  data() {
    return {
      items: [
        { id: 'B01954', name: '余育萱', status: '派單中' },
        { id: 'B06578', name: '劉怡瑄', status: '派單中' },
        { id: 'B02458', name: '王志法', status: '閒置' },
        { id: 'B09483', name: '陳欣湖', status: '派單中' },
      ],
      Vacation_items: [
        { id: 'B01624', name: '蔡巧昀', status: '休假' },
        { id: 'B08531', name: '謝婉菁', status: '休假' },
        { id: 'B09515', name: '竇俊德', status: '休假' },
        { id: 'B03579', name: '謝宗翰', status: '休假' },
      ],
      details: [],
      collapseDuration: 0,
      dangerModal: false,
      password: '',
      passwordErr: false,
      selected: '上班',
      work: true,
      vacation: false,
    };
  },
  computed: {
    ...mapGetters(['get_passwordErr']),
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'id', label: '員工編號' },
        { key: 'name', label: '姓名' },
        { key: 'status', label: '狀態' },
        {
          key: 'edit',
          label: '',
          _style: 'width:25%',
          sorter: false,
          filter: false,
        },
      ];
    },
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case '派單中':
          return 'success';
        case '閒置':
          return 'info';
        case '休假':
          return 'dark';
        default:
          'primary';
      }
    },
    edit(item) {
      console.log('item:', item.id);
      this.$router.push('/EmployeeContent/' + item.id + '/' + item.name);
    },
    addEmployee() {
      this.$router.push('/AddEmployee');
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
  watch: {
    selected() {
      // console.log(this.selected);
      if (this.selected == '休假') {
        this.vacation = true;
        this.work = false;
      }
      if (this.selected == '上班') {
        this.work = true;
        this.vacation = false;
      }
    },
  },
};
</script>
