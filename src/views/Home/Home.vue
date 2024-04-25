<script setup>
import '@/assets/Style/Home/Hero.css'
import '@/assets/Style/Home/AboutUs.css';
import '@/assets/Style/Home/Gallary.css';
import '@/assets/Style/Home/Menu.css';
import '@/assets/Style/Home/Contact.css';
</script>

<template>
    <section class="Hero">
      <div class="container hero-wrapper" >
        <div class="hero-shadow">

        </div>
        <div class="hero-content">
          <span>
            Welcome to
          </span>
          <h1>
            Oltin Vodiy
          </h1>
            <router-link  to="/Menu" class="hero-menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152c.226 0 .425-.014.598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"/></svg>
            </router-link>
          <span>
            Watch now
          </span>
        </div>
      </div>
    </section>
    <section class="AboutUs">
      <div class="container aboutUs-wrapper">
          <div class="aboutUs-content">
            <h1>
              Biz Haqimizda
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis, atque ullam porro tempora illo non, sunt quidem quisquam accusamus vero? Dolorem aliquid voluptatibus, consectetur ea aperiam exercitationem at fuga.
            </p>
            <p>
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
          <h1>
            Gallary
          </h1>
          <div class="Gallary-wrapper">
            <div class="Gallary-content">
              <h2>
                Gallary
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum accusantium cupiditate neque rerum porro maiores expedita minima dicta officia?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dignissimos inventore recusandae velit omnis magni deleniti ipsa ut qui doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus possimus quidem architecto atque voluptatem distinctio dolorem repellat, libero voluptatum at?
              </p>
              <router-link  to="/Gallary" class="Gallary-btn">
                Ko'proq
              </router-link>
            </div>
            <div class="Gallary-foto">
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
            <img src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_022_07.11.2022-1-scaled.jpg" alt="foto">
          </div>
          <div class="Menu-content">
            <h2>
              Menyu
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis, eum minima magnam, debitis distinctio quo consequuntur non nam consequatur labore. Veritatis voluptas, dolores repellat debitis totam unde illum vero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum labore soluta quis odit recusandae doloremque quia adipisci facere error!
            </p>
            <router-link  to="/Menu" class="Menu-btn">
              To'liq menyu
            </router-link>
          </div>
          <div class="Menu-foto-right">
            <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_044_30.11.2022-1-768x1152.jpg" alt="foto">
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container">
        <h1>
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