<template>
  <v-container>
    <p class="text-h4">Top Airing Anime</p>
    <Loading v-if="isLoading" />
    <v-row v-else>
      <ListItem :items />
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import ListItem from '@/components/ListItem.vue'
import Loading from '@/components/Loading.vue'

const items = ref(null)
const isLoading = ref(true)

const fetchAnimes = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing')
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
    console.log(error)
  }
}

fetchAnimes()
</script>
