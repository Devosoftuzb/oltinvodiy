<script setup>
import '@/assets/Style/Login.css'
</script>
<template>
    <div class="Login">
        <div class="Login-wrapper">
            <form>
                <div class="Login-logo">
                    <h1>
                        Oltin vodiy
                    </h1>
                </div>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>