<script setup>
import '@/assets/Style/Contact/Hero.css'
import '@/assets/Style/Contact/Form.css'
import '@/assets/Style/Contact/Map.css'
import '@/assets/Style/Home/Contact.css'
</script>
<template>
    <section class="Contact-hero">
        <div class="Contact-hero-shadow">
        </div>
        <div class="container">   
            <h1>
                Bog`lanish
            </h1>
        </div>
    </section>
    <section class="Contact-form">
        <div class="container">
            <div class="Contact-form-wrapper">
                <form>  
                    <h2>
                        O`z fikiringizdi qoldiring 
                    </h2>
                    <label for="name">
                        <input class="Con-name" type="text" id="name" placeholder="Ismingiz">
                    </label>
                    <label for="info">
                        <textarea placeholder="Fikiringizdi yozing" name="" id="info" cols="30" rows="10"></textarea>
                    </label>
                    <button class="form-btn" type="submit">
                        Yuborish
                    </button>
                </form>
                <div class="Contact-media">
                    <h2>
                        Bizning ijtimoiy tarmoqlarimiz
                    </h2>
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                            Guliston shahar
                        </h3>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                        +970206565
                    </h3>
                    <div class="contact-btn">
                        <a href="!#" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                           </a>
                           <a href="!#" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"/></svg>
                           </a>
                       </div>
                </div>
            </div>
        </div>
    </section>
    <section class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.59761778432!2d68.77141467143561!3d40.488747783316434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2076d1129d441%3A0x9ff0fae89a1526b9!2s%22Oltin%20Vodiy%22restaurant!5e0!3m2!1sru!2s!4v1714137679198!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>