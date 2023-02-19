<template>
  <div class="test-box">
    <p> {{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
// 默认导出，这是固定写法！
export default {
  // data 数据源，注意：组件中的 data 必须是一个函数，不能像之前一样指向对象
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1;
    }
  },
  // 侦听器
  watch: {},
  // 计算属性
  computed: {},
  // 过滤器
  filters: {}
}
</script>

<style lang="less">
.test-box {
  background-color: yellow;
}
</style>
