<template>
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
      :content="item.content"
    />
  </v-col>
</template>
<script setup>
import ItemCard from './ItemCard.vue'
const props = defineProps(['items'])
</script>
