import './sass/app.scss'
import Vue from 'vue'

Vue.component('MyForm', require('src/components/my-form'))
Vue.component('MyFormFinal', require('src/components/my-form-final'))
Vue.component('ValidatorErrors', require('src/components/validator-errors'))

let app = new Vue().$mount('#app')