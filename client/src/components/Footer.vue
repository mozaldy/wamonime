<template>
  <v-footer color="blue-darken-4" height="200">
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
      <v-col cols="12" class="justify-center d-flex">
        <v-btn
          v-for="icon in socials"
          :key="icon.icon"
          class="mx-4"
          :icon="icon.icon"
          :href="icon.link"
          variant="text"
        />
      </v-col>

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Wamonime</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { routes } from '../router'
import socials from '../data/socials.js'
</script>
