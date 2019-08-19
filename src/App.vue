<template>
  <div id="app">
    <header-com></header-com>
    <div class="app-container">
      <top-tip></top-tip>
      <menu-com :menus="menus"></menu-com>
      <router-view/>
    </div>
  </div>
</template>

<script>
import menuCom from '@/components/menuCom'
import topTip from '@/components/topTip'
import headerCom from '@/components/headerCom'
export default {
  data() {
    return {
      menus: [{
        name: 'khzb', // 路由的name
        label: '考核指标',
      }, {
        name: 'jczy',
        label: '基础资源'
      }, {
        name: 'ywzb',
        label: '业务指标'
      }, {
        name: 'cjjz',
        label: '场景进展'
      }]
    }
  },
  components: {
    headerCom,
    topTip,
    menuCom
  }
}
</script>

<style lang="scss">
.app-container{
  background: #EEEEEE;
  padding: 0.2rem 0.28rem;
}
</style>
