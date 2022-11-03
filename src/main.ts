import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import App from './App.vue';
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'mini' });

import BoxEditor from "./components/main";
Vue.use(BoxEditor);

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import BoxUI from '../lib/box-ui/box-ui.min.js';
import '../lib/box-ui/style.css'
Vue.use(BoxUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');