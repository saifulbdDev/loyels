<template>
  <header>
    <!-- MAIN MENUBAR AREA START -->
    <div class="main-menubar">
      <nav
        class="navbar navbar-expand-lg menu "
        :class="showNavbar ? '' : 'fixed'"
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="navbar-icon fa fa-bars"></i>
        </button>
        <router-link class="navbar-brand logo-right" to="/">
          <img src="@/assets/images/logo/logo-final.png" alt="Loyer Logo" />
        </router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="search-box">
            <form>
              <input type="search" placeholder="Search" aria-label="Search" />
              <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>

          <ul class="navbar-nav right-nav mt-2 mt-lg-0">
            <li class="nav-item" v-for="(menu, i) in topmenu" :key="'menu'+i">
              <router-link class="nav-link" :to="menu.to">
                <i :class="menu.icon" aria-hidden="true"></i>
                <br />
               
              </router-link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    <!-- MAIN MENUBAR AREA END-->

    <!--        ********************* menu part start *************************-->
    <HeaderBottom />
    <!--        ********************* menu part end ***************************-->
  </header>
</template>
<script>
import HeaderBottom from "./HeaderBottom";
export default {
   components: {
    HeaderBottom,
   },
  data() {
  
    return {
      topmenu:[
        {icon:'fa fa-shopping-cart', to:'/cart'},
        {icon:'fa fa-heart-o', to:'/cart'},
        {icon:'fa fa-bars', to:'/cart'},
        {icon:'fa fa-user-circle-o', to:'/profile'},
       
      ],
      showNavbar:true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > 500) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
  },
};
</script>
