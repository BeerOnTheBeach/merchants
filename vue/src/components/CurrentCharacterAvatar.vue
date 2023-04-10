<template>
  <div v-if="!merchantStore.currentCharacter" class="avatar placeholder">
    <div class="bg-neutral-focus text-neutral-content rounded-full w-12 h-12"><span class="text-1xl">n/a</span>
    </div>
  </div>
  <div v-else class="current-char-avatar flex">
    <div v-if="!imageUrl" class="avatar placeholder mask mask-hexagon">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-12 h-12">
        <span class="text-1xl">{{ merchantStore.currentCharacter.name }}</span>
      </div>
    </div>
    <div v-else class="avatar mask mask-hexagon">
      <div class="w-16 rounded-full">
        <img v-if="imageUrl" :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMerchantStore} from "@/stores/merchant.store";
import {computed} from "vue";

const merchantStore = useMerchantStore();
const imageUrl = computed(() => {
  return merchantStore.currentCharacter && merchantStore.currentCharacter.image
      ? `${merchantStore.imageBuilder.getImageUrl(merchantStore.currentCharacter.image)}` : null;
})

</script>

<style scoped>

</style>