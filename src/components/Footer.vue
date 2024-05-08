<script setup>
import '@/assets/Style/Footer.css'
</script>
<template>
    <footer>
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-logo">
                    <img   src="/public/header-logo.png" alt="">
                </div>
                <div class="footer-card">
                    <h3>
                        {{ $t('Footer_adres') }}
                    </h3>
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                        Guliston shahar 
                    </h4>
                </div>
                <div class="footer-card">
                    <h3>
                        {{ $t('Footer_tel') }}
                    </h3>
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                        <a href="tel:+998937029292">
                            +998937029292
                        </a>
                    </h4>
                </div>
                <div class="footer-card">
                    <h3>
                        {{ $t('Footer_media') }}
                    </h3>
                       <div class="footer-media">
                        <a href="https://www.instagram.com/oltin_vodiy_restaurant?igsh=Y21uaW5vYTFkcHBw&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                           </a>
                       </div>
                </div>
            </div>
        </div>
    </footer>
</template>