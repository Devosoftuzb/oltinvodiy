<script setup>
import Header from '@/components/Header.vue';
import '@/assets/Style/Hero.css'
import '@/assets/Style/AboutUs.css'

let ScrolValue = window.scrollY
console.log(ScrolValue);  
</script>

<template>
  <Header/>
  <main>
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
              Koproq
            </router-link>
          </div>
      </div>
    </section>
  </main>
</template>
