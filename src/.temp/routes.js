export default [
  {
    path: "/tags/covi-d19/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/Tag.vue")
  },
  {
    path: "/tags/angela-merkel/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/Tag.vue")
  },
  {
    path: "/category/news/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/Category.vue")
  },
  {
    path: "/author/barri-verner/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/Author.vue")
  },
  {
    path: "/author/archi-bolcz/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/Author.vue")
  },
  {
    path: "/blog/korona-test-na-vynoslivost-ne-vse-grazhdane-germanii-horosho-sebya-veli/",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/BlogPost.vue")
  },
  {
    path: "/blog/merkel-o-korona-krizise/",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/templates/BlogPost.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/evgenij/Desktop/dev/lifeingermany/node_modules/gridsome/app/pages/404.vue")
  }
]

