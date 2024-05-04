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
</script>
<template>  
    <section class="About-hero">
        <div class="About-hero-shadow">
        </div>
        <div class="container About-hero-wrapper">
            <h1 ref="about__title_ref">
                Biz Haqimizda
            </h1>
        </div>
    </section>
    <section class="About-corparation">
        <div class="container">
            <div class="About-corparation-wrapper">
                <div class="About-corparation-content">
                    <h1 class="About-cor-title">
                        <Span>Oltin</Span> Vodiy Haqida
                    </h1>
                    <p class="About-car-text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam aut dolorem doloremque magni optio fugit eligendi atque voluptates voluptas?
                    </p>
                    <p class="About-car-text2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quidem, odit, veritatis omnis numquam nostrum et iure minus ullam inventore tempora dolorum voluptate accusamus! Aliquam sit a sint dolorum dolor.
                    </p>
                    <p class="About-car-text3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse blanditiis iure recusandae sint tempora assumenda cumque hic doloribus quis aspernatur placeat, fa
                    </p>
                    <p class="About-car-text5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, aperiam cupiditate! Perspiciatis voluptas doloremque ad nihil optio suscipit beatae voluptates.

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
                            Vazifamiz
                        </h2>
                        <p class="about-mission-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, inventore quisquam similique quo recusandae perspiciatis. 
                        </p>
                    </div>
                    <div class="About-mission-content-card">
                        <h2 class="about-mission-con-title">
                            Maqsad
                        </h2>
                        <p class="about-mission-con-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, inventore quisquam similique quo recusandae perspiciatis. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="About-boss">
        <div class="container">
            <h1 class="about-boss-title">
                Bizning xo'jayinimiz bilan tanishing
            </h1>
            <div class="About-boss-wrapper">
                <div class="About-boss-content">
                    <p class="About-boss-text1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel inventore quis dolores dolor incidunt libero aliquam aliquid soluta? Provident?
                    </p>
                    <p class="About-boss-text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p class="About-boss-text3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                    <p class="About-boss-text4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p class="About-boss-text5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                    <p class="About-boss-text6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p class="About-boss-text7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                </div>
                <div class="About-boss-foto">
                    <img class="About-boss-foto-img" src="https://frndsdubai.com/wp-content/uploads/2023/02/WhatsApp_Image_2023-02-17_at_14.25.08.jpeg.jpg" alt="foto">
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
</template>