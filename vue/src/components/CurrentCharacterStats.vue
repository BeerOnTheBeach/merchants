<template>
  <div v-if="merchantStore.currentCharacter" class="stats shadow">
    <div class="stat p-1 place-items-end">
      <div class="stat-title">Cash:</div>
      <div class="stat-value text-primary text-xl text-accent">{{merchantStore.currentCharacter.money}}</div>
    </div>
    <div class="stat p-1 place-items-end">
      <div class="stat-title">Items:</div>
      <div class="stat-value text-primary text-xl text-accent">{{itemAmount}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMerchantStore} from "@/stores/merchant.store";
import {computed} from "vue";

const merchantStore = useMerchantStore();
const itemAmount = computed(() => {
  if (merchantStore.currentCharacter && merchantStore.currentCharacter.items) {
    return merchantStore.currentCharacter.items.length;
  } else {
    return 0;
  }
})
</script>

<style scoped>

</style>