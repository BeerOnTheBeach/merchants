<template>
  <router-link to="/" class="item cursor-pointer mt-2">
    <div class="card card-compact shadow-xl">
      <figure class="w-32 h-32"><img v-if="imageUrl" class="object-cover" :src="imageUrl" alt=""/></figure>
      <div class="w-40 h-48 card-body">
        <h2 class="card-title">
          {{ props.item.name }}
        </h2>
        <div>{{ props.item.description }}</div>
        <div class="mt-auto">
          <div class="badge badge-outline">Preis: {{ props.item.price }} Kupfer</div>
          <div class="btn btn-primary btn-xs mt-2"> Kaufen</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import {Item} from "@/types/item";
import imageUrlBuilder from '@sanity/image-url'
import {Client} from "@/api/client";
import {Image} from "@/types/image";

const props = defineProps({
  item: {
    type: Item,
    required: true
  }
})

const client = new Client();

const builder = imageUrlBuilder({
  projectId: client.projectId,
  dataset: client.dataset,
})

const imageUrl = getImageUrl(props.item.image)

function getImageUrl(image: Image): string | null {
  if (image) {
    return builder.image(image)
  }
  return null;
}
</script>

<style scoped>

</style>