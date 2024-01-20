<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
            @click:append="searchItems"
            @keydown.enter="handleEnter"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Display search results -->
      <v-row v-if="searchResults.length > 0" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-list>
            <v-list-item-group v-if="searchResults.length > 0">
              <v-list-item v-for="result in searchResults" :key="result.id">
                <v-list-item-content>
                  <v-list-item-title>{{ result.title }}</v-list-item-title>
                  <!-- Add other details here as needed -->
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')
const searchResults = ref([])

const searchItems = async () => {
  try {
    // Simulate API request
    // Replace this with your actual API endpoint and data processing logic
    // For demonstration purposes, the results are hardcoded here
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, title: 'Result 1' },
            { id: 2, title: 'Result 2' },
            { id: 3, title: 'Result 3' }
          ]
        })
      }, 1000)
    })

    searchResults.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const handleEnter = () => {
  // Navigate to the '/search' route when the user hits Enter
  router.push('/search')
}
</script>

<style>
/* Add your custom styles here */
</style>
