<template>
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
</template>
<script setup>
const socials = [
  {
    icon: 'mdi-github',
    link: 'https://github.com/mozaldy/wamonime'
  },
  {
    icon: 'mdi-instagram',
    link: 'https://instagram.com/wamonime'
  },
  {
    icon: 'mdi-twitter',
    link: 'https://twitter.com/wamonime'
  }
]
</script>
