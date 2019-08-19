<template>
  <div class="page">
    <div class="content-wrap">
      <div class="content-title">社会治理单元</div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in content1" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content-title">力量体系</div>
      <div class="content-block">
        <div class="content-block-item"  v-for="(item, index) in content2" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content-title">雪亮综治平台</div>
      <div class="content-block">
        <div class="content-block-item"  v-for="(item, index) in content3" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      content1: [{
        label: '区县基层治理综合信息指挥中心',
        value: 1
      },{
        label: '镇街综合信息指挥室',
        value: 1
      },{
        label: '村社综合信息工作站',
        value: 1
      },{
        label: '治安小区',
        value: 1
      },{
        label: '网格',
        value: 1
      }],
      content2: [{
        label: '专业力量下沉数',
        value: '427,493'
      },{
        label: '专业力量下沉数',
        value: '427,493'
      }],
      content3: [{
        label: '接入公共视频总数',
        value: '427,493'
      },{
        label: '在线公共视频数',
        value: '427,493'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>