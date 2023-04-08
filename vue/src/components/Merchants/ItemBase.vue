<template>
  <router-link to="/" class="item cursor-pointer m-2 ">
    <div class="card w-30 bg-base-100 shadow-xl max-w-xs max-h-72">
      <figure v-if="imageUrl"><img :src="imageUrl" alt="" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          {{props.item.name}}
          <div v-if="Math.floor(Math.random() * 2) === 1" class="badge badge-secondary">NEW</div>
        </h2>
        <p>{{ props.item.description }}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{{props.item.price}} Kupfer</div>
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

function getImageUrl(image:Image): string|null {
  if (image) {
    return builder.image(image)
  }
  return null;
}
</script>

<style scoped>

</style>