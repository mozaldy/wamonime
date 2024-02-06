<template>
  <v-card class="my-5 mx-auto">
    <router-link :to="`/${content}/${id}`">
      <v-img :src="img_src" :height="height" cover draggable="false" />
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
      <router-link
        class="d-flex align-center text-decoration-none w-100 justify-space-between"
        :to="`/${content}/${id}`"
      >
        <v-btn color="blue-darken-1" variant="text"> Find out more! </v-btn>

        <v-btn icon="mdi-arrow-right"></v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { computed } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const height = computed(() => {
  switch (name.value) {
    case 'xs':
      return 400
    case 'sm':
      return 300
    case 'md':
      return 300
    case 'lg':
      return 400
    case 'xl':
      return 800
    default:
      return 800
  }
})
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
