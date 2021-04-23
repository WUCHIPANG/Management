<template>
  <CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])">
    <CSidebarBrand class="d-md-down-none" to="/">
      <!-- 網頁版LOGO -->
      <!-- <CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 556 134" /> -->
      <!-- <CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" /> -->
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav" />
    <!-- <CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" /> -->
  </CSidebar>
</template>

<script>
// import nav from './_nav';

export default {
  name: 'TheSidebar',
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
    nav() {
      return [
        {
          _name: 'CSidebarNav',
          _children: [
            {
              _name: 'CSidebarNavTitle',
              _children: ['管理中心'],
            },
            {
              _name: 'CSidebarNavItem',
              name: '指派',
              to: '/distribution',
              icon: 'cilColorBorder',
            },
            // {
            //   _name: 'CSidebarNavItem',
            //   name: '閒置',
            //   to: '/idle',
            //   icon: 'cilMug',
            // },
            {
              _name: 'CSidebarNavDropdown',
              name: '查詢',
              route: '/record',
              icon: 'cilSearch',
              items: [
                {
                  name: '員工紀錄',
                  to: '/Employee',
                  icon: 'cil-chevron-right',
                },
                {
                  name: '護理站紀錄',
                  to: '/NursingStation',
                  icon: 'cil-chevron-right',
                },
                {
                  name: '管理中心報表',
                  to: '/ManagementReport',
                  icon: 'cil-chevron-right',
                },
              ],
            },
            {
              _name: 'CSidebarNavDropdown',
              name: '管理',
              route: '/management',
              icon: 'cilPenNib',
              items: [
                {
                  name: '員工管理',
                  to: '/EmpoyeeMgmt',
                  icon: 'cil-chevron-right',
                },
                {
                  name: '護理站管理',
                  to: '/NursingStationMgmt',
                  icon: 'cil-chevron-right',
                },
                {
                  name: '派遣選項管理',
                  to: '/OptionMgmt',
                  icon: 'cil-chevron-right',
                },
              ],
            },
          ],
        },
      ];
    },
  },
};
</script>
