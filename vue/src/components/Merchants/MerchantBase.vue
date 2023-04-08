<template>
  <div class="merchant p-3">
    <div class="merchant-data flex pl-2">
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-12 h-12">
          <span class="text-1xl">{{ props.location.name[0] }}</span>
        </div>
      </div>
      <div class="ml-2 pt-3 text-1xl">{{ props.location.name }}</div>
    </div>
    <div class="items-container flex flex-wrap ">
      <ItemBase :location="item" :key="item" v-for="item in location.items"></ItemBase>
    </div>
  </div>
</template>

<script setup lang="ts">
import Merchant from "@/types/merchant";
import ItemBase from "@/components/Merchants/ItemBase.vue"

const props = defineProps({
  location: {
    type: Merchant,
    required: true
  }
})
</script>

<style scoped>
.merchant {

}
</style>