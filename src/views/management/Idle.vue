<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CDataTable :items="items" :fields="fields" table-filter items-per-page-select :items-per-page="5" hover sorter pagination>
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">
                {{ item.status }}
              </CBadge>
            </td>
          </template>

          <template #assign="{item, index}">
            <td class="py-2">
              <CButton color="dark" variant="outline" square size="lg" @click="assign(item, index)">
                確認
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: 'Idle',
  data() {
    return {
      items: [
        { staff: '陳琦芬', location: '3F檢查室', task: '病人檢查', status: '閒置' },
        { staff: '何怡廷', location: '2F領藥', task: '領藥', status: '閒置' },
        { staff: '戴憶凡', location: '10F護理站', task: '物件運送', status: '閒置' },
        { staff: '趙明倫', location: '5F檢查室', task: '病人檢查', status: '進行中' },
        { staff: '曾哲嘉', location: '8F檢查室', task: '檢體運送', status: '進行中' },
      ],
      details: [],
      collapseDuration: 0,
    };
  },
  computed: {
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'staff', label: '人員' },
        { key: 'location', label: '所在地點' },
        { key: 'task', label: '上次內容' },
        { key: 'status', label: '狀態' },
        {
          key: 'assign',
          label: '',
          _style: 'width:10%',
          sorter: false,
          filter: false,
        },
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

    assign(item) {
      console.log('item:', item.number);
    },
  },
};
</script>
