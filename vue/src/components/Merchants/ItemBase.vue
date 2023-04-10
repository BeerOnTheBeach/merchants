<template>
  <router-link v-if="props.item" to="#" class="item cursor-pointer mt-2 ml-1.5">
    <div class="card card-compact shadow-xl border border-accent">
      <figure class="w-40 h-32"><img v-if="imageUrl" class="object-cover" :src="imageUrl" alt=""/></figure>
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
import {Image} from "@/types/image";
import {useMerchantStore} from "@/stores/merchant.store";

const props = defineProps({
  item: {
    type: Item,
    required: true
  }
})
const merchantStore = useMerchantStore();
const imageUrl = props.item && props.item.image ? merchantStore.imageBuilder.getImageUrl(props.item.image) : '';
</script>

<style scoped>

</style>