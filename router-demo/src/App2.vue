<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <!-- 当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的 a 链接了 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs&age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr />

    <!-- 它的作用很单纯：占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;

  >a {
    margin-right: 10px;
  }
}
</style>
