import Vue from 'vue';
import './plugins/vuetify';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store/store';
import { themeColors } from './config/themeSettings';

Vue.use(VeeValidate);
Vue.use(Vuetify, themeColors);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
