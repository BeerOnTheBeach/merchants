<template>
    <div v-if="props.location.active" class="hero" :style="'background-image: url(' + imageUrl + ');'">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ props.location.name }}</h1>
          <p class="mb-5">{{ props.location.description }}</p>
          <router-link :to="`/location/${props.location._id}`" class="btn btn-primary">Händler: {{merchantAmount}}</router-link>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Location from "@/types/location";
import {useMerchantStore} from "@/stores/merchant.store";
import {computed} from "vue";

const props = defineProps({
  location: {
    type: Location,
    required: true
  }
})

const merchantStore = useMerchantStore();
const imageUrl = merchantStore.imageBuilder.getImageUrl(props.location.image)
const merchantAmount = computed(() => {
  return props.location.merchants ? props.location.merchants.length : "-";
})
</script>

<style scoped>
.location {

}
</style>