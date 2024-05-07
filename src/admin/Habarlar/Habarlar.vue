<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Habarlar.css'
import { onMounted, reactive } from "vue";
import axios from "@/services/axios";
import { useSidebarStore } from '@/stores/saidbar.js';

const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}


const store = reactive({
    contactAll: false,
    pagContactAll: [],
    pag: 0,
});

const getAllContact = () => {
    axios
        .get("/contact/find-all", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((res) => {
            store.contactAll = res.data
            store.contactAll = store.contactAll.reverse()
            let contact = []
            for (let i in store.contactAll) {
                contact.push(store.contactAll[i])
                if (contact.length == 5) {
                    store.pagContactAll.push(contact)
                    contact = []
                }
                if ((Number(i) + 1) == store.contactAll.length && (store.pagContactAll.length == 0 || contact.length > 0)) {
                    store.pagContactAll.push(contact)
                    contact = []
                }
            }
        })
        .catch((error) => {
            store.error = true;
        });
};

const deleteContact = (id) => {
    axios
        .delete(`/contact/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getAllContact()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

onMounted(() => {
    getAllContact();
});
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div class="HabarlarAdmin">
        <Saidbar/>
        <div class="HabarlarAdmin-content">
            <div class="HabarlarAdmin-header">
                <div class="header-burger">
                    <button @click="burger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                        </svg>
                    </button>
                </div>
                <h1>
                    {{ $t('ContactPg_title') }}
                </h1>
            </div>
            <div class="HabarlarAdmin-main">
                <div class="HabarlarAdmin-table">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        {{ $t('Contact_name') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_info_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_change_table') }}
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                         <tbody >
                            <tr v-for="i in store.pagContactAll[store.pag]" :key="i.id">
                                <td>
                                    <h3>
                                        {{ i.phone }}
                                    </h3>
                                </td>
                                    <td>
                                        <p>
                                            {{ i.info }}
                                        </p>
                                    </td>
                                    <td>
                                        <button class="delete" @click="deleteContact(i.id)">
                                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                            </svg>
                                        </button>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="HabarlarAdmin-footer">
                <div class="HabarlarAdmin-footer-wrapper">
                    <button @click="store.pag == 0 ? store.pag = store.pagContactAll.length - 1  : store.pag -= 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                    </button>
                    <div class="HabarlarAdmin-footer-content">
                        <span>
                            {{ store.pagContactAll.length == 0 ? store.pag : store.pag + 1 }}
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            {{ store.pagContactAll.length }}
                        </span>
                    </div>
                    <button @click="store.pag + 1 == store.pagContactAll.length ? store.pag = 0 : store.pag += 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>