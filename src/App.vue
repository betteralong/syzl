<template>
  <div id="app">
    <header-com></header-com>
    <div class="app-container">
      <top-tip></top-tip>
      <div class="wrap">
        <menu-com ref="menu" :menus="menus"></menu-com>
        <!-- 顶格动画 -->
        <menu-com :menus="menus" v-show="showFixed" class="fix"></menu-com>
      <router-view/>
      </div>
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
      showFixed: false,
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
  methods: {
    handleScroll() {
      let height =  this.$refs['menu'].$el.offsetTop // menu距离顶部的高度 
      let scrollTop =  window.pageYOffset ||  // body滚动的高度
        document.documentElement.scrollTop ||
        document.body.scrollTop
      console.log('height', height)
      console.log('scrollTop', scrollTop)
      if(scrollTop >= height) {
        this.showFixed = true
      } else {
        this.showFixed = false
      }
    }
  },
  mounted() {   //监听scroll事件
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() { //页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    headerCom,
    topTip,
    menuCom
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.app-container{
  flex: 1;
  background: #EEEEEE;
  padding: 0.2rem 0.28rem;
}
.wrap{
  background: #fff;
  border-radius: 0.08rem;
}
.fix{
  position: fixed;
  top: 0;
  left: 0.28rem;
  right: 0.28rem;
  background: #fff;
  border-radius: 0.08rem;
}
</style>
