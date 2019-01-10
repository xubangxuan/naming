// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';

Vue.prototype.axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false
// window.promise();

Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.dataset.title
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
