<template>
  <CCard>
    <CCardBody>
      <CRow>
        <CCol class="selectHight">
          <select id="uid-v6uk3e8d5p9" class="form-control selectFont">
            <option data-key="0" value="今天"> 今天 </option>
            <option data-key="1" value="昨天"> 昨天 </option>
          </select>
        </CCol>
        <CCol> </CCol>
      </CRow>
      <CDataTable :items="items" :fields="fields" :items-per-page="10" hover sorter pagination> </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
  name: 'Employee',
  data() {
    return {
      items: [
        { Eid: 'B001', name: '趙明倫', date: '2021/4/20', start: '08:25', complete: '18:29', time: '8小時04分' },
        { Eid: 'B002', name: '曾哲嘉', date: '2021/4/20', start: '08:30', complete: '18:40', time: '8小時10分' },
        { Eid: 'B003', name: '謝文宇', date: '2021/4/20', start: '08:22', complete: '18:32', time: '8小時10分' },
        { Eid: 'B004', name: '陳琦芬', date: '2021/4/20', start: '08:26', complete: '18:33', time: '8小時07分' },
        { Eid: 'B005', name: '何怡廷', date: '2021/4/20', start: '08:30', complete: '18:38', time: '8小時08分' },
        { Eid: 'B006', name: '楊郁竹', date: '2021/4/20', start: '08:25', complete: '18:27', time: '8小時02分' },
        { Eid: 'B007', name: '林木旭', date: '2021/4/20', start: '08:28', complete: '18:38', time: '8小時13分' },
        { Eid: 'B008', name: '戴憶凡', date: '2021/4/20', start: '08:19', complete: '18:33', time: '8小時13分' },
      ],
      work_items: [
        { Eid: 'B001', name: 'Bregts', taskNum: '20210405092413', task: '領藥', start: '09:25', complete: '09:48' },
        { Eid: 'B005', name: 'Dactbs', taskNum: '20210405092413', task: '病人檢查', start: '10:21', complete: '11:19' },
        { Eid: 'B003', name: 'Altts', taskNum: '20210405092413', task: '病人檢查', start: '10:45', complete: '11:49' },
        { Eid: 'B002', name: 'Crtat', taskNum: '20210405092413', task: '檢體運送', start: '11:10', complete: '12:21' },
        { Eid: 'B001', name: 'Bregts', taskNum: '20210405092413', task: '領藥', start: '10:11', complete: '10:56', time: '8小時23分' },
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
        { key: 'time', label: '工時' },
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
