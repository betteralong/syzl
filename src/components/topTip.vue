<template>
  <div class="top-tip">
    <div class="tip-left">
      <p>不达标</p>
      <p>考核项</p>
    </div>
    <div class="tip-right">
      <div class="tip-label">云上公安</div>
      <div class="tip-value">11</div>
    </div>
  </div>
</template>


<style lang="scss">
.top-tip{
  background: #fff;
  display: flex;
  align-items: center;
  height: 1.12rem;
  padding: 0.20rem 0.22rem;
  border-radius: 0.08rem;
  box-shadow: 0 0 0.16rem 0.08rem rgba(49, 150, 250, 0.1);
  .tip-left{
    color: #FACC14;
    font-size: 0.20rem;
    padding-right: 0.2rem;
    border-right: 1px solid #FACC14;
    p{
      &:first-child{
        margin-bottom: 0.2rem;
      }
    }
  }
  .tip-right{
    flex: 1;
    padding-left: 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.28rem;
    .tip-label{
      color: #333;
    }
    .tip-value{
      color: #E51C23;
    }
  }
}
</style>