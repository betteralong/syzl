<template>
  <div class="menu">
    <router-link class="menu-item" v-for="(item , index) in menus" :key="index" :to="{name: item.name}">{{item.label}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.menu{
  margin-top: 0.2rem;
  background: #fff;
  padding: 0.26rem 0.26rem 0.24rem;
  display: flex;
  .menu-item{
    flex: 1;
    text-align: center;
  }
}
</style>