<template>
  <div class=" divide-y">
    <template :key="merchant" v-for="merchant in merchants">
      <MerchantBase v-if="merchant" :merchant="merchant"></MerchantBase>
    </template>
  </div>
</template>

<script setup lang="ts">
import MerchantBase from "../components/Merchants/MerchantBase.vue"
</script>

<style scoped>

</style>