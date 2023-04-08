<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading" class="divide-y">
    <template :key="merchant" v-for="merchant in merchantStore.merchants">
      <MerchantBase v-if="merchant" :merchant="merchant"></MerchantBase>
    </template>
  </div>
</template>

<script setup lang="ts">
import MerchantBase from "../components/Merchants/MerchantBase.vue"

import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"

const merchantStore = useMerchantStore();

onMounted(() => {
  merchantStore.fetchMerchants();
})
</script>

<style scoped>

</style>