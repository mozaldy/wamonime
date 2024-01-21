<template>
  <v-card class="my-5 mx-auto" max-width="344">
    <router-link :to="`/${content}/${id}`">
      <v-img :src="img_src" height="300px" cover draggable="false" />
    </router-link>

    <router-link
      class="text-decoration-none font-weight-bold text-blue-darken-4"
      :to="`/${content}/${id}`"
    >
      <v-card-title v-if="title !== ''"> {{ title || '-' }}</v-card-title>
    </router-link>

    <v-card-subtitle> {{ media_type }} ({{ episode }} eps)</v-card-subtitle>
    <v-card-subtitle> Score: {{ score }}</v-card-subtitle>
    <v-card-subtitle> Members: {{ members }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Synopsis </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ synopsis }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const props = defineProps([
  'title',
  'media_type',
  'episode',
  'score',
  'members',
  'img_src',
  'synopsis',
  'id',
  'content'
])
</script>
