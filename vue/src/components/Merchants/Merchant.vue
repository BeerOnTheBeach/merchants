<template>
  <div class="merchant">
    <h1>{{ props.merchant.name }}</h1>
    <div class="items-container flex">
      <Item :item="item" :key="item" v-for="item in merchant.items"></Item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Merchant} from "@/types/merchant";
import Item from "@/components/Merchants/Item.vue"

const props = defineProps({
  merchant: Merchant
})
</script>

<style scoped>

</style>