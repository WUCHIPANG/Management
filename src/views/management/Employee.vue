<template>
  <CCard>
    <CCardBody>
      <CTabs>
        <CTab title="工作項目統計" active>
          <CRow>
            <CCol class="selectHight"> <CSelect horizontal :options="['今天', '昨天']" /> </CCol>
            <CCol> </CCol>
          </CRow>
          <CDataTable :items="work_items" :fields="work_fields" :items-per-page="10" hover sorter pagination> </CDataTable>
        </CTab>
        <CTab title="出勤統計" active>
          <CRow>
            <CCol class="selectHight"> <CSelect horizontal :options="['今天', '昨天']" /> </CCol>
            <CCol> </CCol>
          </CRow>
          <CDataTable :items="items" :fields="fields" :items-per-page="10" hover sorter pagination> </CDataTable>
        </CTab>
      </CTabs>
    </CCardBody>
  </CCard>
</template>
<script>
const items = [
  { Eid: 'B001', name: 'Bregts', date: '2021/4/20', start: '08:25', complete: '18:29' },
  { Eid: 'B002', name: 'Crtat', date: '2021/4/20', start: '08:30', complete: '18:40' },
  { Eid: 'B003', name: 'Altts', date: '2021/4/20', start: '08:22', complete: '18:32' },
  { Eid: 'B004', name: 'Dtabt', date: '2021/4/20', start: '08:26', complete: '18:33' },
  { Eid: 'B005', name: 'Dactbs', date: '2021/4/20', start: '08:30', complete: '18:38' },
  { Eid: 'B006', name: 'Fricst', date: '2021/4/20', start: '08:25', complete: '18:27' },
  { Eid: 'B007', name: 'Stcot', date: '2021/4/20', start: '08:28', complete: '18:38' },
  { Eid: 'B008', name: 'Nictts', date: '2021/4/20', start: '08:19', complete: '18:33' },
];

export default {
  name: 'Employee',
  data() {
    return {
      // items: items.map((item, id) => {
      //   return { ...item, id };
      // }),
      items: [
        { Eid: 'B001', name: 'Bregts', date: '2021/4/20', start: '08:25', complete: '18:29' },
        { Eid: 'B002', name: 'Crtat', date: '2021/4/20', start: '08:30', complete: '18:40' },
        { Eid: 'B003', name: 'Altts', date: '2021/4/20', start: '08:22', complete: '18:32' },
        { Eid: 'B004', name: 'Dtabt', date: '2021/4/20', start: '08:26', complete: '18:33' },
        { Eid: 'B005', name: 'Dactbs', date: '2021/4/20', start: '08:30', complete: '18:38' },
        { Eid: 'B006', name: 'Fricst', date: '2021/4/20', start: '08:25', complete: '18:27' },
        { Eid: 'B007', name: 'Stcot', date: '2021/4/20', start: '08:28', complete: '18:38' },
        { Eid: 'B008', name: 'Nictts', date: '2021/4/20', start: '08:19', complete: '18:33' },
      ],
      work_items: [
        { Eid: 'B001', name: 'Bregts', taskNum: '20210405092413', task: '領藥', start: '09:25', complete: '09:48' },
        { Eid: 'B005', name: 'Dactbs', taskNum: '20210405092413', task: '病人檢查', start: '10:21', complete: '11:19' },
        { Eid: 'B003', name: 'Altts', taskNum: '20210405092413', task: '病人檢查', start: '10:45', complete: '11:49' },
        { Eid: 'B002', name: 'Crtat', taskNum: '20210405092413', task: '檢體運送', start: '11:10', complete: '12:21' },
        { Eid: 'B001', name: 'Bregts', taskNum: '20210405092413', task: '領藥', start: '10:11', complete: '10:56' },
      ],
      // fields,
      details: [],
      collapseDuration: 0,
      // options: ['今天', '昨天'],
    };
  },
  computed: {
    // items() {
    //   items.map((item, id) => {
    //     console.log('item:', item, id);
    //     return { ...item, id };
    //   });
    // },
    fields() {
      return [
        { key: 'Eid', label: '員工編號' },
        { key: 'name', label: '姓名' },
        { key: 'date', label: '日期' },
        { key: 'start', label: '上班時間' },
        { key: 'complete', label: '下班時間' },
      ];
    },
    work_fields() {
      return [
        { key: 'Eid', label: '員工編號' },
        { key: 'name', label: '姓名' },
        { key: 'taskNum', label: '派單編號' },
        { key: 'task', label: '任務內容' },
        { key: 'start', label: '接單時間' },
        { key: 'complete', label: '完成時間' },
      ];
    },
  },
  mounted() {
    console.log('fields', fields, 'items', items);
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success';
        case 'Inactive':
          return 'secondary';
        case 'Pending':
          return 'warning';
        case 'Banned':
          return 'danger';
        default:
          'primary';
      }
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
  },
};
</script>
