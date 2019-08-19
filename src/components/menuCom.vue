<template>
  <div class="menu">
    <router-link class="menu-item" 
    v-for="(item , index) in menus" :key="index"
    :to="{name: item.name}"
    :class="{'active-item': $route.name === item.name}">
    {{item.label}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menuCom',
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
  padding: 0.26rem 0.26rem 0;
  display: flex;
  justify-content: space-between;
  .menu-item{
    padding-bottom: 0.12rem;
    font-size: 0.32rem;
    text-align: center;
  }
  .active-item{
    color: #3196FA;
    border-bottom: 0.04rem solid #3196FA;
  }
}
</style>