<template>
  <main>
    <section class="login-area">
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

      <!-- LOGIN SECTION START -->
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6">
          <div class="login-img">
            <img src="@/assets/images/login/login-map.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6">
          <div class="login">
            <div class="login-box">
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
                  <div class="form-label text-center py-3">Login Account</div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email ID"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-check mt-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms-policy"
                    />
                    <label class="form-check-label" for="terms-policy">
                      Remember Password
                    </label>
                  </div>
                  <div class="form-group mt-4">
                    <button class="btn btn-block btn-primary rounded-0">
                      Login
                    </button>
                  </div>

                  <div class="form-group mt-4">
                    <a
                      class="btn btn-block btn-primary rounded-0 pro reg"
                      href="signup.html"
                      >Register</a
                    >
                  </div>

                  <div class="form-group mt-3">
                    <a href="#" class="text-center d-block">Forget Password?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- LOGIN SECTION END -->
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
