<template>
  <div>
    <div>
      <CCard>
        <CCardBody>
          <div class="addButton">
            <CButton size="sm" variant="outline" color="info" class="ml-1" @click="addEmployee()">
              新增員工
            </CButton>
          </div>
          <CDataTable :items="items" :fields="fields" table-filter items-per-page-select :items-per-page="5" hover sorter pagination>
            <template #edit="{item, index}">
              <td class="py-2">
                <CButton color="dark" variant="outline" square size="sm" @click="edit(item, index)">
                  Edit
                </CButton>
                <CButton size="sm" variant="outline" color="danger" class="ml-1" @click="del(item, index)">
                  Delete
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

        <CInput placeholder="Password" type="password" autocomplete="curent-password">
          <template #prepend-content><CIcon name="cil-lock-locked"/></template>
        </CInput>
        <template #header>
          <h6 class="modal-title">刪除資料</h6>
        </template>
        <template #footer>
          <CButton @click="dangerModal = false" color="dark">取消</CButton>
          <CButton @click="confirm(password)" color="success">確認</CButton>
        </template>
        <CAlert show color="danger" v-if="passwordErr">密碼錯誤!請重新輸入</CAlert>
      </CModal>
      <!-- <CModal title="刪除資料" color="danger" :show.sync="dangerModal">
        確定刪除? 請輸入管理密碼
        <CInput placeholder="Password" type="password" autocomplete="curent-password">
          <template #prepend-content><CIcon name="cil-lock-locked"/></template>
        </CInput>
      </CModal> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskList',
  data() {
    return {
      items: [
        { id: 'B01954', name: 'Edtos' },
        { id: 'B06578', name: 'Pactsa' },
        { id: 'B02458', name: 'Deobff' },
        { id: 'B09483', name: 'Corac' },
      ],
      details: [],
      collapseDuration: 0,
      dangerModal: false,
      password: '',
      passwordErr: false,
    };
  },
  computed: {
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'id', label: '員工編號' },
        { key: 'name', label: '姓名' },

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
    confirm(password){}
  },
};
</script>
