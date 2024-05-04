<script setup>
import '@/assets/Style/Home/Hero.css'
import '@/assets/Style/Home/AboutUs.css';
import '@/assets/Style/Home/Gallary.css';
import '@/assets/Style/Home/Menu.css';
import '@/assets/Style/Home/Contact.css';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const hero__title = ref(null);
const hero__btn = ref(null)
const boxRef  = ref(null)

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

  gsap.fromTo(
    hero__title.value, 
    { y: '-100%', opacity: 0 }, 
    { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' },
  );
  gsap.fromTo(
    hero__btn.value,
    { y: '100%', opacity: 0 }, 
    { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
  )

  gsap.fromTo('.box',
  { y: '-100%', opacity: 0 },
   {
    y: '0%',
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
        scrollTrigger:{
            trigger:'.box',
            // markers: true,
            start:'top 90%',
            scrub:1.5
        },
    })
  gsap.fromTo('.aboutUs-content-p1',
  {  opacity: 0 },
   {
    opacity: 1,
    ease: 'power2.out',
        scrollTrigger:{
            trigger:'.aboutUs-content-p1',
            // markers: true,
            start:'top 90%',
            scrub:1.5,
            duration: 5 
        },
    })
  gsap.fromTo('.aboutUs-content-p2',
  {  opacity: 0 },
   {
    opacity: 1,
    ease: 'power2.out',
        scrollTrigger:{
            trigger:'.aboutUs-content-p2',
            // markers: true,
            start:'top 90%',
           
            scrub:1.5,
            duration: 5
        },
    })
    gsap.fromTo('.AboutUs-btn',
      {
        y:'100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity: 1,
        scrollTrigger:{
          trigger:'.AboutUs-btn',
          start:'top 90%',
          // markers:true,
          scrub:1.2,
        }
      }
    )
    gsap.fromTo('.Gallary-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.Gallary-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.Gallary-text1',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.Gallary-text1',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.Gallary-text2',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.Gallary-text2',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.Gallary-text3',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.Gallary-text3',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.Gallary-btn',
      {
        y:'100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity: 1,
        scrollTrigger:{
          trigger:'.Gallary-btn',
          start:'top 90%',
          // markers:true,
          scrub:1.2,
        }
      }
    )
    gsap.fromTo('.Home-Gallary-foto',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.Home-Gallary-foto',
          start:'top 90%',
          scrub:1.8
        }
      }
    )
    gsap.fromTo('.Menu-content-title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.Menu-content-title',
          start:'top 90%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.menu-foto-right-img',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.menu-foto-right-img',
          start:'top 90%',
          scrub:1.8
        }
      }
    )
    gsap.fromTo('.Menu-foto-left-img',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.Menu-foto-left-img',
          start:'top 90%',
          scrub:1.8
        }
      }
    )
    gsap.fromTo('.menu-text1',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.menu-text1',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
    gsap.fromTo('.menu-text2',
    {
      opacity: 0 ,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:'.menu-text2',
        start:'top 90%',
        scrub:1.2
      }
    }
  )
  gsap.fromTo('.Menu-btn',
      {
        y:'100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity: 1,
        scrollTrigger:{
          trigger:'.Menu-btn',
          start:'top 90%',
          // markers:true,
          scrub:1.2,
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
          // markers:true,
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
});

</script>

<template>
<div  class="content" @scroll="handleScroll" ref="content">
  <div  class="target-element" ref="targetElement">
    <section class="Hero">
      <div class="container hero-wrapper" >
        <div class="hero-shadow">
  
        </div>
        <div class="hero-content">
          <span>
            {{ $t('greeting') }}
          </span>
          <h1 ref="hero__title">
            Oltin Vodiy
          </h1>
            <div ref="hero__btn"> 
              <router-link  to="/Menu" class="hero-menu-btn" >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152c.226 0 .425-.014.598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"/></svg>
              </router-link>
            </div>
          <span>
            Watch now
          </span>
        </div>
      </div>
    </section>
    <section class="AboutUs">
      <div class="container aboutUs-wrapper">
          <div class="aboutUs-content">
            <h1 class="box" ref="boxRef">
              Biz Haqimizda
            </h1>
            <p class="aboutUs-content-p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis, atque ullam porro tempora illo non, sunt quidem quisquam accusamus vero? Dolorem aliquid voluptatibus, consectetur ea aperiam exercitationem at fuga.
            </p>
            <p class="aboutUs-content-p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis, atque ullam porro tempora illo non, sunt quidem quisquam accusamu
            </p>
            <router-link  to="/AboutUs" class="AboutUs-btn">
              Ko'proq
            </router-link>
          </div>
      </div>
    </section>
    <section class="Gallary">
      <div class="container Gallary_wrapper">
        <div>
          <h1 class="Gallary-title">
            Gallary
          </h1>
          <div class="Gallary-wrapper">
            <div class="Gallary-content">
              <h2 class="Gallary-title">
                Gallary
              </h2>
              <p class="Gallary-text1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum accusantium cupiditate neque rerum porro maiores expedita minima dicta officia?
              </p>
              <p class="Gallary-text2"> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dignissimos inventore recusandae velit omnis magni deleniti ipsa ut qui doloremque.
              </p>
              <p class="Gallary-text3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus possimus quidem architecto atque voluptatem distinctio dolorem repellat, libero voluptatum at?
              </p>
              <router-link  to="/Gallary" class="Gallary-btn">
                Ko'proq
              </router-link>
            </div>
            <div class="Home-Gallary-foto">
              <img src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_026_07.11.2022-1-2048x1365.jpg" alt="foto">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="Menu">
      <div class="container">
        <div class="Menu-wrapper">
          <div class="Menu-foto-left">
            <img class="Menu-foto-left-img" src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_022_07.11.2022-1-scaled.jpg" alt="foto">
          </div>
          <div class="Menu-content">
            <h2 class="Menu-content-title">
              Menyu
            </h2>
            <p class="menu-text1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis, eum minima magnam, debitis distinctio quo consequuntur non nam consequatur labore. Veritatis voluptas, dolores repellat debitis totam unde illum vero?
            </p>
            <p class="menu-text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum labore soluta quis odit recusandae doloremque quia adipisci facere error!
            </p>
            <router-link  to="/Menu" class="Menu-btn">
              To'liq menyu
            </router-link>
          </div>
          <div class="Menu-foto-right">
            <img class="menu-foto-right-img" src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_044_30.11.2022-1-768x1152.jpg" alt="foto">
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container">
        <h1 class="contact-title">
          Bugunoq band qiling!
        </h1>
        <div class="contact-btn">
          <router-link  to="/Contact" class="contact-btn-item">
             Bog`lanish
          </router-link>
          <a class="contact-btn-tel" href="tel:+981100632">
             Bron qilish
          </a>
        </div>
      </div>
    </section>
  </div>
</div>
</template>