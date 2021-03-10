<template>
  <main>
    <section class="login-area sign-area-2">
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

      <div class="login sign-2">
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
              <div class="form-label text-center py-3">Create Account</div>
              <!--
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="Email ID">
                        </div>
-->
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="Name" />
              </div>
              <div class="row">
                <div class="col-5 pr-2">
                  <div class="form-group">
                    <select
                      class="form-control"
                      v-model="selected_code"
                      name=""
                      id=""
                    >
                      <option
                        v-for="(code, i) in countrycode"
                        v-bind:value="code"
                        :key="i"
                        >{{ code.name }} - {{ code.dial_code }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-7 pl-2">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="terms-policy"
                />
                <label class="form-check-label" for="terms-policy">
                  By signing up, I agree to Loyel's
                  <a href="">Privacy Policy </a> and
                  <a href="">Terms & Conditions</a>
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="sucsribe"
                />
                <label class="form-check-label" for="sucsribe">
                  Subscribe to our exclusive offers & promotions
                </label>
              </div>
              <div class="form-group mt-4">
                <button class="btn btn-block btn-primary rounded-0">
                  Sign up
                </button>
              </div>
              <div class="form-group mt-3">
                <a href="#" class="text-center d-block">Not You?</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LOGIN BG START -->
      <div class="login-bg-bottom sign-bg"></div>
      <!-- LOGIN BG END -->
    </section>
    <Footer />
    <!-- FOOTER AREA START -->
  </main>
</template>

<script>
import Footer from "./Footer";
import countrycode from "./countrycodes.json";

export default {
  name: "Frontend",
  components: {
    Footer,
  },
  data() {
    return {
      selected_code: {
        name: "Country Code",
      },

      countrycode: countrycode,
    };
  },
};
</script>
