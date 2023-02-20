import Vue from 'vue'
import App from './App.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Son from '@/components/Son.vue'

Vue.config.productionTip = false

Vue.component('Left', Left);
Vue.component('Right', Right);
Vue.component('Son', Son);

new Vue({
  render: h => h(App),
}).$mount('#app')
