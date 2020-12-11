<template>
  <div class="swiper-container" effect="coverflow">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img src="..\..\..\assets\project1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project2.jpg" alt="">
          </div>
          <div class="swiper-slide" >
            <img src="..\..\..\assets\project3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project4.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project5.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project6.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project7.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="..\..\..\assets\project8.jpg" alt="">
          </div>
          
          ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
v

export default {
  name: 'SwiperSlider',
  mounted() {
     new Swiper('.swiper-container', {
       spaceBetween: 30,
      //  loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
</script>

<style scoped>

img{
  width: 100%;
  position: absolute;
}
    .swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .swiper-slide {
      position: relative;
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;

    }
</style>