<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="sendToRight">向兄弟组件 Right 组件传值</button>
  </div>
</template>

<script>

import bus from './eventBus.js'

export default {
  methods: {
    sendToRight() {
      bus.$emit('leftEvent', 1314);
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
