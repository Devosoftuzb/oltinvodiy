<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Gallary.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import axios from "@/services/axios";
import { onMounted, reactive, ref } from "vue";
import CONFIG from '../../stores/config'

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}
const store = reactive({
    gallery: false
})

const getImg = ref(null);
const setImg = (e) => {
    getImg.value = e.target.files[0];
    const data = {
        image: getImg.value,
    };

    const formData = new FormData();
    for (let i of Object.keys(data)) {
        formData.append(i, data[i]);
    }

    axios
        .post("/gallery/create", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getAllGallery()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        })
};



const deleteGallery = (id) => {
    axios
        .delete(`/gallery/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
    .then((res) => {
        getAllGallery()
        location.reload()
    })
        .catch((error) => {
            console.log(error);
        });
}

const getAllGallery = () => {
    axios
        .get("/gallery/find-all", {

        })
        .then((res) => {
            store.gallery = res.data
        })
        .catch((error) => {
            console.log(error);
        });
}
onMounted(() => {
    getAllGallery();
});
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div class="GallaryAdmin">
        <Saidbar />
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
                    {{ $t('Gallary_title') }}
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
            <div class="GallaryAdmin-main">
                <div class="GallaryAdmin-wrapper">
                    <div class="file-upload">
                        <input @change="(e) => setImg(e)" accept="image/*" type="file" id="fileInput">
                        <label for="fileInput" class="file-label">
                            <div class="file-icon">+</div>
                            <h3 class="file-text"> {{ $t('Gallary_span') }}</h3>
                        </label>
                    </div>
                    <div class="GallaryAdmin-wrapper-card" v-for="i in store.gallery" :key="i.id">
                        <div class="gallary_bg">
                            <button @click="deleteGallery(i.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
                                </svg>
                            </button>
                        </div>
                        <img :src="CONFIG.API_URL + i.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>