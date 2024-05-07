<script setup>
import '@/assets/Style/AboutUS/Hero.css'
import '@/assets/Style/AboutUS/Corparation.css'
import '@/assets/Style/AboutUS/Mission.css'
import '@/assets/Style/AboutUS/Boss.css'
import '@/assets/Style/Home/Contact.css'
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const about__title_ref = ref(null);
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

  gsap.fromTo(
    about__title_ref.value, 
    { y: '-100%', opacity: 0 }, 
    { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' },
  );
  gsap.fromTo('.About-cor-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.About-cor-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.About-car-text1',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-car-text1',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.About-car-text2',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-car-text2',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-car-text3',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-car-text3',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-car-text4',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-car-text4',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-car-text5',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-car-text5',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.About-corparation-foto',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.About-corparation-foto',
          start:'top 150%',
        //   markers:true,
          scrub:1.8
        }
      }
    )
    gsap.fromTo('.about-mission-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.about-mission-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.about-mission-con-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.about-mission-con-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.about-mission-text',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.about-mission-text',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.about-mission-con-text',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.about-mission-con-text',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.about-mission-foto',
      {
        opacity:-0.5,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.about-mission-foto',
          start:'top 90%',
        //   markers:true,
          scrub:1.8
        }
      }
    )


    gsap.fromTo('.about-boss-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.about-boss-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.About-boss-text1',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text1',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text2',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text2',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text3',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text3',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text4',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text4',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text5',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text5',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text6',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text6',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.About-boss-text7',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.About-boss-text7',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.About-boss-foto-img',
      {
        opacity:-0.5,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.About-boss-foto-img',
          start:'top 90%',
        //   markers:true,
          scrub:1.8
        }
      }
    )  
    gsap.fromTo('.contact-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.contact-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.contact-btn-item',
      {
        opacity:0,
        x:'-100%',
      },
      {
        opacity:1,
        x:'0',
        scrollTrigger:{
          trigger:'.contact-btn-item',
          end:'top 100%',
        //   markers:true,
          scrub:5
        }
      }
    )
    gsap.fromTo('.contact-btn-tel',
      {
        opacity:0,
        x:'100%',
      },
      {
        opacity:1,
        x:'0',
        scrollTrigger:{
          trigger:'.contact-btn-tel',
          end:'top 100%',
          // markers:true,
          scrub:5
        }
      }
    )

  })
  const closeModal = ref(false)
const closeMenu = () => {
    (closeModal.value = !closeModal.value)
    window.scrollTo(0, 0);
}
const ScTop = () => {
    window.scrollTo(0, 0);
}
</script>
<template>  
    <section class="About-hero">
        <div class="About-hero-shadow">
        </div>
        <div class="container About-hero-wrapper">
            <h1 ref="about__title_ref">
              {{ $t('AboutUs_title') }}
            </h1>
        </div>
    </section>
    <section class="About-corparation">
        <div class="container">
            <div class="About-corparation-wrapper">
                <div class="About-corparation-content">
                    <h1 class="About-cor-title">
                        <Span>Oltin</Span> Vodiy
                    </h1>
                    <p class="About-car-text1">
                      {{ $t('AboutUs_text1') }}
                    </p>
                    <p class="About-car-text2">
                      {{ $t('AboutUs_text2') }}
                    </p>
                    <p class="About-car-text3">
                      {{ $t('AboutUs_text3') }}
                    </p>
                    <p class="About-car-text5">
                      {{ $t('AboutUs_text4') }}
                    </p>
                </div>
                <div class="About-corparation-foto">
                    <img class="about-foto1" src="https://frndsdubai.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-27-at-10.39.48-AM.jpeg" alt="foto">
                    <img class="about-foto2" src="https://frndsdubai.com/wp-content/uploads/elementor/thumbs/5R0A7922-min-scaled-1-q02hi5weh6kysvil6op8jdo0znb5p5l4zjkjj5cm7k.jpg" alt="foto">
                </div>
            </div>
        </div>
    </section>
    <section class="About-mission">
        <div class="container">
            <div class="About-mission-wrapper">
                <div class="About-mission-foto">
                    <img class="about-mission-foto" src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_008_07.11.2022-1-2048x1365.jpg" alt="foto">
                </div>
                <div class="About-mission-content">
                    <div class="About-mission-content-card">
                        <h2 class="about-mission-title">
                          {{ $t('AboutUs_mission_title') }}
                        </h2>
                        <p class="about-mission-text">
                          {{ $t('AboutUs_mission_text') }}
                        </p>
                    </div>
                    <div class="About-mission-content-card">
                        <h2 class="about-mission-con-title">
                          {{ $t('AboutUs_vision_title') }}
                        </h2>
                        <p class="about-mission-con-text">
                          {{ $t('AboutUs_vision_text') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="About-boss">
        <div class="container">
            <h1 class="about-boss-title">
              {{ $t('Cheff_title') }}
            </h1>
            <div class="About-boss-wrapper">
                <div class="About-boss-content">
                    <p class="About-boss-text2">
                      {{ $t('Cheff_text2') }}
                    </p>
                    <p class="About-boss-text3">
                      {{ $t('Cheff_text3') }}
                    </p>
                    <p class="About-boss-text4">
                      {{ $t('Cheff_text4') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="contact">
      <div class="container">
        <h1 class="contact-title">
          {{ $t('Contact_title') }}
        </h1>
        <div class="contact-btn">
          <router-link @click="closeMenu"  to="/Contact" class="contact-btn-item">
            {{ $t('Contact_btn') }}
          </router-link>
          <a class="contact-btn-tel" href="tel:+981100632">
            {{ $t('Contact_btn2') }}
          </a>
        </div>
      </div>
    </section>
</template>