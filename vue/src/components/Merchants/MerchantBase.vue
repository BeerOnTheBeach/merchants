<template>
  <div class="merchant ml-3 mt-5">
    <div class="merchant-data flex ml-5 p-3">
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
          <span class="text-3xl">{{ props.merchant.name[0] }}</span>
        </div>
      </div>
      <h1 class="ml-4 pt-3">{{ props.merchant.name }}</h1>
    </div>
    <div class="items-container flex">
      <ItemBase :item="item" :key="item" v-for="item in merchant.items"></ItemBase>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Merchant} from "@/types/merchant";
import ItemBase from "@/components/Merchants/ItemBase.vue"

const props = defineProps({
  merchant: {
    type: Merchant,
    required: true
  }
})
</script>

<style scoped>

</style>