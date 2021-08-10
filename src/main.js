import { createApp } from 'vue'
import App from './App.vue'
import router from "router/index";
import store from "store/index";
import "styles/index.scss"

import element3 from "plugins/index"


// 注册指令
const app = createApp(App)
app.use(element3)
app.use(router).use(store).mount('#app')

// 销毁组件
// setTimeout(() => app.unmount(), 5000)
 