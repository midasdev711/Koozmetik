export const publicRoute = [
  { path: "*", redirect: "/" },
  {
    path: "/news",
    component: () => import('@/components/news.vue'),
    name: "news",
    meta: { title: "News" },
  },
  {
    path: "/about",
    component: () => import('@/components/aboutUs.vue'),
    name: "AboutUs",
    meta: { title: "AboutUs" },
  },
  {
    path: "/contact",
    component: () => import('@/components/contact.vue'),
    name: "contact",
    meta: { title: "contact" },
  },
  {
    path: "/shop",
    component: () => import('@/components/shop.vue'),
    name: "shop",
    meta: { title: "shop" },
  },
  {
    path: "/",
    component: () => import('@/components/Home.vue'),
    name: "home",
    meta: { title: "home" },
  },
  {
    path: "/blogarticle/:id",
    component: () => import('@/components/blogarticle.vue'),
    name: "blogarticle",
    meta: { title: "blogarticle" },
  },
  {
    path: "/ingredients",
    component: () => import('@/components/ingredients.vue'),
    name: "ingredients",
    meta: { title: "ingredients" },
  },
  {
    path: "/product/:id/:name",
    component: () => import('@/components/product.vue'),
    name: "product",
    meta: { title: "product" },
  },
  {
    path: "/blogList",
    component: () => import('@/components/blogList.vue'),
    name: "blogList",
    meta: { title: "blogList" },
  },
  {
    path: "/orderConfirmation",
    component: () => import('@/components/orderConfirmation.vue'),
    name: "orderConfirmation",
    meta: { title: "orderConfirmation" },
  },

  // {
  //   path: "/404",
  //   name: "404",
  //   meta: { title: "Not Found" },
  //   component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue")
  // },

  // {
  //   path: "/500",
  //   name: "500",
  //   meta: { title: "Server Error" },
  //   component: () => import(/* webpackChunkName: "errors-500" */ "@/views/error/Error.vue")
  // }
]
