<template>
  <main>
    <section class="login-area sign-area">
      <!-- HEADER AREA START -->
      <header>
        <!-- LOGIN BG START -->
        <div class="login-bg-top"></div>
        <!-- LOGIN BG END -->
        <!-- TOP MENUBAR START -->
        <!--
            <div class="top-menubar">
                <nav class="navbar navbar-expand">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Bangla | </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">English</a>
                        </li>
                    </ul>
                </nav>
            </div>
-->
        <!-- TOP MENUBAR END -->
      </header>
      <!-- HEADER AREA END -->

      <div class="login sign-log">
        <div class="login-box box-1">
          <div class="login-details">
            <div class="login-header text-center">
              <div class="logo">
                <a href="index.html"
                  ><img
                    class="text-center"
                    src="@/assets/images/logo/logo-final.png"
                    alt="Logo"
                /></a>
              </div>
              <span>WELCOME, BE A PART OF US</span>
            </div>
            <div class="login-form mt-3">
              <div class="form-label text-center py-3">
                Contune With E-mail or Phone
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email ID or Phone"
                />
              </div>

              <div class="form-group mt-4">
                <a
                  class="btn btn-block btn-primary rounded-0 pro"
                  href="signup-proceed.html"
                  >Proceed</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LOGIN BG START -->
      <div class="login-bg-bottom"></div>
      <!-- LOGIN BG END -->
    </section>
 <Footer />
    <!-- FOOTER AREA START -->
  </main>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "Frontend",
  components: {
    Footer,
  },
};
</script>
