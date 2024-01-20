<template>
  <v-app>
    <v-container>
      <p class="text-h4">
        Search result for "<span class="font-weight-bold">{{ query }}</span
        >"
      </p>
      <p v-if="isLoading" class="text-h4">LOADING</p>
      <v-row>
        <v-col class="justify-center" cols="12" sm="6" md="4" v-for="item in items">
          <ItemCard
            :title="item.title"
            :episode="item.episode"
            :score="item.score"
            :members="item.members"
            :media_type="item.media_type"
            :synopsis="item.synopsis"
            :img_src="item.img_src"
            :id="item.id"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import ItemCard from '../components/ItemCard.vue'

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
      img_src: entry.images.webp.large_image_url
    }))
    isLoading.value = false
  } catch (error) {
    console.log('Error fetching APIs!')
  }
}

fetchData(query.value)
</script>
