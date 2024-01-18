<template>
  <v-app-bar color="blue-darken-4">
    <v-container class="d-flex align-center">
      <v-avatar class="me-4" color="white" size="32"></v-avatar>
      <v-app-bar-title text="Wamonime" />

      <v-btn v-for="route in routes" :to="route.path" :text="route.name" />
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { routes } from '../router'
</script>
