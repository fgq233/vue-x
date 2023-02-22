import Vue from "vue";
import App from "./App.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import AlertBox from "@/components/AlertBox.vue";

Vue.config.productionTip = false;

Vue.component("Left", Left);
Vue.component("Right", Right);
Vue.component("AlertBox", AlertBox);

Vue.directive("bg", function (el, binding) {
  console.log(binding);
  el.style.backgroundColor = binding.value;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
