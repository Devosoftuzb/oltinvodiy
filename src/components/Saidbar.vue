<script setup>
import '@/assets/Style/Admin/Saidbar.css'
import { useSidebarStore } from "@/stores/saidbar.js";
    const sidebar = useSidebarStore();
function burger() {
        sidebar.sidebar = !sidebar.sidebar
        modal.classList.toggle('db');
    }
</script>
<template>
    <div :class="sidebar.sidebar ? 'Saidbar' : 'Saidbar-of'" >
        <div class="saidbar-header-X">
            <button  @click="burger">
                <svg class="brclose" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
            </button>
        </div>
        <div class="Saidbar-header">
            <h1>
                Oltin Vodiy
            </h1>
        </div>
        <div class="Saidbar-menu">
            <ul>
                <li>
                    <router-link  to="/Admin" class="Saidbar-menu-item">
                        <h3>
                            Bosh panel
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/GallaryAdmin" class="Saidbar-menu-item">
                        <h3>
                            Gallary
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/MenuAdmin" class="Saidbar-menu-item">
                        <h3>
                            Menu
                        </h3>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/HabarlarAdmin" class="Saidbar-menu-item">
                        <h3>
                            Habarlar
                        </h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>