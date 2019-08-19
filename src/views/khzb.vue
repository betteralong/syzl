<template>
  <div class="page">
    <div class="content-wrap">
      <div class="content-title">平安过程性考核</div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in content1" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
        <div class="content-wrap">
      <div class="content-title">平安达标考核</div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in content1" :key="index">
          <div class="content-label">{{item.label}}</div>
          <div class="content-value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'khzb',
  data() {
    return {
      content1: [{ //平安过程性考核
        label: '过程性指标全省总排名',
        value: 1
      },{
        label: '流动人口服务管理',
        value: 1
      },{
        label: '社会心理服务体系建设',
        value: 1
      },{
        label: '社会组织参与平安建设',
        value: 1
      },{
        label: '“浙江无欠薪”行动',
        value: 1
      },{
        label: '以“最多跑一次”改革理念打造县域信访超市（综治中心）',
        value: 1
      },{
        label: '乡村治理“四平台一中心一网格”能力提升工程',
        value: 1
      },{
        label: '扫黑除恶专项斗争攻坚年',
        value: 1
      },{
        label: '反恐怖能力提升工程',
        value: 1
      },{
        label: '邪教与非法传教突出问题整治',
        value: 1
      },{
        label: '毒品突出问题和重点地区整治',
        value: 1
      },{
        label: '交通安全综合治理',
        value: 1
      },{
        label: '安全生产社会共治',
        value: 1
      },{
        label: '危化品安全治理',
        value: 1
      },{
        label: '消防安全宣传教育培训',
        value: 1
      },{
        label: '打击治理电信网络新型犯罪',
        value: 1
      },{
        label: '保健品市场乱象整治',
        value: 1
      },{
        label: '平安建设和社会治理工作协调机制操作规程',
        value: 1
      },{
        label: '民间借贷协同治理',
        value: 1
      }],
    }
  }
}
</script>

<style lang="scss">
.page{
  background: #fff;

}
</style>