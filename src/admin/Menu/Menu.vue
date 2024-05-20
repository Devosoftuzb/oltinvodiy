<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Menu.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import { ref, reactive, onMounted } from 'vue';
import axios from '@/services/axios'
import CONFIG from '../../stores/config'
import '@/assets/Style/Menu/Menu.css'



const Category = ref(false)
const oppenCategory = () => (Category.value = !Category.value)
const modal = ref(false)
const oppenModal = () => (modal.value = !modal.value)
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

const getImg = ref(null);
const setImg = (e) => {
    getImg.value = e.target.files[0];
    console.log(getImg.value);
};

const store = reactive({
    categoryAll: false,
    menuAll: false,
    pagMenuAll: [],
    pag: 0,
    menuCategory: [],
    lang: false
});

const menu = reactive({
    title_uzb: "",
    title_rus: "",
    title_eng: "",
    body_uzb: "",
    body_rus: "",
    body_eng: "",
    price: "",
    category_id: 0,
})
const edit = reactive({
    id: 0,
    title_uzb: "",
    title_rus: "",
    title_eng: "",
    body_uzb: "",
    body_rus: "",
    body_eng: "",
    price: "",
});

const deleteMenu = (id) => {
    axios
        .delete(`/menu/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getAllMenu()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

const getOneMenu = (id) => {
    axios
        .get(`/menu/find/${id}`, {
        })
        .then((res) => {
            getImg.value = res.data.image
            edit.title_uzb = res.data.title_uzb;
            edit.title_rus = res.data.title_rus
            edit.title_eng = res.data.title_eng
            edit.body_uzb = res.data.body_uzb
            edit.body_rus = res.data.body_rus
            edit.body_eng = res.data.body_eng
            edit.price = res.data.price
            edit.category_id = res.data.category_id
            edit.id = id
            openChange.value = true;
        })
        .catch((error) => {
            console.log("error", error);
        });
};

const editmenu = () => {
    for (let i in store.categoryAll) {
        if (store.categoryAll[i].name_uzb == menu.category_id) {
            menu.category_id = store.categoryAll[i].id
        }
    }
    const data = {
        image: getImg.value,
        title_uzb: edit.title_uzb,
        title_rus: edit.title_rus,
        title_eng: edit.title_eng,
        body_uzb: edit.body_uzb,
        body_rus: edit.body_rus,
        body_eng: edit.body_eng,
        price: edit.price,
        category_id: edit.category_id
    };

    const formData = new FormData();
    for (let i of Object.keys(data)) {
        formData.append(i, data[i]);
    }

    axios
        .put(`/menu/update/${edit.id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            edit.title_uzb = ""
            edit.title_rus = ""
            edit.title_eng = ""
            edit.body_uzb = ""
            edit.body_rus = ""
            edit.body_eng = ""
            edit.price = ""
            openChange.value = false
            getAllMenu()
            location.reload()
        })
        .catch((error) => {
            console.log("error", error);
        });
};

const createMenu = () => {
    const data = {
        image: getImg.value,
        title_uzb: menu.title_uzb,
        title_rus: menu.title_rus,
        title_eng: menu.title_eng,
        body_uzb: menu.body_uzb,
        body_rus: menu.body_rus,
        body_eng: menu.body_eng,
        price: menu.price,
        category_id: menu.category_id
    };

    const formData = new FormData();
    for (let i of Object.keys(data)) {
        formData.append(i, data[i]);
    }


    axios
        .post("/menu/create", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            menu.title_uzb = "";
            menu.title_rus = "";
            menu.title_eng = "";
            menu.body_uzb = "";
            menu.body_rus = "";
            menu.body_eng = "";
            menu.price = String("");
            modal.value = false
            getAllMenu()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

const getAllCategory = () => {
    axios
        .get("/category/find-all", {
        })
        .then((res) => {
            store.categoryAll = res.data
            store.categoryAll = store.categoryAll.reverse()
            let cat = []
        })
        .catch((error) => {
            console.log(error);
        });
};

const category = (id) => {
    store.pagMenuAll = []
    store.menuCategory = []
    activeIndex.value = id;
            store.menuCategory = []
            for (let i in store.menuAll) {
                if (store.menuAll[i].category_id == id) {
                    store.menuCategory.push(store.menuAll[i])
                }
            }
    let Menu = []
    if (store.menuCategory) {
        for (let i in store.menuCategory) {
            Menu.push(store.menuCategory[i])
            if (Menu.length == 3) {
                store.pagMenuAll.push(Menu)
                Menu = []
            }
            if ((Number(i) + 1) == store.menuCategory.length && (store.pagMenuAll.length == 0 || Menu.length > 0)) {
                store.pagMenuAll.push(Menu)
                Menu = []
            }
        }
    }

}

const getAllMenu = () => {
    axios
        .get("/menu/find-all", {
        })
        .then((res) => {
            store.lang = localStorage.getItem('Lan')
            store.menuAll = res.data
            store.menuAll = store.menuAll.reverse()
            store.menuAll.sort(function (x, y) {
                return (x.status === y.status) ? 0 : x.status ? -1 : 1;
            });
            let Menu = []
            for (let i in store.menuAll) {
                Menu.push(store.menuAll[i])
                if (Menu.length == 3) {
                    store.pagMenuAll.push(Menu)
                    Menu = []
                }
                if ((Number(i) + 1) == store.menuAll.length && (store.pagMenuAll.length == 0 || Menu.length > 0)) {
                    store.pagMenuAll.push(Menu)
                    Menu = []
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    window.scroll(0, 0);
    category();
    getAllCategory();
    getAllMenu()
})
import { useChangeLanguage } from '@/stores/language';
const { changeLanguage } = useChangeLanguage();
const changeLanguages = (lang) => {
    changeLanguage(lang);
    location.reload()
};
</script>
<template>
    <div class="MenuAdmin">
        <Saidbar />
        <div class="MenuAdmin-content">
            <div class="header-burger">
                <button @click="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>
                </button>
            </div>
            <div class="MenuAdmin-header">
                <div class="MenuAdmin-header-wrapper">
                    <h1>
                        {{ $t('Menu_title1') }}
                    </h1>
                    <button @click="oppenModal" class="MenuAdmin-header-btn">
                        {{ $t('Menu_add_btn') }}
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
            <div class="MenuAdmin-main">
                <div class="Menu-list-header">
                    <button @click="category(i.id)" :class="{ active: activeIndex === i.id }" v-for="i in store.categoryAll" :key="i.id">
                        <span v-if="store.lang == 'uz'">{{ i.name_uzb }}</span>
                        <span v-else-if="store.lang == 'ru'">{{ i.name_rus }}</span>
                        <span v-else-if="store.lang == 'eng'">{{ i.name_eng }}</span>
                        <span v-else>{{ i.name_uzb }}</span>
                      </button>
                </div>
                <div class="MenuAdmin-table">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        {{ $t('Menu_foto_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_title_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_info_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_price_table') }}
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        {{ $t('Menu_change_table') }}
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                        <tbody v-for="i in store.pagMenuAll[store.pag]" :key="i.id">
                            <tr>
                                <td>
                                    <img :src="CONFIG.API_URL + i.image" alt="foto">
                                </td>
                                <td>
                                    <h3 v-if="store.lang == 'uz'">
                                        {{ i.title_uzb }}
                                    </h3>
                                    <h3 v-else-if="store.lang == 'ru'">
                                        {{ i.title_rus }}
                                    </h3>
                                    <h3 v-else-if="store.lang == 'eng'">
                                        {{ i.title_eng }}
                                    </h3>
                                    <h3 v-else>
                                        {{ i.title_uzb }}
                                    </h3>
                                </td>
                                <td>
                                    <p v-if="store.lang == 'uz'">
                                        {{ i.body_uzb }}
                                    </p>
                                    <p v-else-if="store.lang == 'ru'">
                                        {{ i.body_rus }}
                                    </p>
                                    <p v-else-if="store.lang == 'eng'">
                                        {{ i.body_eng }}
                                    </p>
                                    <p v-else>
                                        {{ i.body_uzb }}
                                    </p>
                                </td>
                                <td>
                                    <h3>
                                        {{ i.price }} so`m
                                    </h3>
                                </td>
                                <td>
                                    <button class="delete" @click="deleteMenu(i.id)">
                                        <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                        </svg>
                                    </button>
                                    <button @click="getOneMenu(i.id)" class="edit">
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
            <div class="MenuAdmin-footer">
                <div class="MenuAdmin-footer-wrapper">
                    <button @click="store.pag == 0 ? store.pag = store.pagMenuAll.length - 1 : store.pag -= 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                    </button>
                    <div class="MenuAdmin-footer-content">
                        <span>
                            {{ store.pag + 1 }}
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            {{ store.pagMenuAll.length }}
                        </span>
                    </div>
                    <button @click="store.pag + 1 == store.pagMenuAll.length ? store.pag = 0 : store.pag += 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div :id="modal ? 'openModal' : ''" class="create-modal-bg">
            <div class="create-modal">
                <div class="create-modal-header">
                    <h1>
                        {{ $t('Menu_add_btn_modal') }}
                    </h1>
                    <button @click="oppenModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="create-modal-main">
                    <form @submit.prevent="createMenu">
                        <div class="form-grid form-name">
                            <label for="fioru">
                                <h3>
                                    {{ $t('Menu_add_ru_name') }}
                                </h3>
                                <input v-model="menu.title_rus" required id="fioru" type="text">
                            </label>
                            <label for="fiouz">
                                <h3>
                                    {{ $t('Menu_add_uz_name') }}
                                </h3>
                                <input v-model="menu.title_uzb" required id="fiouz" type="text">
                            </label>
                            <label for="fioeng">
                                <h3>
                                    {{ $t('Menu_add_eng_name') }}
                                </h3>
                                <input v-model="menu.title_eng" required id="fioeng" type="text">
                            </label>
                        </div>
                        <div class="form-grid">
                            <label for="raqam">
                                <h3>
                                    {{ $t('Menu_price_table') }}
                                </h3>
                                <input v-model="menu.price" class="inp-number" required id="raqam" type="number">
                            </label>
                            <div class="modal-foto">
                                <h3>
                                    {{ $t('Menu_add_img') }}
                                </h3>
                                <label class="file-input-container" for="foto">
                                    <span>
                                        {{ $t('Menu_add_img2') }}
                                    </span>
                                    <input @change="(e) => setImg(e)" accept="image/*" type="file">
                                </label>
                            </div>
                        </div>
                        <div class="form-grid necessary">
                            <label for="textrus">
                                <h3>
                                    {{ $t('Menu_add_info_ru') }}
                                </h3>
                                <textarea v-model="menu.body_rus" class="menu-info" name="" id="textrus" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="textuzb">
                                <h3>
                                    {{ $t('Menu_add_info_uz') }}
                                </h3>
                                <textarea v-model="menu.body_uzb" class="menu-info" name="" id="textuzb" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="texteng">
                                <h3>
                                    {{ $t('Menu_add_info_eng') }}
                                </h3>
                                <textarea v-model="menu.body_eng" class="menu-info" name="" id="texteng" cols=""
                                    rows=""></textarea>
                            </label>
                        </div>
                        <div class="modal-footer">
                            <select v-model="menu.category_id">
                                <option :value="i.id" v-for="i in store.categoryAll" :key="i.id">
                                    {{ i.name_uzb }}
                                </option>
                            </select>
                            <button class="submitBtn" type="submit">
                                {{ $t('Menu_add_btn_modal') }}
                            </button>
                        </div>
                    </form>
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
                    <form @submit.prevent="editmenu">
                        <div class="form-grid form-name">
                            <label for="fioru">
                                <h3>
                                    {{ $t('Menu_add_ru_name') }}
                                </h3>
                                <input v-model="edit.title_rus" required id="fioru" type="text">
                            </label>
                            <label for="fiouz">
                                <h3>
                                    {{ $t('Menu_add_uz_name') }}
                                </h3>
                                <input v-model="edit.title_uzb" required id="fiouz" type="text">
                            </label>
                            <label for="fioeng">
                                <h3>
                                    {{ $t('Menu_add_eng_name') }}
                                </h3>
                                <input v-model="edit.title_eng" required id="fioeng" type="text">
                            </label>
                        </div>
                        <div class="form-grid">
                            <label for="raqam">
                                <h3>
                                    {{ $t('Menu_price_table') }}
                                </h3>
                                <input v-model="edit.price" class="inp-number" required id="raqam" type="number">
                            </label>
                            <div class="modal-foto">
                                <h3>
                                    {{ $t('Menu_add_img') }}
                                </h3>
                                <label class="file-input-container" for="foto">
                                    <span>
                                        {{ $t('Menu_add_img2') }}
                                    </span>
                                    <input @change="(e) => setImg(e)" accept="image/*" type="file">
                                </label>
                            </div>
                        </div>
                        <div class="form-grid necessary">
                            <label for="textrus">
                                <h3>
                                    {{ $t('Menu_add_info_ru') }}
                                </h3>
                                <textarea v-model="edit.body_rus" class="menu-info" name="" id="textrus" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="textuzb">
                                <h3>
                                    {{ $t('Menu_add_info_uz') }}
                                </h3>
                                <textarea v-model="edit.body_uzb" class="menu-info" name="" id="textuzb" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="texteng">
                                <h3>
                                    {{ $t('Menu_add_info_eng') }}
                                </h3>
                                <textarea v-model="edit.body_eng" class="menu-info" name="" id="texteng" cols=""
                                    rows=""></textarea>
                            </label>
                        </div>
                        <div class="modal-footer">
                            <select v-model="edit.category_id">
                                <option v-for="i in store.categoryAll" :key="i.id">
                                    {{ i.name_uzb }}
                                </option>
                            </select>
                            <button class="submitBtn" type="submit">
                                {{ $t('Category_edit_btn') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>