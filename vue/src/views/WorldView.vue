<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading" class=" divide-y">
    <template :key="world._id" v-for="world in merchantStore.worlds">
      <div class="hero" :style="'background-image: url(' + merchantStore.imageBuilder.getImageUrl(world.image) + ');'">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">{{ world.name }}</h1>
            <p class="mb-5"></p>
            <div class="flex">
              <router-link :to="`/world/${world._id}`" class="btn btn-primary m-2">Details</router-link>
              <div class="btn btn-secondary m-2">Welt auswählen</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"

const merchantStore = useMerchantStore();

onMounted(() => {
  merchantStore.fetchWorlds();
})</script>

<style scoped>

</style>