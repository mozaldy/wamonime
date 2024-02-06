<template>
  <v-container>
    <v-select
      v-model="selected_category"
      :items="categories"
      item-title="title"
      label="Select"
      persistent-hint
      return-object
      single-line
      @update:model-value="handleCategory"
    />
    <v-scroll-y-transition leave-absolute group mode="out-in">
      <p class="text-h4">{{ selected_category.desc }}</p>
      <Loading v-if="isLoading" />
      <v-row v-else>
        <ListItem :items />
      </v-row>
    </v-scroll-y-transition>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import ListItem from '@/components/ListItem.vue'
import Loading from '@/components/Loading.vue'

const items = ref(null)
const isLoading = ref(true)
const categories = ref([
  { id: 'airing', title: 'Top Airing', desc: 'The top airing anime this season.' },
  { id: 'upcoming', title: 'Top Upcoming', desc: 'The top upcoming anime next season.' },
  { id: 'bypopularity', title: 'Most Popular', desc: 'The most popular anime of all time.' },
  { id: 'favorite', title: 'Most Favorites', desc: 'The most favorited anime of all time.' }
])
const selected_category = ref(categories.value[0])

const fetchAnimes = async () => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?filter=${selected_category.value.id}`
    )
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

const handleCategory = () => {
  isLoading.value = true
  fetchAnimes()
}

fetchAnimes()
</script>
