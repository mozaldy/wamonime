<template>
  <v-container>
    <v-col cols="12 d-flex justify-center" v-if="isLoading">
      <v-progress-circular
        width="10"
        size="250"
        indeterminate
        color="primary"
        class="text-center"
      />
    </v-col>
    <v-row class="align-center" v-else>
      <v-col cols="4">
        <v-img
          :src="animeData.images.jpg.large_image_url"
          draggable="false"
          alt="Anime Cover"
        ></v-img
      ></v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>{{ animeData.title }}</v-card-title>
          <v-card-subtitle>{{ animeData.title_japanese }}</v-card-subtitle>
          <v-card-text>
            <p><strong>Synopsis:</strong> {{ animeData.synopsis }}</p>
            <p><strong>Type:</strong> {{ animeData.type }}</p>
            <p><strong>Source:</strong> {{ animeData.source }}</p>
            <p><strong>Episodes:</strong> {{ animeData.episodes }}</p>
            <p><strong>Status:</strong> {{ animeData.status }}</p>
            <p><strong>Aired:</strong> {{ animeData.aired.string }}</p>
            <p><strong>Duration:</strong> {{ animeData.duration }}</p>
            <p><strong>Rating:</strong> {{ animeData.rating }}</p>
            <p><strong>Score:</strong> {{ animeData.score }}</p>
            <p><strong>Rank:</strong> {{ animeData.rank }}</p>
            <p><strong>Popularity:</strong> {{ animeData.popularity }}</p>
            <p><strong>Members:</strong> {{ animeData.members }}</p>
            <p><strong>Favorites:</strong> {{ animeData.favorites }}</p>
            <p>
              <strong class="me-3">Genres:</strong>
              <v-chip v-for="genre in animeData.genres" :key="genre.mal_id" class="mr-2">
                {{ genre.name }}
              </v-chip>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text v-if="animeData.trailer">
              <v-icon left>mdi-play-circle</v-icon>
              <a :href="animeData.trailer.url" target="_blank" rel="noopener noreferrer"
                >Watch Trailer</a
              >
            </v-btn>
            <v-btn text v-if="animeData.url">
              <v-icon left>mdi-link</v-icon>
              <a :href="animeData.url" target="_blank" rel="noopener noreferrer"
                >View on MyAnimeList</a
              >
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

const route = useRoute()
const query = ref(route.params.id)
const animeData = ref()
const isLoading = ref(true)

const fetchAnime = async (id) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    animeData.value = response.data.data
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
fetchAnime(query.value)
</script>
