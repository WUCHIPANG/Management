<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CRow>
          <CCol class="selectHight" sm="1" style="line-height:30px;">護理站</CCol>
          <CCol class="selectHight" style="margin-left:-30px;">
            <CSelect horizontal :options="['A08-B', 'A07-A']" />
          </CCol>
          <CCol class="selectHight" style="margin-left:-50px;"> <CSelect horizontal :options="['今天', '昨天']" /> </CCol>
          <CCol></CCol>
          <CCol></CCol>
        </CRow>
        <CDataTable :items="items" :fields="fields" column-filter table-filter items-per-page-select :items-per-page="5" hover sorter pagination>
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">
                {{ item.status }}
              </CBadge>
            </td>
          </template>

          <template #show_details="{item, index}">
            <td class="py-2">
              <CButton color="primary" variant="outline" square size="lg" @click="toggleDetails(item, index)">
                詳細
              </CButton>
            </td>
          </template>
          <template #cancel="{item, index}">
            <td class="py-2"></td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: 'NursingStation',
  data() {
    return {
      items: [
        { number: '20210419210653', task: '檢體運送', staff: '曾哲嘉', start: '2021/04/19 08:15:26', complete: '', status: '進行中' },
        { number: '20210412150616', task: '病人檢查', staff: '趙明倫', start: '2021/04/19 21:06:53', complete: '', status: '異常' },
        { number: '20210409050810', task: '領藥', staff: '謝文宇', start: '2021/04/20 10:24:22', complete: '', status: '已預約' },
        { number: '20210412150616', task: '病人檢查', staff: '陳琦芬', start: '2021/04/19 15:11:25', complete: '2021/04/19 16:02:13', status: '已完成' },
      ],
      details: [],
      collapseDuration: 0,
    };
  },
  computed: {
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'number', label: '派單編號' },
        { key: 'task', label: '任務內容' },
        { key: 'staff', label: '傳送人員' },
        { key: 'start', label: '開始時間' },
        { key: 'complete', label: '完成時間' },
        { key: 'status', label: '狀態' },
        {
          key: 'show_details',
          label: '',
          _style: 'width:10%',
          sorter: false,
          filter: false,
        },
        // {
        //   key: 'cancel',
        //   label: '',
        //   _style: 'width:5%',
        //   sorter: false,
        //   filter: false,
        // },
      ];
    },
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case '進行中':
          return 'success';
        case '已完成':
          return 'secondary';
        case '異常':
          return 'danger';
        case '已預約':
          return 'info';
        default:
          'primary';
      }
    },
    toggleDetails(item) {
      this.$router.push('/TaskContent' + '/' + item.number + '/' + item.status);
    },
    cancel(item) {
      console.log('item:', item.number);
    },
  },
};
</script>
