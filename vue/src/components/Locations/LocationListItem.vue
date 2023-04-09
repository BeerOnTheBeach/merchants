<template>
  <router-link v-if="props.location.active" :to="`/location/${props.location._id}`">
    <div class="location p-3">
      <h2>{{ props.location.name }}</h2>
      <div v-if="imageUrl">
        <img :src="imageUrl" alt="">
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import Location from "@/types/location";
import {useMerchantStore} from "@/stores/merchant.store";

const props = defineProps({
  location: {
    type: Location,
    required: true
  }
})

const merchantStore = useMerchantStore();

const imageUrl = merchantStore.imageBuilder.getImageUrl(props.location.image)
</script>

<style scoped>
.location {

}
</style>