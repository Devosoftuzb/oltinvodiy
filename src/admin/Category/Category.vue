<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Category.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import { ref, reactive, onMounted } from 'vue';
import axios from '@/services/axios'


const Category = ref(false)
const oppenCategory = () => (Category.value = !Category.value)
const openChange = ref(false)
const openModalChange = () => (openChange.value = !openChange.value)
const sidebar = useSidebarStore();
function burger() {
    sidebar.sidebar = !sidebar.sidebar
    modal.classList.toggle('db');
}

const activeIndex = ref(null);

const changeBackground = (index) => {
    activeIndex.value = index;

};

const store = reactive({
    categoryAll: false,
    pagCategoryAll: [],
    pag: 0,
    lang: false
});

const category = reactive({
    name_uzb: "",
    name_rus: "",
    name_eng: "",
})

const edit = reactive({
    id: 0,
    name_uzb: "",
    name_rus: "",
    name_eng: "",
})

const deleteCategory = (id) => {
    axios
        .delete(`/category/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getAllCategory()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

const createCategory = () => {
    const data = {
        name_uzb: category.name_uzb,
        name_rus: category.name_rus,
        name_eng: category.name_eng
    };
    axios
        .post("/category/create", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            category.name_uzb = "";
            category.name_rus = "";
            category.name_eng = "";
            Category.value = false
            getAllCategory()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

const getOneCategory = (id) => {
    axios
        .get(`/category/find/${id}`, {
        })
        .then((res) => {
            edit.name_rus = res.data.name_rus
            edit.name_uzb = res.data.name_uzb
            edit.name_eng = res.data.name_eng
            openChange.value = true;
            edit.id = id
        })
        .catch((error) => {
            console.log("error", error);
        });
};

const editCategory = () => {
    const data = {
        name_rus: edit.name_rus,
        name_uzb: edit.name_uzb,
        name_eng: edit.name_eng
    }
    axios
        .put(`category/update/${edit.id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            edit.name_rus = ""
            edit.name_uzb = ""
            edit.name_eng = ""
            openChange.value = false
            getAllCategory()
            location.reload()
        })
        .catch((error) => {
            console.log("error", error);
        });
}

const getAllCategory = () => {
    axios
        .get("/category/find-all", {
        })
        .then((res) => {
            store.lang = localStorage.getItem("Lan")
            store.categoryAll = res.data
            store.categoryAll = store.categoryAll.reverse()
            store.categoryAll.sort(function (x, y) {
                return (x.status === y.status) ? 0 : x.status ? -1 : 1;
            });
            let cat = []
            for (let i in store.categoryAll) {
                cat.push(store.categoryAll[i])
                if (cat.length == 3) {
                    store.pagCategoryAll.push(cat)
                    cat = []
                }
                if ((Number(i) + 1) == store.categoryAll.length && (store.pagCategoryAll.length == 0 || cat.length > 0)) {
                    store.pagCategoryAll.push(cat)
                    cat = []
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    window.scroll(0, 0);
    getAllCategory();
})
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div class="Category">
        <Saidbar />
        <div class="Category-content">
            <div class="header-burger">
                <button @click="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>
                </button>
            </div>
            <div class="Category-header">
                <div class="Category-header-wrapper">
                    <h1>
                        {{ $t('Category_Name') }}
                    </h1>
                    <button @click="oppenCategory" class="Category-header-btn">
                        {{ $t('Category_add_btn') }}
                    </button>
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
            </div>
            <div class="Category-main">
                <div class="Category-table">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        {{ $t('Menu_title_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_change_table') }}
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                        <tbody v-for="i in store.pagCategoryAll[store.pag]" :key="i.id">
                            <tr>
                                <td>
                                    <h3 v-if="store.lang == 'uz'">
                                        {{ i.name_uzb }}
                                    </h3>
                                    <h3 v-else-if="store.lang == 'ru'">
                                        {{ i.name_rus }}
                                    </h3>
                                    <h3 v-else-if="store.lang == 'eng'">
                                        {{ i.name_eng }}
                                    </h3>
                                    <h3 v-else>
                                        {{ i.name_uzb }}
                                    </h3>
                                </td>
                                <td>
                                    <button class="delete" @click="deleteCategory(i.id)">
                                        <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                        </svg>
                                    </button>
                                    <button @click="getOneCategory(i.id)" class="edit">
                                        <svg class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="Category-footer">
                <div class="Category-footer-wrapper">
                    <button @click="store.pag == 0 ? store.pag = store.pagCategoryAll.length - 1 : store.pag -= 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                    </button>
                    <div class="Category-footer-content">
                        <span>
                            {{ store.pag + 1 }}
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            {{ store.pagCategoryAll.length }}
                        </span>
                    </div>
                    <button @click="store.pag + 1 == store.pagCategoryAll.length ? store.pag = 0 : store.pag += 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div :id="openChange ? 'openChange' : ''" class="modal-change">
            <div class="change-modal">
                <div class="change-header">
                    <h1>
                        {{ $t('Category_edit_btn') }}
                    </h1>
                    <button @click="openModalChange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="change-main">
                    <form @submit.prevent="editCategory">
                        <div class="form-grid ">
                            <label for="turrus">
                                <h3>
                                    {{ $t('Menu_add_ru_name') }}
                                </h3>
                                <input v-model="edit.name_rus" required id="turrus" type="text">
                            </label>
                            <label for="turuz">
                                <h3>
                                    {{ $t('Menu_add_uz_name') }}
                                </h3>
                                <input v-model="edit.name_uzb" required id="turuz" type="text">
                            </label>
                            <label for="tureng">
                                <h3>
                                    {{ $t('Menu_add_eng_name') }}
                                </h3>
                                <input v-model="edit.name_eng" required id="tureng" type="text">
                            </label>
                        </div>
                        <button class="submitBtn" type="submit">
                            {{ $t('Category_edit_btn') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="Category-modal-bg" :class="{ 'oppen-Category-Modal': Category }">
            <div class="Category-modal">
                <div class="Category-header">
                    <div class="Category-modal-header">
                        <h1>
                            {{ $t('Category_add_btn') }}
                        </h1>
                        <button @click="oppenCategory">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <form @submit.prevent="createCategory">
                        <div class="form-grid ">
                            <label for="turrus">
                                <h3>
                                    {{ $t('Menu_add_ru_name') }}
                                </h3>
                                <input v-model="category.name_rus" required id="turrus" type="text">
                            </label>
                            <label for="turuz">
                                <h3>
                                    {{ $t('Menu_add_uz_name') }}
                                </h3>
                                <input v-model="category.name_uzb" required id="turuz" type="text">
                            </label>
                            <label for="tureng">
                                <h3>
                                    {{ $t('Menu_add_eng_name') }}
                                </h3>
                                <input v-model="category.name_eng" required id="tureng" type="text">
                            </label>
                        </div>
                        <button class="submitBtn" type="submit">
                            {{ $t('Category_add_btn') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>