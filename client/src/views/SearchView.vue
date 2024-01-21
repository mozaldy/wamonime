<template>
  <v-app>
    <v-container>
      <p class="text-h4">
        Search result for "<span class="font-weight-bold">{{ query }}</span
        >"
      </p>
      <Loading v-if="isLoading" />
      <v-row v-else>
        <ListItem :items />
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Loading from '@/components/Loading.vue'
import ListItem from '@/components/ListItem.vue'

const route = useRoute()
const query = ref(route.params.q)
const isLoading = ref(true)
const items = ref([])

const fetchData = async (q) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime', {
      params: {
        q,
        sfw: true
      }
    })
    items.value = response.data.data.map((entry) => ({
      id: entry.mal_id,
      title: entry.title,
      media_type: entry.type,
      episode: entry.episodes,
      score: entry.score,
      members: entry.members,
      synopsis: entry.synopsis,
      img_src: entry.images.webp.large_image_url,
      content: 'anime'
    }))
    isLoading.value = false
  } catch (error) {
    console.log('Error fetching APIs!')
  }
}

fetchData(query.value)
</script>
