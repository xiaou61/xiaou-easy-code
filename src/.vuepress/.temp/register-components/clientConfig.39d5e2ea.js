import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FlipClock", defineAsyncComponent(() => import("E:/mydocs/src/.vuepress/components/FlipClock.vue"))),
      app.component("FlipItem", defineAsyncComponent(() => import("E:/mydocs/src/.vuepress/components/FlipItem.vue"))),
      app.component("MyFlipClock", defineAsyncComponent(() => import("E:/mydocs/src/.vuepress/components/MyFlipClock.vue"))),
      app.component("NavCard", defineAsyncComponent(() => import("E:/mydocs/src/.vuepress/components/NavCard.vue"))),
      app.component("QuickNav", defineAsyncComponent(() => import("E:/mydocs/src/.vuepress/components/QuickNav.vue")))
  },
}
