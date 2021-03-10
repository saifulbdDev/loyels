<template>
     <footer class="footer-area">
        <div class="top-footer-area">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-header">
                        <h3>Easy and Secure Payments</h3>
                    </div>
                    <div class="footer-feature">
                        <div class="row">
                            <div class="col-3 mb-2 p-0">
                                <img class="img-fluid" src="@/assets/images/footer/pay-1.png" alt="Payment">
                            </div>
                            <div class="col-3 mb-2 p-0">
                                <img class="img-fluid" src="@/assets/images/footer/pay-2.png" alt="Payment">
                            </div>
                            <div class="col-3 mb-2 p-0">
                                <img class="img-fluid" src="@/assets/images/footer/pay-3.png" alt="Payment">
                            </div>
                            <div class="col-3 mb-2 p-0">
                                <img class="img-fluid" src="@/assets/images/footer/pay-4.png" alt="Payment">
                            </div>
                            <div class="col-3 mb-2 p-0">
                                <img class="img-fluid" src="@/assets/images/footer/pay-5.png" alt="Payment">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-header">
                        <h3>Change Region</h3>
                    </div>
                    <div class="footer-feature">
                        <span class="footer-item">Bangladesh</span>
                        <a href="#" class="footer-item text-danger">Change</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-header">
                        <h3>Download App</h3>
                    </div>
                    <div class="footer-feature">
                        <a href="#"><img class="img-fluid" src="@/assets/images/footer/google-play.png" alt="Google Play"></a>
                        <a href="#"><img class="img-fluid" src="@/assets/images/footer/apple-store.png" alt="Apple Store"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-header">
                        <h3>FOLLOW</h3>
                    </div>
                    <div class="footer-feature">
                        <a href="#"><img class="img-fluid" src="@/assets/images/footer/facebook.png" alt="Facebook"></a>
                        <a href="#"><img class="img-fluid" src="@/assets/images/footer/instagram.png" alt="Instagram"></a>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="top-footer-area">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-6" v-for="(menu, i) in   footermenu" :key="i">
                    <div class="footer-header">
                        <h3>{{menu.name}}</h3>
                    </div>
                    <div class="footer-feature">
                      
                        <router-link class="footer-item" v-for="(item, itemi) in menu.child" :key="'item'+itemi" :to="item.to">{{item.name}}</router-link>
                       
                    </div>
                </div>
           
               
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-header">
                        <h3>COMPANY</h3>
                    </div>
                    <div class="footer-feature">
                        <span class="footer-item">Loyel Online Shop</span>
                        <span class="footer-item">United IT Solution Ltd, 4th Floor</span>
                        <span class="footer-item">Mirpur, Dhaka, Bangladesh</span>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="top-footer-area">
            <div class="row">
                <div class="col-12">
                    <p class="footer-item"> Welcome to Loyel Shopping! </p>
                    <p class="footer-item">
                        Loyel Online Shop is a B2C marketplace network for fashion and lifestyle buyers and sellers in
                        categories including fashion, lifestyle, and health & beauty to buy and sell effortlessly
                        online. Browse the vast digital catalog with a huge in style selection at the most competitive
                        prices from trusted sellers. Easily, enjoy our fast delivery services and benefit from flexible
                        and secure online payments.
                    </p>
                    <p class="footer-item">&copy; Copyright Loyel Online Shop 2021</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
     data() {
    return {
        footermenu: [
            {
              name: "About Us",
              child: [
                { name: "Careers", to: "/careers" },
                { name: "Privacy Policy", to: "/privacy-policy" },
                { name: "Terms of Use", to: "/terms" },
                { name: "Press", to: "/press" },
              ],
            },
            {
              name: "Help",
              child: [
                { name: "Customer Care", to: "/customer-care" },
                { name: "faq", to: "/mobilephones" },
                { name: "Mobile phones", to: "/mobilephones" },
                { name: "Return Policy", to: "/return-policy" },
              ],
            },
            {
              name: "Buisness",
              child: [
                { name: "Sell On Loyel Shopping", to: "/sell_on_loyel" },
                { name: "Buy Wholesale", to: "/buy_wholesale" },
               
              ],
            },
          ],
    
  
    };
  },
}
</script>