// // 全局引入element3
// import element3 from 'element3'
// import "element3/lib/theme-chalk/index.css"

// export default function(app) {
//   app.use(element3)
// }

// 按需引入组件及样式
import { ElButton, ElInput } from "element3"
import "element3/lib/theme-chalk/button.css"
import "element3/lib/theme-chalk/input.css"

export default function(app) {
  // 本质app.use type con === 'function' 函数执行 ---- 如果是对象并且有install方法 
  // 调用install方法
  app.use(ElButton)
  app.use(ElInput)
}