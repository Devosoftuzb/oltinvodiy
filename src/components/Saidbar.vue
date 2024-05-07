<script setup>
import '@/assets/Style/Admin/Saidbar.css'
import { useSidebarStore } from "@/stores/saidbar.js";
import { ref } from 'vue';
    const sidebar = useSidebarStore();
function burger() {
        sidebar.sidebar = !sidebar.sidebar
        modal.classList.toggle('db');
    }

const CloseModalMenu = ref(false)
const MenuClose = ()=>(CloseModalMenu.value = !CloseModalMenu.value)

import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div :class="sidebar.sidebar ? 'Saidbar' : 'Saidbar-of'" >
        <div class="saidbar-header-X">
            <button  @click="burger">
                <svg class="brclose" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
            </button>
        </div>
        <div class="Saidbar-header">
            <!-- <h1>
                Oltin Vodiy
            </h1> -->
            <img class="logo" src="/public/Oltin Vodiy3l.png" alt="">
        </div>
        <div class="Saidbar-menu">
            <ul>
                <li @click="MenuClose">
                    <router-link  to="/Admin" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                            {{ $t('Dashboard_title') }}
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/GallaryAdmin" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m10.218-21c-3.187 0-5.789-2.601-5.789-5.789c0-3.164 2.602-5.789 5.79-5.789c3.164 0 5.765 2.625 5.765 5.79c0 3.187-2.601 5.788-5.766 5.788M7.762 45.801c-2.25 0-3.633-1.36-3.633-3.657v-1.43l7.195-6.28c1.031-.914 2.156-1.383 3.211-1.383c1.125 0 2.32.469 3.352 1.43l4.5 4.03l11.18-9.937c1.171-1.031 2.46-1.5 3.773-1.5c1.289 0 2.625.492 3.75 1.524l10.78 9.984v3.61c0 2.25-1.405 3.609-3.632 3.609Z"/></svg>
                            {{ $t('Gallary_title') }}
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/MenuPDF" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg>
                            {{ $t('Menu_pdf_num') }}
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/MenuAdmin" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>
                            {{ $t('Menu_title1') }}
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/CategoryAdmin" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"/></svg>
                            {{ $t('Category_num') }}
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/HabarlarAdmin" class="Saidbar-menu-item">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H7.667L3.8 14.89a.5.5 0 0 1-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5zm4 2.497h7v1H4zm0 2.998h5v1H4z" clip-rule="evenodd"/></svg>
                            {{ $t('Contact_name_title') }}
                        </h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>