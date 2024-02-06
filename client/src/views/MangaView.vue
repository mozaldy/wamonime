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
    <p class="text-h4">{{ selected_category.desc }}</p>
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
const categories = ref([
  { id: 'publishing', title: 'Top Publishing', desc: 'The top publishing manga this season.' },
  { id: 'bypopularity', title: 'Most Popular', desc: 'The most popular manga of all time.' },
  { id: 'favorite', title: 'Most Favorites', desc: 'The most favorited manga of all time.' }
])
const selected_category = ref(categories.value[0])

const fetchmangas = async () => {
  try {
    console.log(selected_category.value.id)
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/manga?filter=${selected_category.value.id}`
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
      content: 'manga'
    }))
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
const handleCategory = () => {
  isLoading.value = true
  fetchmangas()
}

fetchmangas()
</script>
