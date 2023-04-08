<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading" class=" divide-y">
    <template :key="location" v-for="location in merchantStore.locations">
      <LocationListItem v-if="location" :location="location"></LocationListItem>
    </template>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"
import LocationListItem from "@/components/Locations/LocationListItem.vue";

const merchantStore = useMerchantStore();

onMounted(() => {
  merchantStore.fetchLocations();
})</script>

<style scoped>

</style>