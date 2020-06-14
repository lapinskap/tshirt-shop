import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import * as swal from 'sweetalert2';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false


Vue.use(BootstrapVue);
Vue.use(Vuelidate);

const requireComponent = require.context(
  './components',
  true,
  /[A-Z]\w+\.vue$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/\.\w+$/, ''),
    ),
  );
  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

new Vue({
  render: h => h(App),
}).$mount('#app')


const displayError = (message) => {
  swal({
    title: message,
    type: 'warning',
  });
};

const processError = (err) => {
  if ('isAxiosError' in err && err.isAxiosError) {
    try {
      return displayError(err.response.data.message);
    } catch (exc) {
      return displayError(err.message);
    }
  }

  return displayError('Oops... something went wrong!');
};

Vue.config.errorHandler = (err) => {
  processError(err);
  throw err;
};