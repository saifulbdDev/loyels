import Vue from "vue";
import Router from "vue-router";

import HomeLayout from "../layout/Frontend.vue";
import Home from "../pages/home/Index.vue";
import ProfileLayout from "../pages/profile/ProfileLayout.vue";
import Details from "../pages/profile/Details.vue";

import Signup from "../pages/auth/Signup.vue";
import SignupProceed from "../pages/auth/SignupProceed.vue";
import Login from "../pages/auth/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signup-proceed",
      name: "Signup Proceed",
      component: SignupProceed,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: HomeLayout,
      children: [
        {
          meta: { title: "Home" },
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          meta: { title: "ProfileLayout" },
          path: "/profile",
          name: "ProfileLayout",
          component: ProfileLayout,
          children: [
            {
              meta: { title: "Profile" },
              path: "/profile",
              name: "Profile",
              component: Details,
            },
          ],
        },
      ],
    },

    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
