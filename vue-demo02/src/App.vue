<template>
  <div id="app" class="box">
    <AlertBox>
    </AlertBox>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      comName: 'Left'
    }
  },
  methods: {
    toggleComponent(val) {
      this.comName = val;
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}
</style>
