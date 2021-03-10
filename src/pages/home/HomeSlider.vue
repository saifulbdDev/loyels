<template>
  <section class="home-slider">
    <carousel
      :per-page="1"
       class="owl-carousel"
      :mouse-drag="false"
    >
      <slide>
        <img src="@/assets/images/slider/slider-1.png" alt="Slider Image" />
      </slide>
      <slide>
        <img src="@/assets/images/slider/slider2.jpg" alt="Slider Image" />
      </slide>
    </carousel>
  </section>
  
</template>

