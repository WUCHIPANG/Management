<template>
  <div>
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

          <template #details="{item}">
            <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
              <CCardBody>
                <CMedia :aside-image-props="{ height: 102 }">
                  <h4>
                    {{ item.username }}
                  </h4>
                  <p class="text-muted">User since: {{ item.registered }}</p>
                  <CButton size="sm" color="info" class="">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" class="ml-1">
                    Delete
                  </CButton>
                </CMedia>
              </CCardBody>
            </CCollapse>
          </template>

          <template #assign="{item, index}">
            <td class="py-2">
              <CButton color="dark" variant="outline" square size="sm" @click="assign(item, index)">
                指派
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
  name: 'TaskList',
  data() {
    return {
      items: [
        { number: '20210419210653', start: '04/28 10:30', task: '檢體運送', status: '游離' },
        { number: '20210419182622', start: '04/28 10:30', task: '藥物傳送', status: '緊急' },
        { number: '20210412150616', start: '04/28 10:30', task: '病人檢查', status: '異常' },
        { number: '20210409050810', start: '04/28 10:30', task: '領藥', status: '游離' },
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
        { key: 'start', label: '開始時間' },
        { key: 'task', label: '任務內容' },
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
        case '緊急':
          return 'danger';
        case '異常':
          return 'warning';
        case '游離':
          return 'info';
        default:
          'primary';
      }
    },

    assign(item) {
      console.log('item:', item.number);
      this.$router.push('/Idle');
    },
  },
};
</script>
