<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Pdf.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import axios from "@/services/axios";
import { onMounted, reactive, ref } from "vue";

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}

const store = reactive({
    pdf: false,
    id: false
})

const getImg = ref(null);
const setImg = (e) => {
    getImg.value = e.target.files[0];
    console.log(getImg.value);
    const data = {
        pdf: getImg.value,
    };

    const formData = new FormData();
    for (let i of Object.keys(data)) {
        formData.append(i, data[i]);
    }

    axios
        .post("/pdf-menu/create", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            console.log("post");
            getPdf()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        })
};


const deletePdf = (id) => {
    axios
        .delete(`/pdf-menu/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getPdf()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

const getPdf = () => {
    axios
        .get("/pdf-menu/find-all", {

        })
        .then((res) => {
            store.pdf = res.data
            store.id = store.pdf[0].id
            console.log(store.pdf);
        })
        .catch((error) => {
            console.log(error);
        });
}
onMounted(() => {
    getPdf();
})
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div class="PdfAdmin">
        <Saidbar />
        <div class="PdfAdmin-content">
            <div class="PdfAdmin-header">
                <div class="header-burger">
                    <button @click="burger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                        </svg>
                    </button>
                </div>
                <h1>
                    {{ $t('Menu_pdf_title') }}
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
            <div class="PdfAdmin-main">
                <div class="PdfAdmin-wrapper">
                    <div v-if="store.pdf.length == 0" class="file-upload">
                        <input @change="(e) => setImg(e)" accept="application/pdf" type="file" id="fileInput">
                        <label for="fileInput" class="file-label">
                            <div class="file-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="m9.5 1.1l3.4 3.5l.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7zM9 2v3h2.9zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3z"
                                        clip-rule="evenodd" />
                                </svg></div>
                            <h3 class="file-text">Faylni tanlang</h3>
                        </label>
                    </div>
                    <div v-if="store.pdf.length !== 0" class="pdf-check">
                        <div class="pdf-bg">
                            <button @click="deletePdf(store.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
                                </svg>
                            </button>
                        </div>
                        <h1>
                            {{ $t('Menu_pdf_span') }}
                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                            </svg>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>