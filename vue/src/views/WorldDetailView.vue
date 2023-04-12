<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading && merchantStore.currentWorld">
    <div>Name: {{merchantStore.currentWorld.name}}</div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useMerchantStore} from "@/stores/merchant.store";
import {onMounted} from "vue";

import Loading from "../components/Loading.vue"

const merchantStore = useMerchantStore();
const route = useRoute()

onMounted(async () => {
  await merchantStore.setCurrentWorld(route.params.worldId as string);
})
</script>

<style scoped>

</style>