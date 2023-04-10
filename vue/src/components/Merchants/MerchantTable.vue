<template>
  <div :key="merchant._id" v-for="merchant in props.merchants" class="merchant-list">
    <div v-if="merchant.active" class="hero"
         :style="'background-image: url(' + merchantStore.imageBuilder.getImageUrl(merchant.image) + ');'">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ merchant.name }}</h1>
          <p class="mb-5"></p>
          <router-link :to="`${$route.params.locationId}/merchant/${merchant._id}`" class="btn btn-primary">Items: {{ getItemAmount(merchant) }}
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {useMerchantStore} from "@/stores/merchant.store";
import type {PropType} from "vue";
import type Merchant from "@/types/merchant";

const props = defineProps({
  merchants: {
    type: Array as PropType<Array<Merchant>>,
    required: true,
  }
})

const merchantStore = useMerchantStore();
function getItemAmount(merchant:Merchant):number|string {
  return merchant.items ? merchant.items.length : "-";
}
</script>

<style scoped>

</style>