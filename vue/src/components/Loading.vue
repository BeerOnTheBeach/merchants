<template>
  <button v-if="merchantStore.loading" class="w-80 m-5 btn btn-square loading"></button>
</template>

<script setup lang="ts">
import {useMerchantStore} from "@/stores/merchant.store";

const merchantStore = useMerchantStore();
</script>

<style scoped>

</style>