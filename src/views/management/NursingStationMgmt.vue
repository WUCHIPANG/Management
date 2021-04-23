<template>
  <div>
    <CCard>
      <CCardBody>
        <div class="addButton">
          <CButton size="sm" variant="outline" color="info" class="ml-1" @click="addStation()">
            新增護理站
          </CButton>
        </div>
        <CDataTable :items="items" :fields="fields" table-filter items-per-page-select :items-per-page="5" hover sorter pagination>
          <template #edit="{item, index}">
            <td class="py-2">
              <CButton size="sm" variant="outline" color="danger" class="ml-1">
                Delete
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
      items: [{ id: 'A021' }, { id: 'A022' }, { id: 'A031' }, { id: 'A031' }],
      details: [],
      collapseDuration: 0,
    };
  },
  computed: {
    fields() {
      return [
        // _style: 'min-width:200px'
        { key: 'id', label: '護理站編號' },
        // { key: 'name', label: '姓名' },

        {
          key: 'edit',
          label: '',
          _style: 'width:10%',
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
    addStation() {
      this.$router.push('/AddStation');
    },
  },
};
</script>
