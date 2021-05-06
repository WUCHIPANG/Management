<template>
  <div>
    <CCard>
      <CCardBody>
        <CDataTable :items="items" :fields="fields" table-filter column-filter items-per-page-select :items-per-page="10" hover sorter pagination>
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
                內容
              </CButton>
            </td>
          </template>
          <!-- <template #cancel="{item, index}">
            <td class="py-2">
              <CButton color="dark" variant="outline" square size="sm" @click="cancel(item, index)">
                刪除
              </CButton>
            </td>
          </template> -->
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: 'TaskList',
  data() {
    return {
      items: [
        { number: '20210419210653', task: '檢體運送', staff: '曾哲嘉', status: '進行中' },
        { number: '20210412150616', task: '病人檢查', staff: '趙明倫', status: '異常' },
        { number: '20210409050810', task: '領藥', staff: '謝文宇', status: '已預約' },
        { number: '20210412150616', task: '病人檢查', staff: '陳琦芬', status: '已完成' },
        { number: '20210409050810', task: '領藥', staff: '何怡廷', status: '已完成' },
        { number: '20210409050810', task: '領藥', staff: '楊郁竹', status: '已預約' },
        { number: '20210412150616', task: '病人檢查', staff: '林木旭', status: '已預約' },
        // { number: '閒置', task: '閒置', staff: '戴憶凡', status: '閒置' },
      ],
      details: [],
      collapseDuration: 0,
      cancelButton: true,
    };
  },
  computed: {
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'number', label: '派單編號', _style: 'width:1%' },
        { key: 'task', label: '任務內容' },
        { key: 'staff', label: '傳送人員' },
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
        case '閒置':
          return 'primary';
        default:
          'primary';
      }
    },
    toggleDetails(item) {
      this.$router.push('/TaskContentIng' + '/' + item.number + '/' + item.status);
    },
    cancel(item) {
      console.log('item:', item.number);
    },
  },
};
</script>
