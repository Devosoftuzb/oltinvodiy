<script>
    import '@/assets/Style/Menu/Hero.css'
    import '@/assets/Style/Menu/Menu.css'
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { ref } from 'vue';
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
    import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
    export default {
        components: {
        Swiper,
        SwiperSlide,
    },
  setup() {
    const swiper = useSwiper();
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

    const activeIndex = ref(null);

    const changeBackground = (index) => {
      activeIndex.value = index;
    };

    return {
      activeIndex,
      changeBackground,
      onSwiper,
    onSlideChange,
    swiper,
    modules: [Navigation, Pagination, A11y, Autoplay]
    };
  }
}


</script>
<template>
    <section class="Menu-Hero">
        <div class="container Menu-hero-wrapper">
            <div class="Menu-hero-shadow">

            </div>
            <h1>
                Menuy
            </h1>
        </div>
    </section>
    <section class="Menu-list">
        <div class="container">
            <div class="Menu-list-header">
                <span @click="changeBackground(null)" :class="{ active: activeIndex === null }">
                    Milliy taomlar
                </span>
                <span @click="changeBackground(1)" :class="{ active: activeIndex === 1 }">
                    Xorijiy taomlar
                </span>
                <span @click="changeBackground(2)" :class="{ active: activeIndex === 2 }">
                    Salatlar
                </span>
                <span @click="changeBackground(3)" :class="{ active: activeIndex === 3 }">
                    Ichimlik
                </span>
            </div>
            <div class="Menu-swiper">
                <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="1" :space-between="50"
                navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange" :autoplay="{ delay: 3000 }">   
                <swiper-slide >
                   <div class="Menu-swiper-card">
                        <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="">
                        <div class="Menu-swiper-card-grid">
                            <h2>
                                Lorem
                            </h2>
                            <div class="Menu-card-line">

                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab nisi, quos facere sit error odit expedita in nobis voluptas?
                            </p>
                            <span>
                                20000 so`m
                            </span>
                        </div>
                   </div>
                </swiper-slide>
                <swiper-slide >
                   <div class="Menu-swiper-card">
                        <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="">
                        <div class="Menu-swiper-card-grid">
                            <h2>
                                Lorem
                            </h2>
                            <div class="Menu-card-line">

                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab nisi, quos facere sit error odit expedita in nobis voluptas?
                            </p>
                            <span>
                                20000 so`m
                            </span>
                        </div>
                   </div>
                </swiper-slide>
                <swiper-slide >
                   <div class="Menu-swiper-card">
                        <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="">
                        <div class="Menu-swiper-card-grid">
                            <h2>
                                Lorem
                            </h2>
                            <div class="Menu-card-line">

                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab nisi, quos facere sit error odit expedita in nobis voluptas?
                            </p>
                            <span>
                                20000 so`m
                            </span>
                        </div>
                   </div>
                </swiper-slide>
            </swiper>
            </div>
        </div>
    </section>
</template>