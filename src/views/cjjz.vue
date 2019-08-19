<template>
  <div class="page">
    <div class="content-wrap">
      <div class="content-title">统一地址服务</div>
      <div class="content-center">
        <div class="content-center-item"  v-for="(item, index) in content1" :key="index">
          <div class="content-value">{{item.value}}</div>
          <div class="content-label">{{item.label}}</div>
        </div>
      </div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in content2" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
      <div class="content">
        <div class="content-title">区县总数排名</div>
        <div class="content-item" v-for="(item, index) in content5" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
      <div class="more">展开查看更多</div>
    </div>
    <div class="content-wrap">
      <div class="content-title">城市眼-云共治</div>
      <div class="content-block">
        <div class="content-block-item"  v-for="(item, index) in content4" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content-title">区县推进情况</div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in content5" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
      <div class="more">展开查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      content5: [{
        label: '1、上城',
        value: 1
      },{
        label: '2、下城',
        value: 1
      },{
        label: '3、江干',
        value: 1
      },{
        label: '4、拱墅',
        value: 1
      },{
        label: '5、西湖',
        value: 1
      }],
      content4: [{
        label: '接入总量',
        value: '427,493'
      },{
        label: '城市眼指数',
        value: '427,493'
      },{
        label: '城市眼发现效率',
        value: '427,493'
      },{
        label: '云共治指数',
        value: '427,493'
      }],
      content3: [{
        label: '接入公共视频总数',
        value: '427,493'
      },{
        label: '在线公共视频数',
        value: '427,493'
      }],
      content2: [{
        label: '地址更新采集数',
        value: '427,493'
      }, {
        label: '地址救济数',
        value: '427,493'
      }, {
        label: '统一地址服务调用总数',
        value: '427,493'
      }, {
        label: '一码多址总数',
        value: '427,493'
      }],
      content1: [{
        label: '全市统一地址总量',
        value: '427,493'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>