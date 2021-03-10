<template>
  <main>
    <!-- HOME SLIDER AREA START -->
    <HomeSlider />
    <!-- HOME SLIDER AREA END -->

    <Prompt />

    <!-- PRODUCT AREA START -->
 
    <!-- PRODUCT AREA END -->

  

    <!-- PRODUCT AREA START -->
    <ProductOne />
   
    <!-- PRODUCT AREA END -->
  <!-- CATEGORY SECTION START -->
  
    
  
    <Category />
    <!-- CATEGORY SECTION END -->
     <!-- PRODUCT AREA START -->
    <ProductTwo />
   
    <!-- PRODUCT AREA END -->


    <!-- FEATURED SELLER AREA START -->
   <FeaturedSeller />
    <!-- FEATURED SELLER AREA END -->

    <!-- PRODUCT AREA START -->
    <ProductTree />
 
    <!-- PRODUCT AREA END -->

    <!-- TRENDING AREA START -->
    <Trending />
   
    <!-- TRENDING AREA END -->

    <!-- PRODUCT AREA START -->
  <ProductFour />
    <!-- PRODUCT AREA END -->

    <!-- BRAND AREA START -->
  <Brand />
    <!-- BRAND AREA END -->

    <!-- PRODUCT AREA START -->
   <ProductFive />
    <!-- PRODUCT AREA END -->

    <!-- PRODUCT AREA START -->
  
    <!-- PRODUCT AREA END -->

    <!--******************* nur code start ********************************************-->
    <a class="btop" href="#">
      <i class="fa fa-angle-double-up" aria-hidden="true"></i>
      <p>Top</p>
    </a>
  </main>
</template>
<script>
import HomeSlider from "./HomeSlider";
import Prompt from "./Prompt";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import Category from './Category';
import Brand from './Brand';
import FeaturedSeller from './FeaturedSeller';
import ProductTree from './ProductTree';
import ProductFour from './ProductFour';
import Trending from './Trending';
import ProductFive from './ProductFive';
export default {
  components: { HomeSlider, Prompt, ProductOne, ProductTwo, Category, Brand, FeaturedSeller, ProductTree, ProductFour, Trending, ProductFive},
};
</script>
