<template>
  <CCard>
    <CCardBody>
      <CForm>
        <CRow class="radio">
          <CCol sm="3">
            派遣選項
          </CCol>
          <CCol>
            <input id="1" name="radio" type="radio" value="1" v-model="radioType" checked />
            <label for="1" class="radio-label">運送內容</label>
          </CCol>
          <CCol>
            <input id="2" name="radio" type="radio" v-model="radioType" value="2" />
            <label for="2" class="radio-label">起始地點</label>
          </CCol>
          <CCol>
            <input id="3" name="radio" type="radio" v-model="radioType" value="3" />
            <label for="3" class="radio-label">目的地</label>
          </CCol>
          <CCol> </CCol>
        </CRow>
        <CRow>
          <CCol>
            <input class="label-input js-input" type="text" placeholder="請輸入新增項目" />
          </CCol>
          <CCol
            ><CButton size="sm" variant="outline" color="info" class="ml-1" @click="add_items()">
              新增
            </CButton></CCol
          >
        </CRow>
        <div class="outer-container">
          <div class="containerUL">
            <ul class="todo-list js-list">
              <li class="list-item js-item" v-for="(item, index) in default_data">
                <span class="item-text js-check-item">{{ item.do }}</span>
                <!-- <CIcon name="cil-delete"></CIcon> -->
                <i class="material-icons icon-delete js-delete-item" @click="del(index)">delete</i>
              </li>
            </ul>
          </div>
        </div>

      </CForm>
    </CCardBody>


  </CCard>
</template>
<script>
export default {
  name: 'AddEmployee',
  data() {
    return {
      radioType: 1,
      selected: [], // Must be an array reference!
      options: ['Option 1', 'Option 2', 'Option 3'],
      name: this.$route.params.name,
      input: '',
      default_data: [
        {
          do: '檢體運送',
          // check: 'is-checked',
        },
        {
          do: '藥物傳送',
          // check: '',
        },
        {
          do: '病人檢查',
          // check: '',
        },
        {
          do: '領藥',
          // check: '',
        },
      ],
      darkModal: true,
    };
  },
  methods: {
    add_items: function() {
      var input = $('.js-input');
      if (input.val() != '') {
        this.input = input.val();
        this.default_data.push({ do: input.val(), check: 'not-checked' });
        input.css('border-bottom-color', '#464646');
        // console.log(input.val())
      }
      if (input.val() == '') {
        input.css('border-bottom-color', 'red');
        // console.log(input.val())
        alert('You must write something!');
      }
      input.val('');
    },
    check: function(index) {
      if (this.default_data[index].check != 'not-checked') {
        this.default_data[index].check = 'not-checked';
      } else {
        this.default_data[index].check = 'is-checked';
      }
    },
    del: function(index) {
      // var where = this.default_data.indexOf(index)
      this.default_data.splice(index, 1);
    },
  },
};
</script>
