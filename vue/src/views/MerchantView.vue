<template>
  <div class="divide-y">
    <template :key="merchant" v-for="merchant in merchantStore.merchants">
      <MerchantBase v-if="merchant" :location="merchant"></MerchantBase>
    </template>
  </div>
</template>

<script setup lang="ts">
import MerchantBase from "../components/Merchants/MerchantBase.vue"
import {useMerchantStore} from "@/stores/merchant.store";

const merchantStore = useMerchantStore();

</script>

<style scoped>

</style>