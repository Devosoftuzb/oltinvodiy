 <script>
import '@/assets/Style/Menu/Hero.css'
import '@/assets/Style/Menu/Menu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { ref, reactive, onMounted } from 'vue';
import CONFIG from '../../stores/config'
import axios from '../../services/axios'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
// import gsap from 'gsap';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
        axios,
        CONFIG
    },
    setup() {

        const swiper = useSwiper();
        
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        const activeIndex = ref(null);


        const store = reactive({
            categoryAll: false,
            menuAll: false,
            menuCategory: [],
            lang: false,
        });

        const getAllCategory = () => {
            axios
                .get("/category/find-all", {
                })
                .then((res) => {
                    store.categoryAll = res.data
                    store.categoryAll = store.categoryAll.reverse()
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const category = (id) => {
            activeIndex.value = id;
            store.menuCategory = []
            for (let i in store.menuAll) {
                if (store.menuAll[i].category_id == id) {
                    store.menuCategory.push(store.menuAll[i])
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
                    store.menuCategory = store.menuAll
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
            store.pdf = res.data
        })
        .catch((error) => {
            console.log(error);
        });
}
        onMounted(() => {
            getPdf()
            category();
            getAllCategory();
            getAllMenu()
        })


        return {
            getPdf,
            CONFIG,
            category,
            getAllMenu,
            getAllCategory,
            store,
            activeIndex,
            onSwiper,
            onSlideChange,
            swiper,
            modules: [Navigation, Pagination, A11y, Autoplay]
        };
    }
}


</script>
<template>
    <section class="Menu-Hero">
        <div class="container Menu-hero-wrapper">
            <div class="Menu-hero-shadow">

            </div>
            <h1 ref="Menu_title">
                {{ $t('Menu_title1') }}
            </h1>
        </div>
    </section>
    <section class="Menu-list">
        <div class="container">
            <div class="Menu-list-header">
                <button @click="category(i.id)" :class="{ active: activeIndex === i.id }" v-for="i in store.categoryAll" :key="i.id">
                    <span v-if="store.lang == 'uz'">{{ i.name_uzb }}</span>
                    <span v-else-if="store.lang == 'ru'">{{ i.name_rus }}</span>
                    <span v-else-if="store.lang == 'eng'">{{ i.name_eng }}</span>
                    <span v-else>{{ i.name_uzb }}</span>
                  </button>
            </div>
            <div class="Menu-swiper">
                <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="1" :space-between="50"
                    navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                    @slideChange="onSlideChange" :autoplay="{ delay: 3000 }">
                    <swiper-slide v-for="i in store.menuCategory" :key="i.id">
                        <div class="Menu-swiper-card">
                            <img :src="CONFIG.API_URL + i.image" alt="">
                            <div class="Menu-swiper-card-grid">
                                <h2 v-if="store.lang == 'uz'">
                                    {{ i.title_uzb }}
                                </h2>
                                <h2 v-else-if="store.lang == 'ru'">
                                    {{ i.title_rus }}
                                </h2>
                                <h2 v-else-if="store.lang == 'eng'">
                                    {{ i.title_eng }}
                                </h2>
                                <h2 v-else>
                                    {{ i.title_uzb }}
                                </h2>
                                <div class="Menu-card-line">

                                </div>
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
                                <span>
                                    {{ i.price }} so`m
                                </span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <section class="All-Menu">
        <div class="container">
            <h1 class="All-Menu-title">
                {{ $t('Menu_title2') }}
            </h1>
            <div class="All-menu-wrapper">
                <a v-for="i in store.pdf" :key="i.id" :href="i.pdf" download="" target="_blank" rel="noopener noreferrer">
                    {{ $t('Menu_btn2') }}
                </a>
            </div>
        </div>
    </section>
</template>