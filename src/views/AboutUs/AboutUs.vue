<script setup>
import '@/assets/Style/AboutUS/Hero.css'
import '@/assets/Style/AboutUS/Corparation.css'
import '@/assets/Style/AboutUS/Mission.css'
import '@/assets/Style/AboutUS/Boss.css'
import '@/assets/Style/Home/Contact.css'
</script>
<template>  
    <section class="About-hero">
        <div class="About-hero-shadow">
        </div>
        <div class="container About-hero-wrapper">
            <h1>
                Biz Haqimizda
            </h1>
        </div>
    </section>
    <section class="About-corparation">
        <div class="container">
            <div class="About-corparation-wrapper">
                <div class="About-corparation-content">
                    <h1>
                        <Span>Oltin</Span> Vodiy Haqida
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam aut dolorem doloremque magni optio fugit eligendi atque voluptates voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quidem, odit, veritatis omnis numquam nostrum et iure minus ullam inventore tempora dolorum voluptate accusamus! Aliquam sit a sint dolorum dolor.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse blanditiis iure recusandae sint tempora assumenda cumque hic doloribus quis aspernatur placeat, fa
                    </p>
                    <p>
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
                    <img src="https://frndsdubai.com/wp-content/uploads/2022/12/FRNDS-CAFE_Tape-Agency_008_07.11.2022-1-2048x1365.jpg" alt="foto">
                </div>
                <div class="About-mission-content">
                    <div class="About-mission-content-card">
                        <h2>
                            Vazifamiz
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, inventore quisquam similique quo recusandae perspiciatis. 
                        </p>
                    </div>
                    <div class="About-mission-content-card">
                        <h2>
                            Maqsad
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, inventore quisquam similique quo recusandae perspiciatis. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="About-boss">
        <div class="container">
            <h1>
                Bizning xo'jayinimiz bilan tanishing
            </h1>
            <div class="About-boss-wrapper">
                <div class="About-boss-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel inventore quis dolores dolor incidunt libero aliquam aliquid soluta? Provident?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum fugiat mollitia, sed nisi perferendis repellat eligendi repellendus voluptates a quibusdam neque unde reprehenderit molestias! Ratione eaque rerum accusantium nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vel illo ab deleniti facilis enim tempore sint dolorum dolorem nostrum?
                    </p>
                </div>
                <div class="About-boss-foto">
                    <img src="https://frndsdubai.com/wp-content/uploads/2023/02/WhatsApp_Image_2023-02-17_at_14.25.08.jpeg.jpg" alt="foto">
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