<template>
  <div class="son-container">
    <h3>Son 组件</h3>

    <p>父组件传来的值：{{ msg }}</p>

    <button @click="send">向父组件传值</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      sonVal: 888
    }
  },
  methods: {
    send() {
      // 子组件向父组件传值方式：发射自定义事件
      this.$emit('sonEvent', this.sonVal);
    }
  }
}
</script>

<style lang="less" scoped>
.son-container {
  background-color: yellow;
  min-height: 250px;
  flex: 1;
}
</style>
