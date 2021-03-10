/* eslint-disable vue/valid-v-for */
<template>
  <section class="product-area">
    <div class="product-title-area">
      <div class="row">
        <div class="col-8">
          <h3 class="title">
            Best Wish Of The Year Extra 20% Off | Code: BEAUTY20
          </h3>
        </div>
        <div class="col-4">
          <a href="#" class="see-more float-right">See More</a>
        </div>
      </div>
    </div>
    <div class="product-list-area">
      <div class="owl-carousel owl-theme">
        <carousel
          :per-page="7"
          navigationNextLabel="<i class='fa fa-arrow-right'></i>"
          navigationPrevLabel="<i class='fa fa-arrow-left'></i>"
          :mouse-drag="false"
          :navigationEnabled="true"
          :paginationEnabled="false"
          :autoplay="true"
          :autoplayTimeout="2000"
        >
          <slide v-for="(slide, i) in slides" :key="'slide' + i">
            <div class="single-product">
              <div class="product-image">
                <a href="#"><img :src="slide.img" alt="product Image"/></a>
              </div>
              <div class="product-text">
                <div class="product-name">
                  <a href="#">{{ slide.title }}</a>
                </div>
                <div class="product-amount">$ {{ slide.price }}</div>
                <span class="old-amount" v-if="slide.reguler_price"
                  >$ {{ slide.reguler_price }}</span
                >
                <span class="discount-amount" v-if="slide.reguler_price"
                  >5% Off</span
                >
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product1.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product2.jpg"),
        },
        {
          title: "product name",
          price: "100",
        
          img: require("@/assets/images/product/product3.jpg"),
        },
        {
          title: "product name",
          price: "100",
         
          img: require("@/assets/images/product/product4.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product5.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product6.jpg"),
        },
        {
          title: "product name",
          price: "100",
         
          img: require("@/assets/images/product/product7.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product8.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product9.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product10.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product11.jpg"),
        },
        {
          title: "product name",
          price: "100",
       
          img: require("@/assets/images/product/product1.jpg"),
        },
        {
          title: "product name",
          price: "100",
          reguler_price: "150",
          img: require("@/assets/images/product/product2.jpg"),
        },
        {
          title: "product name",
          price: "100",
        
          img: require("@/assets/images/product/product3.jpg"),
        },
      ],
    };
  },
};
</script>

