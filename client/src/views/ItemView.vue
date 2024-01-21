<template>
  <v-container>
    <Loading v-if="isLoading" />
    <v-row class="align-center" v-else>
      <v-col cols="8" md="4" class="mx-auto">
        <v-img :src="data.images.jpg.large_image_url" draggable="false" alt="Anime Cover"></v-img
      ></v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>{{ data.title }}</v-card-title>
          <v-card-subtitle>{{ data.title_japanese }}</v-card-subtitle>
          <v-card-text>
            <p><strong>Synopsis:</strong> {{ data.synopsis }}</p>
            <p><strong>Type:</strong> {{ data.type }}</p>
            <p><strong>Source:</strong> {{ data.source }}</p>
            <p><strong>Episodes:</strong> {{ data.episodes }}</p>
            <p><strong>Status:</strong> {{ data.status }}</p>
            <p v-if="data.aired"><strong>Aired:</strong> {{ data.aired.string }}</p>
            <p><strong>Duration:</strong> {{ data.duration }}</p>
            <p><strong>Rating:</strong> {{ data.rating }}</p>
            <p><strong>Score:</strong> {{ data.score }}</p>
            <p><strong>Rank:</strong> {{ data.rank }}</p>
            <p><strong>Popularity:</strong> {{ data.popularity }}</p>
            <p><strong>Members:</strong> {{ data.members }}</p>
            <p><strong>Favorites:</strong> {{ data.favorites }}</p>
            <p>
              <strong class="me-3">Genres:</strong>
              <v-chip v-for="genre in data.genres" :key="genre.mal_id" class="mr-2">
                {{ genre.name }}
              </v-chip>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text v-if="data.trailer">
              <v-icon left>mdi-play-circle</v-icon>
              <a :href="data.trailer.url" target="_blank" rel="noopener noreferrer"
                >Watch Trailer</a
              >
            </v-btn>
            <v-btn text v-if="data.url">
              <v-icon left>mdi-link</v-icon>
              <a :href="data.url" target="_blank" rel="noopener noreferrer">View on MyAnimeList</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import Loading from '@/components/Loading.vue'

const route = useRoute()
const query = ref(route.params.id)
const data = ref()
const isLoading = ref(true)

const content_type = route.meta.content

const fetchAnime = async (id) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/${content_type}/${id}`)
    data.value = response.data.data
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
fetchAnime(query.value)
</script>
