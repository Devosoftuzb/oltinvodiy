<script setup>
import '@/assets/Style/Gallary/Hero.css'
import '@/assets/Style/Gallary/Foto.css'
import '@/assets/Style/Home/Contact.css'
</script>
<template>
    <section class="Gallary-hero">
        <div class="Gallary-hero-shadow">
        </div>
        <div class="container">   
            <h1>
                Gallary
            </h1>
        </div>
    </section>
    <section class="Gallary-foto">
        <div class="Gallary-container">
            <div class="Gallary-wrapper">
                <figure class="foto1">
                    <img  src="https://frndsdubai.com/wp-content/uploads/2024/02/IMG_5056.jpg" alt="foto">
                </figure>
                <figure class="foto2">

                    <img  src="https://frndsdubai.com/wp-content/uploads/2024/02/IMG_7415.jpg" alt="foto">
                </figure>
            </div>
            <div class="Gallary-wrapper">
                <figure class="foto3">
                    
                    <img  src="https://frndsdubai.com/wp-content/uploads/2024/02/IMG_7435.jpg" alt="foto">
                </figure>
                <figure class="foto4" >
                    
                    <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_057_30.11.2022-2048x1365.jpg" alt="foto">
                </figure>
            </div>
            <div class="Gallary-wrapper">
                <figure class="foto5">
                    
                    <img  src="https://frndsdubai.com/wp-content/uploads/2024/02/IMG_7428.jpg" alt="foto">
                </figure>
                <figure class="foto6">
                    
                    <img  src="https://frndsdubai.com/wp-content/uploads/2024/02/IMG_7417.jpg" alt="foto">
                </figure>
            </div>
            <div class="Gallary-wrapper">
                <figure class="foto7">
                    
                    <img  src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_008_07.11.2022-2048x1365.jpg" alt="foto">
                </figure>
                <figure class="foto8">
                    
                    <img  src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_015_30.11.2022-2048x1365.jpg" alt="foto">
                </figure>
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