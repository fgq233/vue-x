<template>
  <div class="right-container">
    <p v-bg>666</p>
    <p v-bg="'red'">666</p>
    <p v-bg="color">666</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      color: 'green'
    }
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
