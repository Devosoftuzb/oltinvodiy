<script setup>
import '@/assets/Style/Login.css'
import { reactive } from "vue";
import axios from "@/services/axios";
import router from "@/router";

const login = reactive({
  email: "",
  password: "",
});

const loginAdmin = () => {
  const data = {
    email: login.email,
    password: login.password
  };
  axios
    .post("/admins/login", data, {
    })
    .then((res) => {
      console.log(res.data.tokens.refresh_token)
      login.email = "";
      login.password = "";
      localStorage.setItem('token' , res.data.tokens.refresh_token)
      router.push('/admin')
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
    <div class="Login">
        <div class="Login-wrapper">
            <form @submit.prevent="loginAdmin">
                <div class="Login-logo">
                  <img   src="/public/header-logo.png" alt="">
                </div>
                <input v-model="login.email" type="email" placeholder="Email" required>
                <input v-model="login.password" type="password" placeholder="Password" required>
                <button type="submit">
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>