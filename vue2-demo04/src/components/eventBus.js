import Vue from 'vue';

export default new Vue();


// 兄弟之间通过 EventBus 传值

// 1、创建 EventBus.js，向外共享一个 vue 实例对象
// 2、发送方：导入EventBus，调用 bus.$emit(事件名称, 传送的数据)  触发自定义事件
// 3、接收方：导入EventBus，调用 bus.$on(事件名称, 事件处理函数) 注册一个自定义事件