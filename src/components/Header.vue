<template>
<header id="header" :class="{ 'header_bg': isScrolled }">
    <div class="header-wrapper">
        <div class="header-logo">
            <h1>
                Oltin <span>vodiy</span> 
            </h1>
            <!-- <img class="logo"  src="/public/header-logo.png" alt="">
            <img class="mobile-logo"  src="/public/mobile-logo.png" alt=""> -->
        </div>
        <nav class="header-menu">
            <router-link @click="ScTop"  to="/" class="header-menu-item">
                <h3>
                    Bosh sahifa
                </h3>
            </router-link>
            <router-link  @click="ScTop" to="/Menu" class="header-menu-item">
                <h3>
                    Menu
                </h3>
            </router-link>
            <router-link  @click="ScTop" to="/AboutUs" class="header-menu-item">
                <h3>
                    Biz haqimizda
                </h3>
            </router-link>
            <router-link  @click="ScTop" to="/Gallary" class="header-menu-item">
                <h3>
                    Gallary
                </h3>
            </router-link>
            <router-link  @click="ScTop" to="/Contact" class="header-menu-item">
                <h3>
                    Bog`lanish
                </h3>
            </router-link>
        </nav>
        <div class="Header-btn">
            <button @click="changeLanguages">
                Russ
            </button>
            <div class="header-btn">
                <a href="tel:+981100632">
                    <svg class="header-btn-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                </a>
            </div>
        </div>
        <div @click="burger" class="burger" :class="{'ModalClose': closeModal}" >
            <span class="burger__line burger__line_first"></span>
            <span class="burger__line burger__line_second"></span>
            <span class="burger__line burger__line_third"></span>
            <span class="burger__line burger__line_fourth"></span>
        </div>
    </div>
    <div class="header-modal-mobile" :class="{'ModalClose': closeModal}">
       <div class="header-modal-mobile-wrapper" >
        <div class="header-logo-mobile">
            <h1>
                Oltin <span>vodiy</span> 
            </h1>
        </div>
        <nav class="header-menu-mobile">
            <router-link @click="closeMenu"  to="/" class="header-menu-item" >
                <h3>
                    Bosh sahifa
                </h3>
            </router-link>
            <router-link  @click="closeMenu" to="/Menu" class="header-menu-item">
                <h3>
                    Menu
                </h3>
            </router-link>
            <router-link @click="closeMenu" to="/AboutUs" class="header-menu-item">
                <h3>
                    Biz haqimizda
                </h3>
            </router-link>
            <router-link @click="closeMenu" to="/Gallary" class="header-menu-item">
                <h3>
                    Gallary
                </h3>
            </router-link>
            <router-link @click="closeMenu" to="/Contact" class="header-menu-item">
                <h3>
                    Bog`lanish
                </h3>
            </router-link>
        </nav>
       </div>
    </div>
    <div class="header-mobile-shadow" :class="{'ModalClose': closeModal}">

    </div>
</header>
</template>
<script setup>
import '@/assets/Style/Header.css'
import { ref, onMounted, onUnmounted } from 'vue';
function burger() {
        const burger = document.querySelector('.burger');
        const modal = document.querySelector('.header-modal-mobile')
        const shadow = document.querySelector('.header-mobile-shadow')
        burger.classList.toggle('burger_active');
        modal.classList.toggle('db');
        shadow.classList.toggle('db_shadow')
    }
    

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

import { useChangeLanguage } from '../stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = () => {
    changeLanguage();
};
const closeModal = ref(false)
const closeMenu = () =>{
    (closeModal.value = !closeModal.value)
    window.scrollTo(0, 0);
} 
const ScTop = ()=>{
    window.scrollTo(0, 0);
}

</script>
