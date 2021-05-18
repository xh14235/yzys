import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    // component: Login
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      auth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   const token = store.state.token;
//   if (to.meta.auth) {
//     if (token) {
//       next();
//     } else {
//       next("/");
//     }
//   } else {
//     next();
//   }
// });

export default router;
