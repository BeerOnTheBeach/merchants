<template>
  <router-link to="/" class="item cursor-pointer m-2 ">
    <div class="card w-30 bg-base-100 shadow-xl max-w-xs max-h-72">
      <figure><img :src="getImageUrl(props.item.image)" alt="Shoes" /></figure>
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
  item: Item
})

const client = new Client();

const builder = imageUrlBuilder({
  projectId: client.projectId,
  dataset: client.dataset,
})

function getImageUrl(image:Image) {
  return builder.image(image)
}
</script>

<style scoped>

</style>