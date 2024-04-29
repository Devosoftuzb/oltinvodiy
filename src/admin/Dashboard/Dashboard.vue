<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Dashboard.css'
import { useSidebarStore } from '@/stores/saidbar.js';

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}
</script>
<template>
    <div class="Dashboard">
        <Saidbar/>
        <div class="Dashboard-content">
            <div class="header-burger">
                <button @click="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>
                </button>
            </div>
            <div class="Dashboard-header">
                <h1>
                    Bosh panel
                </h1>
            </div>
            <div class="Dashboard-main">
                <div class=" Dashboard-wrapper">
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                Gallary rasmlar 
                            </h3>
                            <span>
                                10
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/AdminGallary">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                Menu
                            </h3>
                            <span>
                                10
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/AdminGallary">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                Habarlar 
                            </h3>
                            <span>
                                10
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/AdminGallary">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>