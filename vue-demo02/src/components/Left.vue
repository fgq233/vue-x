<template>
  <div class="left-container">
    <h3>Left 组件</h3>
  </div>
</template>

<script>

import bus from './eventBus.js'

export default {

}
</script>

<style lang="less" scoped>
.left-container {
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
