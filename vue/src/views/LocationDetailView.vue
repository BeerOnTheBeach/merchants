<template>
  <Loading></Loading>
  <div class="m-2" v-if="merchantStore.currentLocation && !merchantStore.loading">
    <h2>{{ merchantStore.currentLocation.name }}</h2>
    <img :src="merchantStore.imageBuilder.getImageUrl(merchantStore.currentLocation.image)" alt="">
    <div v-for="merchant in merchantStore.currentLocation.merchants" :key="merchant._id">
      {{merchant.name}}
    </div>
  </div>

</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"
import {useRoute} from "vue-router";

const merchantStore = useMerchantStore();
const route = useRoute()

onMounted(async () => {
  await merchantStore.setCurrentLocation(route.params.id as string);
})

</script>

<style scoped>
</style>