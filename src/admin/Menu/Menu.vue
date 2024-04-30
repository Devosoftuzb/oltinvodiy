<script setup>
import Saidbar from "../../components/Saidbar.vue"
import '@/assets/Style/Admin/Menu.css'
import { useSidebarStore } from '@/stores/saidbar.js';
import { ref, onMounted } from 'vue';


const Category = ref(false)
const oppenCategory = () => (Category.value =!Category.value)
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
onMounted(()=>{
    window.scroll(0,0);
})
</script>
<template>
    <div class="MenuAdmin">
        <Saidbar/>
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
                        Menu
                    </h1>
                    <button @click="oppenModal" class="MenuAdmin-header-btn">
                        Qo'shish
                    </button>
                    <button @click="oppenCategory" class="MenuAdmin-header-btn">
                        Turkum Qo`shish
                    </button>
                </div>
            </div>
            <div class="MenuAdmin-main">
                <div class="MenuAdmin-nav">
                    <span @click="changeBackground(null)" :class="{ active: activeIndex === null }">
                        Milliy taomlar
                    </span>
                    <span @click="changeBackground(1)" :class="{ active: activeIndex === 1 }">
                        Xorijiy taomlar
                    </span>
                    <span @click="changeBackground(2)" :class="{ active: activeIndex === 2 }">
                        Salatlar
                    </span>
                    <span @click="changeBackground(3)" :class="{ active: activeIndex === 3 }">
                        Ichimlik
                    </span>
                </div>
                <div class="MenuAdmin-table">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        Rasm
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Nom
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Ma `lumot
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Narx
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Sozlamalar
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                         <tbody>
                            <tr>
                                <td>
                                    <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="foto">
                                </td>
                                <td>
                                    <h3>
                                        Sho`rva
                                    </h3>
                                </td>
                                    <td>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, cupiditate ipsam? Unde obcaecati voluptate illum eaque placeat doloribus perspiciatis id.
                                        </p>
                                    </td>
                                    <td>
                                        <h3>
                                            20000 s`om
                                        </h3>
                                    </td>
                                    <td>
                                        <button class="delete">
                                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                            </svg>
                                        </button>
                                        <button @click="openModalChange"  class="edit">
                                            <svg class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                            </svg>
                                        </button>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="foto">
                                </td>
                                <td>
                                    <h3>
                                        Sho`rva
                                    </h3>
                                </td>
                                    <td>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, cupiditate ipsam? Unde obcaecati voluptate illum eaque placeat doloribus perspiciatis id.
                                        </p>
                                    </td>
                                    <td>
                                        <h3>
                                            20000 s`om
                                        </h3>
                                    </td>
                                    <td>
                                        <button class="delete">
                                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                            </svg>
                                        </button>
                                        <button  class="edit">
                                            <svg class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                            </svg>
                                        </button>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://frndsdubai.com/wp-content/uploads/2022/12/F.R.N.D.S.-Cafe_Tape-Agency_043_30.11.2022-scaled.jpg" alt="foto">
                                </td>
                                <td>
                                    <h3>
                                        Sho`rva
                                    </h3>
                                </td>
                                    <td>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, cupiditate ipsam? Unde obcaecati voluptate illum eaque placeat doloribus perspiciatis id.
                                        </p>
                                    </td>
                                    <td>
                                        <h3>
                                            20000 s`om
                                        </h3>
                                    </td>
                                    <td>
                                        <button class="delete">
                                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                            </svg>
                                        </button>
                                        <button  class="edit">
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
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                    </button>
                    <div class="MenuAdmin-footer-content">
                        <span>
                            1
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            2
                        </span>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div  :id="modal ? 'openModal' : ''" class="create-modal-bg">
            <div class="create-modal">
                <div class="create-modal-header">
                    <h1>
                        Menu qo`shish
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
                    <form >
                        <div class="form-grid form-name">
                            <label for="fio">
                                <h3>
                                    Nom Russ
                                </h3>
                                <input  required id="fio" type="text">
                            </label>
                            <label for="fio">
                                <h3>
                                    Nom Uzb
                                </h3>
                                <input  required id="fio" type="text">
                            </label>
                        </div>
                        <div class="form-grid">
                            <label for="raqam">
                                <h3>
                                    Narx
                                </h3>
                                <input  class="inp-number" required id="raqam" type="number">
                            </label>
                            <div class="modal-foto">
                                <h3>
                                    Rasm qoish
                                </h3>
                                <label class="file-input-container" for="foto">
                                    <span>
                                        Rasm tanglang
                                    </span>
                                    <input type="file" >
                                </label>
                            </div>
                        </div>
                        <div class="form-grid necessary">
                            <label for="textrus">
                                <h3>
                                    Malumot Russ
                                </h3>
                                <textarea  class="teacher-info" name="" id="textrus" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="textuzb">
                                <h3>
                                    Malumot Uzb
                                </h3>
                                <textarea  class="teacher-info" name="" id="textuzb" cols=""
                                    rows=""></textarea>
                            </label>
                        </div>
                        <div class="modal-footer">
                            <button class="submitBtn" type="submit">
                                Menu qoshish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div  :id="openChange ? 'openChange' : ''" class="modal-change">
            <div class="change-modal">
                <div class="change-header">
                    <h1>
                        Menu O`zgartirish
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
                    <form >
                        <div class="form-grid form-name">
                            <label for="fio">
                                <h3>
                                    Nom Russ
                                </h3>
                                <input  required id="fio" type="text">
                            </label>
                            <label for="fio">
                                <h3>
                                    Nom Uzb
                                </h3>
                                <input  required id="fio" type="text">
                            </label>
                        </div>
                        <div class="form-grid">
                            <label for="raqam">
                                <h3>
                                    Narx
                                </h3>
                                <input  class="inp-number" required id="raqam" type="number">
                            </label>
                            <div class="modal-foto">
                                <h3>
                                    Rasm qoish
                                </h3>
                                <label class="file-input-container" for="foto">
                                    <span>
                                        Rasm tanglang
                                    </span>
                                    <input type="file" >
                                </label>
                            </div>
                        </div>
                        <div class="form-grid necessary">
                            <label for="textrus">
                                <h3>
                                    Malumot Russ
                                </h3>
                                <textarea  class="teacher-info" name="" id="textrus" cols=""
                                    rows=""></textarea>
                            </label>
                            <label for="textuzb">
                                <h3>
                                    Malumot Uzb
                                </h3>
                                <textarea  class="teacher-info" name="" id="textuzb" cols=""
                                    rows=""></textarea>
                            </label>
                        </div>
                        <div class="modal-footer">
                            <button class="submitBtn" type="submit">
                                Menu O`zgartirish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="Category-modal-bg" :class="{'oppen-Category-Modal': Category}">
            <div class="Category-modal">
                <div class="Category-header">
                    <div class="Category-modal-header">
                        <h1>
                            Turkum qo`shish
                        </h1>
                        <button @click="oppenCategory">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <form>
                        <div class="form-grid ">
                            <label for="turrus">
                                <h3>
                                    Nom Russ
                                </h3>
                                <input  required id="turrus" type="text">
                            </label>
                            <label for="turuz">
                                <h3>
                                    Nom Uzb
                                </h3>
                                <input  required id="turuz" type="text">
                            </label>
                        </div>
                        <button class="submitBtn" type="submit">
                            Menu qoshish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>