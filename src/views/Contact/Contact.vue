<script setup>
import '@/assets/Style/Contact/Hero.css'
import '@/assets/Style/Contact/Form.css'
import '@/assets/Style/Contact/Map.css'
import '@/assets/Style/Home/Contact.css'
import { reactive } from 'vue';
import axios from '@/services/axios'
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
const con__title = ref(null);

onMounted(() => {

  gsap.fromTo(
    con__title.value, 
    { y: '-100%', opacity: 0 }, 
    { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' },
  );})


const contact = reactive ({
    phone: "",
    info: "",
})
const createContact = () => {
    const data = {
        phone: String(contact.phone),
        info: contact.info,
    };

    axios
        .post("/contact/create", data, {
        })
        .then((res) => {
            contact.phone = "";
            contact.info = "";
            location.reload()
        })
        .catch((error) => {
        });

}
</script>
<template>
    <section class="Contact-hero">
        <div class="Contact-hero-shadow">
        </div>
        <div class="container">   
            <h1 ref="con__title">
                {{ $t('ContactPg_title') }}
            </h1>
        </div>
    </section>
    <section class="Contact-form">
        <div class="container">
            <div class="Contact-form-wrapper">
                <form @submit.prevent="createContact">  
                    <h2>
                        {{ $t('Contact_comment') }}
                    </h2>
                    <label for="name">
                        <input v-model="contact.phone" class="Con-name" type="text" id="name" :placeholder="$t('Contact_name')">
                    </label>
                    <label for="info">
                        <textarea v-model="contact.info" :placeholder="$t('Contact_comment')" name="" id="info" cols="30" rows="10"></textarea>
                    </label>
                    <button class="form-btn" type="submit">
                        {{ $t('Contact_submit') }}
                    </button>
                </form>
                <div class="Contact-media">
                    <h2>
                        {{ $t('Contact_comment2') }}
                    </h2>
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                            Guliston shahar
                        </h3>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                        +937029292
                    </h3>
                    <div class="contact-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.483 19.79v-.002l.018-.043L21.5 4.625v-.048c0-.377-.14-.706-.442-.903c-.265-.173-.57-.185-.784-.169a2.681 2.681 0 0 0-.586.12a3.23 3.23 0 0 0-.24.088l-.013.005l-16.72 6.559l-.005.002a1.353 1.353 0 0 0-.149.061a2.27 2.27 0 0 0-.341.19c-.215.148-.624.496-.555 1.048c.057.458.372.748.585.899a2.062 2.062 0 0 0 .403.22l.032.014l.01.003l.007.003l2.926.985c-.01.183.008.37.057.555l1.465 5.559a1.5 1.5 0 0 0 2.834.196l2.288-2.446l3.929 3.012l.056.024c.357.156.69.205.995.164c.305-.042.547-.17.729-.315a1.742 1.742 0 0 0 .49-.635l.008-.017l.003-.006zM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.209.353c-.296.277-7.071 6.818-7.757 7.48a.278.278 0 0 0-.077.136L8.6 19.434z" clip-rule="evenodd"/></svg>
                        <a href="https://www.instagram.com/oltin_vodiy_restaurant?igsh=Y21uaW5vYTFkcHBw&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
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