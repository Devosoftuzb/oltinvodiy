<script setup>
import '@/assets/Style/Gallary/Hero.css'
import '@/assets/Style/Gallary/Foto.css'
import '@/assets/Style/Home/Contact.css'
import { ref, reactive, onMounted } from 'vue';
import axios from "../../services/axios";
import CONFIG from '../../stores/config'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const gallary_title = ref(null);

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

  gsap.fromTo(
    gallary_title.value,
    { y: '-100%', opacity: 0 },
    { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' },
  );
  gsap.fromTo('.contact-title',
    {
      y: '-100%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 90%',
        scrub: 1
      }
    }
  )
  gsap.fromTo('.contact-btn-item',
    {
      opacity: 0,
      x: '-100%',
    },
    {
      opacity: 1,
      x: '0',
      scrollTrigger: {
        trigger: '.contact-btn-item',
        end: 'top 100%',
        // markers:true,
        scrub: 5
      }
    }
  )
  gsap.fromTo('.contact-btn-tel',
    {
      opacity: 0,
      x: '100%',
    },
    {
      opacity: 1,
      x: '0',
      scrollTrigger: {
        trigger: '.contact-btn-tel',
        end: 'top 100%',
        // markers:true,
        scrub: 5
      }
    }
  )
})

const store = reactive({
  gallery: false,
  listGallery: []
})

const img = reactive({
  img_1: '',
  img_2: '',
  img_3: '',
  img_4: '',
  img_5: '',
  img_6: '',
  img_7: '',
  img_8: ''
})

const getAllGallery = () => {
  axios
    .get("/gallery/find-all", {
    })
    .then((res) => {
      store.gallery = res.data
      store.gallery = store.gallery.reverse()
      for (let i = 0; i < 8; i++) {
        if (store.gallery[i]) {
          store.listGallery.push(store.gallery[i])
        }
        else {
          store.listGallery.push(store.gallery[store.gallery.length - 1])
        }
      }
      img.img_1 = store.listGallery[0].image
      img.img_2 = store.listGallery[1].image
      img.img_3 = store.listGallery[2].image
      img.img_4 = store.listGallery[3].image
      img.img_5 = store.listGallery[4].image
      img.img_6 = store.listGallery[5].image
      img.img_7 = store.listGallery[6].image
      img.img_8 = store.listGallery[7].image
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  getAllGallery();
});

</script>
<template>
  <section class="Gallary-hero">
    <div class="Gallary-hero-shadow">
    </div>
    <div class="container">
      <h1 ref="gallary_title">
        {{ $t('Gallary_title') }}
      </h1>
    </div>
  </section>
  <section class="Gallary-foto">
    <div class="Gallary-container">
      <div class="Gallary-wrapper">
        <figure class="foto1">
          <img :src="CONFIG.API_URL + img.img_1" alt="foto">
        </figure>
        <figure class="foto2">

          <img :src="CONFIG.API_URL + img.img_2" alt="foto">
        </figure>
      </div>
      <div class="Gallary-wrapper">
        <figure class="foto3">

          <img :src="CONFIG.API_URL + img.img_3" alt="foto">
        </figure>
        <figure class="foto4">

          <img
          :src="CONFIG.API_URL + img.img_4"
            alt="foto">
        </figure>
      </div>
      <div class="Gallary-wrapper">
        <figure class="foto5">

          <img :src="CONFIG.API_URL + img.img_5" alt="foto">
        </figure>
        <figure class="foto6">

          <img :src="CONFIG.API_URL + img.img_6" alt="foto">
        </figure>
      </div>
      <div class="Gallary-wrapper">
        <figure class="foto7">

          <img
          :src="CONFIG.API_URL + img.img_7"
            alt="foto">
        </figure>
        <figure class="foto8">

          <img :src="CONFIG.API_URL + img.img_8" alt="foto">
        </figure>
      </div>
    </div>
  </section>
  <section class="contact">
    <div class="container">
      <h1 class="contact-title">
        {{ $t('Contact_title') }}
      </h1>
      <div class="contact-btn">
        <router-link  to="/Contact" class="contact-btn-item">
          {{ $t('Contact_btn') }}
        </router-link>
        <a class="contact-btn-tel" href="tel:+981100632">
          {{ $t('Contact_btn2') }}
        </a>
      </div>
    </div>
  </section>
</template>