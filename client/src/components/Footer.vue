<template>
  <v-footer color="blue-darken-4" height="300">
    <v-row justify="center">
      <v-btn
        v-for="route in routes"
        :key="route.name"
        :text="route.name"
        :to="route.path"
        color="white"
        variant="text"
        rounded="xl"
      />

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Wamonime</strong>
      </v-col>
      <Socials />
    </v-row>
  </v-footer>
</template>

<script setup>
import { routes } from '../router'
import Socials from './Socials.vue'
</script>
