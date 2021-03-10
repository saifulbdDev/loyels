<template>
    <section id="categorie">
      <div class="categorie-menu">
        <ul class="mb-0">
          <template v-for="(menu, i) in menus">
            <li
              @mouseover="showMenu"
              @mouseleave="hideMenu"
              v-if="menu.submenu"
              :key="i"
              class="mega-menu"
            >
              <a
                href="#"
                @focus="showMenu"
                @keydown.shift.tab="hideMenu"
                @keydown.esc.exact="hideMenu"
                @keydown.up.exact.prevent="startArrowKeys"
                @keydown.down.exact.prevent="startArrowKeys"
                >{{ menu.name }}</a
              >
              <div
                class="mega-menu-list"
                v-if="menu.submenu"
                v-show="isVisible"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>
                                Clothing
                              </h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#">Tops and Tunics</a>
                              </li>
                              <li><a target="_blank" href="#"> Dresses </a></li>
                              <li>
                                <a target="_blank" href="#">Jump Suits</a>
                              </li>
                              <li>
                                <a target="_blank" href="#"> Tees & Shirts </a>
                              </li>
                              <li><a target="_blank" href="#"> Skirts </a></li>
                              <li><a target="_blank" href="#">Shorts</a></li>
                              <li><a target="_blank" href="#">Outerwear</a></li>
                              <li><a target="_blank" href="#">Trousers</a></li>
                              <li><a target="_blank" href="#">Jeans</a></li>
                              <li>
                                <a target="_blank" href="#">
                                  Beachwear/Swimwear
                                </a>
                              </li>
                              <li>
                                <a target="_blank" href="#"> Sports Wear </a>
                              </li>
                              <li>
                                <a target="_blank" href="#">
                                  Leggings
                                </a>
                              </li>
                              <li>
                                <a target="_blank" href="#"
                                  >Plus Size Fashion</a
                                >
                              </li>
                              <li>
                                <a target="_blank" href="#">
                                  Maternity Wear
                                </a>
                              </li>
                              <li>
                                <a target="_blank" href="#">
                                  Shapewear
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>fashion</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#">woman clothes</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">men clothes</a>
                              </li>
                              <li><a target="_blank" href="#">footewear</a></li>
                              <li>
                                <a target="_blank" href="#">accessories</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">watches</a>
                                </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>fashion</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#">woman clothes</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">men clothes</a>
                              </li>
                              <li><a target="_blank" href="#">footewear</a></li>
                              <li>
                                <a target="_blank" href="#">accessories</a>
                              </li>
                              <li><a target="_blank" href="#">watches</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>beauty products</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li><a target="_blank" href="#">beauty</a></li>
                              <li>
                                <a target="_blank" href="#">personal care</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">natural care</a>
                              </li>
                              <li><a target="_blank" href="#">men</a></li>
                              <li><a target="_blank" href="#">applience</a></li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>beauty products</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li><a target="_blank" href="#">beauty</a></li>
                              <li>
                                <a target="_blank" href="#">personal care</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">natural care</a>
                              </li>
                              <li><a target="_blank" href="#">men</a></li>
                              <li><a target="_blank" href="#">applience</a></li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>home & kitchen</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#"
                                  >kitchen & dinning</a
                                >
                              </li>
                              <li><a target="_blank" href="#">furniture</a></li>
                              <li><a target="_blank" href="#">fine art</a></li>
                              <li>
                                <a target="_blank" href="#">kitchen storage</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">home decor</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>home & kitchen</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#"
                                  >kitchen & dinning</a
                                >
                              </li>
                              <li><a target="_blank" href="#">furniture</a></li>
                              <li><a target="_blank" href="#">fine art</a></li>
                              <li>
                                <a target="_blank" href="#">kitchen storage</a>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>books & movies</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li><a target="_blank" href="#">all book</a></li>
                              <li>
                                <a target="_blank" href="#">audio books</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">all movies</a>
                              </li>
                              <li><a target="_blank" href="#">music</a></li>
                              <li>
                                <a target="_blank" href="#">video games</a>
                              </li>
                          
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>books & movies</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li><a target="_blank" href="#">all book</a></li>
                              <li>
                                <a target="_blank" href="#">audio books</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">all movies</a>
                              </li>
                              <li><a target="_blank" href="#">music</a></li>
                              <li>
                                <a target="_blank" href="#">video games</a>
                              </li>
                            
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 mega-box">
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>baby products</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#">toys & games</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">baby products</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">kids fashion</a>
                              </li>
                              <li>
                                <a target="_blank" href="#"
                                  >toy gifting store</a
                                >
                              </li>
                              <li>
                                <a target="_blank" href="#">home decor</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="link-section">
                        <div class="demo">
                          <div class="menu-title">
                            <a href="">
                              <h6>baby products</h6>
                            </a>
                          </div>
                          <div class="menu-content">
                            <ul>
                              <li>
                                <a target="_blank" href="#">toys & games</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">baby products</a>
                              </li>
                              <li>
                                <a target="_blank" href="#">kids fashion</a>
                              </li>
                              <li>
                                <a target="_blank" href="#"
                                  >toy gifting store</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li v-else :key="i">
              <a href="#">{{ menu.name }}</a>
            </li>
          </template>
        </ul>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { name: "Women", to: "women" },
        {
          name: "Men Kids",
          to: "women",
          submenu: [
            {
              name: "electronics",
              child: [
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
              ],
            },
            {
              name: "electronics",
              child: [
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
              ],
            },
            {
              name: "electronics",
              child: [
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
              ],
            },
          ],
        },
        { name: "Beauty", to: "/beauty" },
        { name: "Brands", to: "Brands" },
        { name: "Sports", to: "sports" },
        { name: "jewellery", to: "jewellery" },
        { name: "Festival", to: "festival" },
      ],
    
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    showMenu() {
      this.isVisible = true;
      console.log(this.isVisible);
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    },
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