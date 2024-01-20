<template>
  <main>
    <v-container class="d-flex flex-wrap justify-center">
      <v-col cols="12" class="justify-center d-flex">
        <v-avatar color="blue-darken-4 pa-2 col-12" size="150">
          <p class="text-h2">WM</p>
        </v-avatar>
      </v-col>
      <v-col cols="12" class="justify-center d-flex">
        <p class="text-h3 font-weight-black">Wamonime</p>
      </v-col>
      <v-col cols="12" class="justify-center d-flex">
        <v-combobox
          v-model="query"
          :items="result"
          variant="solo-filled"
          label="Search Anime or Manga"
          append-inner-icon="mdi-magnify"
          rounded="xl"
          single-line
          clearable
          @keyup.enter="handleSearch"
          @click:append-inner="handleSearch"
        />
      </v-col>
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
    </v-container>
  </main>
</template>

<script setup>
import socials from '../data/socials.js'
import { ref, watch } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const query = ref(null)
const result = ref([])
const router = useRouter()

const fetchquery = async (q) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime', {
      params: {
        q,
        limit: 3,
        sfw: true
      }
    })

    result.value = response.data.data.map((entry) => ({
      title: entry.title_english,
      id: entry.mal_id
    }))
  } catch (error) {
    console.log('error fetching data!')
  }
}

let timeout

watch(query, (value) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    fetchquery(value)
  }, 500)
})

const handleSearch = () => {
  if (query.value) {
    if (typeof query.value === 'string') {
      router.push({ name: 'search', params: { q: query.value } })
    } else {
      router.push({ name: 'anime_view', params: { id: query.value.id } })
    }
  }
}
</script>
