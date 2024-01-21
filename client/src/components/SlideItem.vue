<template>
  <h1>Top {{ items[0].content }}</h1>
  <v-slide-group
    center-active
    cycle
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
    v-model="card"
    mobile-breakpoint="sm"
  >
    <v-slide-group-item
      v-for="item in items"
      :key="item.id"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        :color="`rgba(1, 87, 155, 0.5)`"
        :class="['ma-4', selectedClass]"
        height="400"
        width="300"
        @click="toggle"
        e
        :image="item.image"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-card
              class="fill-height w-100"
              :color="`rgba(1, 87, 155, 0.6)`"
              theme="dark"
              v-if="isSelected"
            >
              <div class="d-flex flex-wrap fill-height align-start">
                <v-col cols="12">
                  <v-card-title class="text-h7 text-md-h6 text-lg-h5">{{
                    item.title
                  }}</v-card-title>
                  <v-card-text> {{ item.media_type }} ({{ item.episode }} eps)</v-card-text>
                  <v-card-text>
                    <p class="line-clamp">
                      {{ item.synopsis }}
                    </p>
                  </v-card-text>
                </v-col>
                <v-col class="align-self-end" cols="12">
                  <v-card-text class="py-1">
                    <v-icon class="me-3" icon="mdi-star" />
                    {{ item.score }}
                  </v-card-text>
                  <v-card-text class="py-1">
                    <v-icon class="me-3" icon="mdi-account-multiple" />
                    {{ item.members }}
                  </v-card-text>
                </v-col>
                <v-col class="align-self-end" cols="12">
                  <v-btn :to="`${item.content}/${item.id}`" color="blue-darken-4" block>More</v-btn>
                </v-col>
              </div>
            </v-card>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
  <v-col class="d-flex justify-center" cols="12">
    <v-btn :to="items[0].content" color="blue-darken-4">More {{ items[0].content }}</v-btn>
  </v-col>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['items'])
const card = ref(null)
</script>
<style scoped>
.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  white-space: normal;
}
</style>
