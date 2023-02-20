<template>
  <div id="app" class="box">
    <Left></Left>
    <Right></Right>

    <!-- 父向子传值：通过子组件的自定义属性 msg 传值 -->
    <Son :msg="valToSon" @sonEvent="getValBySon"></Son>
    <!-- 子向父传值：父组件监听子组件触发的事件 sonEvent -->

    <p>子组件传来的值：{{ valFromSon }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      valToSon: 666,
      valFromSon: 0
    }
  },
  methods: {
    getValBySon(val) {  // 参数为子组件传来的值
      this.valFromSon = val;
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}
</style>
