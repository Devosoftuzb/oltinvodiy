<script setup>
import '@/assets/Style/Error.css'
</script>
<template>
    <dir class="Error">
        <div class="Error-wrapper">
            <h1>
                404
            </h1>
            <h2>
                
                {{ $t('Erorr_title') }}
            </h2>
            <router-link  to="/" class="Error-btn">
                
                {{ $t('Erorr_btn') }}
            </router-link>
        </div>
    </dir>
</template>