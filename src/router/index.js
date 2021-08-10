import { createRouter, createWebHashHistory  } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: "/", 
      component: () => import("@/views/home.vue"), 
      children: [
        { path: "/my", 
          component: () => import("@/views/my.vue")
        },
    ]},
  ]
})