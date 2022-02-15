import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)

new Vue({
    render: (h) => h(App),
    pinia: createPinia(),
}).$mount('#app')
