import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import websdk from 'easemob-websdk'
let WebIM= window.WebIM = websdk
Vue.prototype.$WebIM =WebIM

var conn = new WebIM.connection({   
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions, 
    https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',   
    url: WebIM.config.xmppURL,   
    heartBeatWait: WebIM.config.heartBeatWait,   
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,   
    autoReconnectInterval: WebIM.config.autoReconnectInterval,   
    apiUrl: WebIM.config.apiURL,   
    isAutoLogin: true
});
console.log(WebIM)
const options = {
    user: 'qlk', //换成自己申请的账号就行，密码也需要换   
    pwd: '123456',
    apiUrl: WebIM.config.apiURL,
    appKey: WebIM.config.appkey,
    success:function (re:any) {
        console.log('登陆成功')
    },
    error:function (err:any) {
        console.log(err)
    }}
      Vue.prototype.$imconn = conn
      Vue.prototype.$imoption = options

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
