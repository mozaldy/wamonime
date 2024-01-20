<template>
  <v-app-bar elevation="2" scroll-behavior="hide" scroll-threshold="100" color="blue-darken-4">
    <v-container class="d-flex align-center">
      <router-link to="/">
        <v-avatar class="me-4" color="white" size="32"></v-avatar>
      </router-link>
      <v-app-bar-title text="Wamonime" />
      <v-btn v-for="route in routes" :to="route.path" :text="route.name" />
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { routes } from '../router'
</script>
