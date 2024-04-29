<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Gallary.css'
import { useSidebarStore } from '@/stores/saidbar.js';

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}
</script>
<template>
    <div class="GallaryAdmin">
        <Saidbar/>
        <div class="GallaryAdmin-content">
            <div class="GallaryAdmin-header">
                <div class="header-burger">
                    <button @click="burger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                        </svg>
                    </button>
                </div>
                <h1>
                    Gallary
                </h1>
            </div>
            <div class="GallaryAdmin-main">
                <div class="GallaryAdmin-wrapper">
                    <div class="file-upload">
                        <input type="file" id="fileInput">
                        <label for="fileInput" class="file-label">
                          <div class="file-icon">+</div>
                          <h3 class="file-text">Faylni tanlang</h3>
                        </label>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>