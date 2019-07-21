import Vue from 'vue';
import './plugins/vuetify';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store/store';
import { themeColors } from './config/themeSettings';

import FlatButton from './components/elements/FlatButton.vue';
import Loader from './components/elements/Loader.vue';
import FormInput from './components/elements/FormInput.vue';

Vue.use(VeeValidate, { inject: true });
Vue.use(Vuetify, themeColors);

Vue.component('FlatButton', FlatButton);
Vue.component('Loader', Loader);
Vue.component('FormInput', FormInput);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
