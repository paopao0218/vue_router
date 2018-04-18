// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import jQuery from 'jquery';
import Index from './components/index';
import router from './router';
import VueResource from 'vue-resource';
Vue.config.productionTip = false

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
