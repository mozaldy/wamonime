<template>
  <v-navigation-drawer temporary v-model="drawer" :width="300" color="blue-darken-4">
    <v-list-item>
      <p class="text-h4 my-5">Wamonime</p>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="route in routes" :to="route.path" link :title="route.name"></v-list-item>
  </v-navigation-drawer>

  <v-app-bar scroll-behavior="elevate" color="blue-darken-4">
    <v-container class="d-flex align-center">
      <router-link to="/">
        <v-avatar class="me-4" color="white" size="32"></v-avatar>
      </router-link>
      <v-app-bar-title text="Wamonime" />
      <v-btn v-for="route in routes" :to="route.path" :text="route.name" class="d-none d-sm-flex" />
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="d-sm-none" />
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { routes } from '../router'
import { ref } from 'vue'

const drawer = ref(null)
</script>
