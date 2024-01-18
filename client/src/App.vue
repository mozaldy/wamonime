<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <router-view v-slot="{ Component }">
          <v-expand-transition mode="out-in">
            <component :is="Component" />
          </v-expand-transition>
        </router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
