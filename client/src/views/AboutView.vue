<template>
  <main>
    <v-container class="d-flex flex-wrap justify-center">
      <v-col cols="12" md="6">
        <v-col cols="12" class="justify-center d-flex">
          <v-avatar color="blue-darken-4 pa-2 col-12" size="150">
            <p class="text-h2">WM</p>
          </v-avatar>
        </v-col>
        <v-col cols="12" class="justify-center d-flex">
          <p class="text-h3 font-weight-black">Wamonime</p>
        </v-col>
      </v-col>
      <v-col cols="12" md="6">
        <v-col cols="12">
          <h2 class="text-h4">About Us</h2>
          <p>
            Welcome to the Anime Recommendation System! is a full-stack web application that
            provides personalized anime recommendations based on user preferences.
          </p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h4">Our Mission</h2>
          <p>
            Our mission is to transform the way anime enthusiasts discover their next favorite
            series or film. We leverage the potential of data and machine learning to provide
            personalized suggestions, enhancing the streaming experience for our users.
          </p>
        </v-col>
      </v-col>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" md="6" class="d-flex flex-wrap">
            <v-card>
              <v-card-title class="text-h4">Contact Us</v-card-title>
              <v-card-subtitle>
                Feel free to get in touch with us! Whether you have questions, feedback, or just
                want to say hello, we'd love to hear from you!
              </v-card-subtitle>
            </v-card>
            <v-card color="blue-darken-4" class="align-center d-flex flex-wrap">
              <v-card-title>Contact Information</v-card-title>

              <v-card-text>
                <p><strong>Email:</strong> moxaldy@gmail.com</p>
                <p><strong>Phone:</strong> +62-812-3456-7890</p>
                <p>
                  <strong>Address:</strong> Politeknik Elektronika Negeri Surabaya Jl. Raya ITS,
                  Keputih, Sukolilo, Surabaya, East Java 60111
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Contact Form</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field variant="outlined" v-model="name" label="Your Name"></v-text-field>
                  <v-text-field
                    v-model="email"
                    type="email"
                    variant="outlined"
                    suffix="@gmail.com"
                    label="Email"
                  ></v-text-field>
                  <v-textarea variant="outlined" v-model="message" label="Message"></v-textarea>
                  <v-btn type="submit" color="blue-darken-4">Submit</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Socials />
    </v-container>
  </main>
</template>
<script setup>
import Socials from '@/components/Socials.vue'
import { ref } from 'vue'
const name = ref(null)
const email = ref(null)
const message = ref(null)

const submitForm = () => {
  console.log('Form submitted:', name, email, message)
}
</script>
<style scoped>
.v-card-subtitle {
  white-space: normal;
  padding: 0 1rem 1rem 1rem;
}
</style>
