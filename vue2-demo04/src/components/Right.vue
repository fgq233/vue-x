<template>
  <div class="right-container">
    <h3>Right 组件</h3>

    <p>兄弟组件 Left 传来的值：{{ valByLeft }}</p>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  data() {
    return {
      valByLeft: 0
    }
  },
  created(val) {
    bus.$on('leftEvent', (val) => {
      this.valByLeft = val;
    })
  }
}
</script>

<style lang="less" scoped>
.right-container {
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
