<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Dashboard.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import { reactive, onMounted } from 'vue'
import axios from "../../services/axios";

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}


const NumberOfElements = reactive({
    category:0,
    menu:0,
    category:0,
    contact:0,
    gallery:0,
    menupdf:0,
})

const getMenu = () =>{
    axios
        .get("/menu/find-all",{

        })
        .then((res)=>{
            NumberOfElements.menu = res.data.length
        })
        .catch((error)=>{
            console.log(error);
        })
}

const getGallery = () =>{
    axios
        .get("/gallery/find-all",{
        })
        .then((res)=>{
            NumberOfElements.gallery = res.data.length
        })
        .catch((error)=>{
            console.log(error);
        })
}

const getContact = () =>{
    axios
        .get('/contact/find-all',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res)=>{
            NumberOfElements.contact = res.data.length
        })
        .catch((error)=>{
            console.log(error);
        })
}
const getAllCategory = () => {
    axios
        .get("/category/find-all", {
        })
        .then((res) => {
            NumberOfElements.category = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });
};
const getPdf = () => {
    axios
        .get("/pdf-menu/find-all", {

        })
        .then((res) => {
            NumberOfElements.menupdf = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });
}
onMounted(() => {
    getPdf()
    getAllCategory()
    getMenu();
    getGallery()
    getContact()
});
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
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
                    {{ $t('Dashboard_title') }}
                </h1>
                <div class="addropdown">
                    <button class="addropbtn">Language</button>
                    <div class="addropdown-content">
                        <button @click="changeLanguages('uz')">
                            Uz
                        </button>
                        <button @click="changeLanguages('ru')">
                            Ru
                        </button>
                        <button @click="changeLanguages('eng')">
                            Eng
                        </button>
                    </div>
                </div>
            </div>
            <div class="Dashboard-main">
                <div class=" Dashboard-wrapper">
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                {{ $t('Gallaru_num') }}
                            </h3>
                            <span>
                                {{NumberOfElements.gallery}}
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/GallaryAdmin">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                {{ $t('Menu_title1') }}
                            </h3>
                            <span>
                                {{NumberOfElements.menu}}
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/MenuAdmin">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                {{ $t('Menu_pdf_num') }}
                            </h3>
                            <span>
                                {{ NumberOfElements.menupdf }}
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/MenuPDF">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                {{ $t('Category_num') }}
                            </h3>
                            <span>
                                {{ NumberOfElements.category }}
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/CategoryAdmin">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                    <div class="dashboard-card">
                        <div class="dashboard-card-grid">
                            <h3>
                                {{ $t('Contact_num') }}
                            </h3>
                            <span>
                                {{ NumberOfElements.contact }}
                            </span>
                        </div>
                        <router-link class="dashboard-card-btn" to="/HabarlarAdmin">
                            O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                        </router-link>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>