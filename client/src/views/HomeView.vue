<template>
  <v-container fluid>
    <Loading v-if="isLoading === 0" />
    <v-container v-else>
      <SlideItem v-if="isLoading > 0" :items="animeItems" />
      <SlideItem v-if="isLoading > 1" :items="mangaItems" />
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import SlideItem from '@/components/SlideItem.vue'
import Loading from '@/components/Loading.vue'

const animeItems = ref(null)
const mangaItems = ref(null)
const isLoading = ref(0)

const fetchAnimeData = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing')
    animeItems.value = response.data.data.map((entry) => ({
      id: entry.mal_id,
      title: entry.title,
      media_type: entry.type,
      episode: entry.episodes,
      score: entry.score,
      members: entry.members,
      synopsis: entry.synopsis,
      image: entry.images.webp.large_image_url,
      content: 'anime'
    }))
    isLoading.value++
  } catch (error) {
    console.error('Error fetching anime data:', error)
  }
}

const fetchMangaData = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/manga?filter=publishing')
    mangaItems.value = response.data.data.map((entry) => ({
      id: entry.mal_id,
      title: entry.title,
      media_type: entry.type,
      episode: entry.episodes,
      score: entry.score,
      members: entry.members,
      synopsis: entry.synopsis,
      image: entry.images.webp.large_image_url,
      content: 'manga'
    }))
    isLoading.value++
  } catch (error) {
    console.error('Error fetching manga data:', error)
  }
}

onMounted(async () => {
  await fetchAnimeData()
  await fetchMangaData()
})
</script>
